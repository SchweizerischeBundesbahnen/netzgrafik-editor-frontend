import {NodeService} from "../services/data/node.service";

export class MultiSelectNodeGraph {

  private adjList = new Map();

  constructor(readonly nodeService: NodeService) {
    this.adjList = new Map();
  }

  addVertex(v) {
    this.adjList.set(v, []);
  }

  addEdge(v, e) {
    this.adjList.get(v).push(e);
  }

  createAdjList(edgeList) {
    edgeList.forEach(edge => {
      this.addVertex(edge[0]);
      this.addVertex(edge[1]);
    });

    edgeList.forEach(edge => {
      this.addEdge(edge[0], edge[1]);
      this.addEdge(edge[1], edge[0]);
    });
  }

  nodeDegree(v): number {
    return this.adjList.get(v).length;
  }

  getStartEndingVertices() {
    const startPathVertices = [];
    for (const node of this.adjList.keys()) {
      if (this.nodeDegree(node) === 1) {
        startPathVertices.push(node);
      }
    }
    return startPathVertices;
  }

  getPath(start, end, visited = {}, retPath = []) {
    retPath.push(this.nodeService.getNodeFromId(start));
    // base condition
    if (start === end) {
      return {path: retPath, end: true};
    }

    visited[start] = true;
    const childrens = this.adjList.get(start);
    if (childrens === undefined) {
      return {path: retPath, end: false};
    }
    for (const node of childrens) {
      if (!visited[node]) {
        const result = this.getPath(node, end, {...visited}, Object.assign([], retPath));
        if (result.end) {
          return {path: result.path, end: true};
        }
      }
    }
    return {path: retPath, end: false};
  }
}
