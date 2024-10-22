import {Trainrun} from "src/app/models/trainrun.model";
import {TrainrunService} from "src/app/services/data/trainrun.service";
import {TrainrunIterator} from "src/app/services/util/trainrun.iterator";
import {Node} from "src/app/models/node.model";

// A vertex indicates a "state": e.g. arriving at a node at a certain time and from a given trainrun.
export class Vertex {
  constructor(
    public nodeId: number,
    // Indicates if we depart or arrive at the node.
    public isDeparture: boolean,
    // Optional fields are undefined for "convenience" vertices.
    // Absolute time (duration from the start of the schedule) in minutes.
    public time?: number,
    // Negative trainrun ids are used for reverse directions.
    public trainrunId?: number,
  ) {}
}

export class Edge {
  constructor(
    public v1: Vertex,
    public v2: Vertex,
    // The weight represents the cost of the edge, it is similar to a duration in minutes
    // but it may include a connection penalty cost.
    public weight: number,
  ) {}
}

export const buildEdges = (
  nodes: Node[],
  odNodes: Node[],
  trainruns: Trainrun[],
  connectionPenalty: number,
  trainrunService: TrainrunService,
  timeLimit: number,
): Edge[] => {
  let edges = buildSectionEdges(trainruns, trainrunService, timeLimit);

  const verticesDepartureByTrainrunByNode = new Map<
    number,
    Map<number, Vertex[]>
  >();
  const verticesArrivalByTrainrunByNode = new Map<
    number,
    Map<number, Vertex[]>
  >();
  edges.forEach((edge) => {
    const src = edge.v1;
    const tgt = edge.v2;
    if (src.isDeparture !== true) {
      console.log("src is not a departure: ", src);
    }
    if (tgt.isDeparture !== false) {
      console.log("tgt is not an arrival: ", tgt);
    }
    const departuresByTrainrun = verticesDepartureByTrainrunByNode.get(
      src.nodeId,
    );
    if (departuresByTrainrun === undefined) {
      verticesDepartureByTrainrunByNode.set(
        src.nodeId,
        new Map<number, Vertex[]>([[src.trainrunId, [src]]]),
      );
    } else {
      const departures = departuresByTrainrun.get(src.trainrunId);
      if (departures === undefined) {
        departuresByTrainrun.set(src.trainrunId, [src]);
      } else {
        departures.push(src);
      }
    }
    const arrivalsByTrainrun = verticesArrivalByTrainrunByNode.get(tgt.nodeId);
    if (arrivalsByTrainrun === undefined) {
      verticesArrivalByTrainrunByNode.set(
        tgt.nodeId,
        new Map<number, Vertex[]>([[tgt.trainrunId, [tgt]]]),
      );
    } else {
      const arrivals = arrivalsByTrainrun.get(tgt.trainrunId);
      if (arrivals === undefined) {
        arrivalsByTrainrun.set(tgt.trainrunId, [tgt]);
      } else {
        arrivals.push(tgt);
      }
    }
  });

  // Sorting is useful to find relevant connections later.
  verticesDepartureByTrainrunByNode.forEach((verticesDepartureByTrainrun) => {
    verticesDepartureByTrainrun.forEach((departures, trainrunId) => {
      departures.sort((a, b) => a.time - b.time);
    });
  });
  verticesArrivalByTrainrunByNode.forEach((verticesArrivalByTrainrun) => {
    verticesArrivalByTrainrun.forEach((arrivals, trainrunId) => {
      arrivals.sort((a, b) => a.time - b.time);
    });
  });

  // Note: pushing too many elements at once does not work well.
  edges = [
    ...edges,
    ...buildConvenienceEdges(
      odNodes,
      verticesDepartureByTrainrunByNode,
      verticesArrivalByTrainrunByNode,
    ),
  ];
  edges = [
    ...edges,
    ...buildConnectionEdges(
      nodes,
      verticesDepartureByTrainrunByNode,
      verticesArrivalByTrainrunByNode,
      connectionPenalty,
    ),
  ];

  return edges;
};

// Given edges, return the neighbors (with weights) for each vertex, if any (outgoing adjacency list).
export const computeNeighbors = (
  edges: Edge[],
): Map<string, [Vertex, number][]> => {
  const neighbors = new Map<string, [Vertex, number][]>();
  edges.forEach((edge) => {
    const v1 = JSON.stringify(edge.v1);
    const v1Neighbors = neighbors.get(v1);
    if (v1Neighbors === undefined) {
      neighbors.set(v1, [[edge.v2, edge.weight]]);
    } else {
      v1Neighbors.push([edge.v2, edge.weight]);
    }
  });
  return neighbors;
};

// Given a graph (adjacency list), return the vertices in topological order.
// Note: sorting vertices by time would be enough for our use case.
export const topoSort = (graph: Map<string, [Vertex, number][]>): Vertex[] => {
  const res = [];
  const visited = new Set<string>();
  for (const node of graph.keys()) {
    if (!visited.has(node)) {
      depthFirstSearch(graph, JSON.parse(node) as Vertex, visited, res);
    }
  }
  return res.reverse();
};

// Given a graph (adjacency list), and vertices in topological order, return the shortest paths (and connections)
// from a given node to other nodes.
export const computeShortestPaths = (
  from: number,
  neighbors: Map<string, [Vertex, number][]>,
  vertices: Vertex[],
): Map<number, [number, number]> => {
  const res = new Map<number, [number, number]>();
  const dist = new Map<string, [number, number]>();
  let started = false;
  vertices.forEach((vertex) => {
    const key = JSON.stringify(vertex);
    // First, look for our start node.
    if (!started) {
      if (
        from === vertex.nodeId &&
        vertex.isDeparture === true &&
        vertex.time === undefined
      ) {
        started = true;
        dist.set(key, [0, 0]);
      } else {
        return;
      }
    }
    // We found an end node.
    if (
      vertex.isDeparture === false &&
      vertex.time === undefined &&
      dist.get(key) !== undefined &&
      vertex.nodeId !== from
    ) {
      res.set(vertex.nodeId, dist.get(key));
    }
    const neighs = neighbors.get(key);
    if (neighs === undefined || dist.get(key) === undefined) {
      return;
    }
    // The shortest path from the start node to this vertex is a shortest path from the start node to a neighbor
    // plus the weight of the edge connecting the neighbor to this vertex.
    neighs.forEach(([neighbor, weight]) => {
      const alt = dist.get(key)[0] + weight;
      const neighborKey = JSON.stringify(neighbor);
      if (
        dist.get(neighborKey) === undefined ||
        alt < dist.get(neighborKey)[0]
      ) {
        let connection = 0;
        if (
          vertex.trainrunId !== undefined &&
          neighbor.trainrunId !== undefined &&
          vertex.trainrunId !== neighbor.trainrunId
        ) {
          connection = 1;
        }
        dist.set(neighborKey, [alt, dist.get(key)[1] + connection]);
      }
    });
  });
  return res;
};

const buildSectionEdges = (
  trainruns: Trainrun[],
  trainrunService: TrainrunService,
  timeLimit: number,
): Edge[] => {
  const edges = [];
  const its = trainrunService.getRootIterators();
  trainruns.forEach((trainrun) => {
    const tsIterators = its.get(trainrun.getId());
    if (tsIterators === undefined) {
      console.log("Ignoring trainrun (no root found): ", trainrun.getId());
      return;
    }
    tsIterators.forEach((tsIterator) => {
      edges.push(
        ...buildSectionEdgesFromIterator(tsIterator, false, timeLimit),
      );
      // Don't forget the reverse direction.
      const ts = tsIterator.current().trainrunSection;
      const nextIterator = trainrunService.getIterator(ts.getTargetNode(), ts);
      edges.push(
        ...buildSectionEdgesFromIterator(nextIterator, true, timeLimit),
      );
    });
  });
  return edges;
};

const buildSectionEdgesFromIterator = (
  tsIterator: TrainrunIterator,
  reverse: boolean,
  timeLimit: number,
): Edge[] => {
  const edges = [];
  let nonStopV1Time = -1;
  let nonStopV1Node = -1;
  while (tsIterator.hasNext()) {
    tsIterator.next();
    const ts = tsIterator.current().trainrunSection;
    const trainrunId = reverse ? -ts.getTrainrunId() : ts.getTrainrunId();
    const v1Time = reverse
      ? ts.getTargetDepartureDto().consecutiveTime
      : ts.getSourceDepartureDto().consecutiveTime;
    const v1Node = reverse ? ts.getTargetNodeId() : ts.getSourceNodeId();
    // If we don't stop here, we need to remember where we started.
    if (
      reverse
        ? ts.getSourceNode().isNonStop(ts)
        : ts.getTargetNode().isNonStop(ts)
    ) {
      if (nonStopV1Time === -1) {
        nonStopV1Time = v1Time;
        nonStopV1Node = v1Node;
      }
      continue;
    }
    let v1 = new Vertex(v1Node, true, v1Time, trainrunId);
    let nonStop = false;
    if (nonStopV1Time !== -1) {
      v1 = new Vertex(nonStopV1Node, true, nonStopV1Time, trainrunId);
      nonStopV1Time = -1;
      nonStop = true;
    }
    const v2Time = reverse
      ? ts.getSourceArrivalDto().consecutiveTime
      : ts.getTargetArrivalDto().consecutiveTime;
    const v2Node = reverse ? ts.getSourceNodeId() : ts.getTargetNodeId();
    const v2 = new Vertex(v2Node, false, v2Time, trainrunId);

    for (let i = 0; i * ts.getTrainrun().getFrequency() < timeLimit; i++) {
      const newV1 = new Vertex(
        v1.nodeId,
        v1.isDeparture,
        v1.time + i * ts.getTrainrun().getFrequency(),
        v1.trainrunId,
      );
      const newV2 = new Vertex(
        v2.nodeId,
        v2.isDeparture,
        v2.time + i * ts.getTrainrun().getFrequency(),
        v2.trainrunId,
      );
      const edge = new Edge(newV1, newV2, newV2.time - newV1.time);
      edges.push(edge);
    }
  }
  return edges;
};

const buildConvenienceEdges = (
  nodes: Node[],
  verticesDepartureByTrainrunByNode: Map<number, Map<number, Vertex[]>>,
  verticesArrivalByTrainrunByNode: Map<number, Map<number, Vertex[]>>,
): Edge[] => {
  const edges = [];
  nodes.forEach((node) => {
    const nodeId = node.getId();
    // We add a single start and end vertex for each node, so we can compute shortest paths more easily.
    const srcVertex = new Vertex(nodeId, true);
    const tgtVertex = new Vertex(nodeId, false);
    // Going from one node to itself is free.
    const edge = new Edge(srcVertex, tgtVertex, 0);
    edges.push(edge);
    const departuresByTrainrun = verticesDepartureByTrainrunByNode.get(nodeId);
    if (departuresByTrainrun !== undefined) {
      departuresByTrainrun.forEach((departures, trainrunId) => {
        departures.forEach((departure) => {
          const edge = new Edge(srcVertex, departure, 0);
          edges.push(edge);
        });
      });
    }
    const arrivalsByTrainrun = verticesArrivalByTrainrunByNode.get(nodeId);
    if (arrivalsByTrainrun !== undefined) {
      arrivalsByTrainrun.forEach((arrivals, trainrunId) => {
        arrivals.forEach((arrival) => {
          const edge = new Edge(arrival, tgtVertex, 0);
          edges.push(edge);
        });
      });
    }
  });
  return edges;
};

const buildConnectionEdges = (
  nodes: Node[],
  verticesDepartureByTrainrunByNode: Map<number, Map<number, Vertex[]>>,
  verticesArrivalByTrainrunByNode: Map<number, Map<number, Vertex[]>>,
  connectionPenalty: number,
): Edge[] => {
  const edges = [];
  nodes.forEach((node) => {
    const departuresByTrainrun = verticesDepartureByTrainrunByNode.get(
      node.getId(),
    );
    const arrivalsByTrainrun = verticesArrivalByTrainrunByNode.get(
      node.getId(),
    );
    if (
      departuresByTrainrun !== undefined &&
      arrivalsByTrainrun !== undefined
    ) {
      arrivalsByTrainrun.forEach((arrivals, arrivalTrainrunId) => {
        arrivals.forEach((arrival) => {
          departuresByTrainrun.forEach((departures, departureTrainrunId) => {
            let minDepartureTime = arrival.time;
            if (arrivalTrainrunId !== departureTrainrunId) {
              minDepartureTime += node.getConnectionTime();
            }
            // For each arrival and for each trainrun available, we only want to consider the first departure.
            // This could be a binary search but it does not seem to be worth it.
            const departure = departures.find((departure) => {
              return departure.time >= minDepartureTime;
            });
            if (departure !== undefined) {
              let cost = departure.time - arrival.time;
              if (arrivalTrainrunId !== departureTrainrunId) {
                cost += connectionPenalty;
              }
              const edge = new Edge(arrival, departure, cost);
              edges.push(edge);
            }
          });
        });
      });
    }
  });
  return edges;
};

const depthFirstSearch = (
  graph: Map<string, [Vertex, number][]>,
  root: Vertex,
  visited: Set<string>,
  res: Vertex[],
): void => {
  const key = JSON.stringify(root);
  visited.add(key);
  const neighbors = graph.get(key);
  if (neighbors !== undefined) {
    neighbors.forEach(([neighbor, weight]) => {
      if (!visited.has(JSON.stringify(neighbor))) {
        depthFirstSearch(graph, neighbor, visited, res);
      }
    });
  }
  // Note that the order is important for topological sorting.
  res.push(root);
};
