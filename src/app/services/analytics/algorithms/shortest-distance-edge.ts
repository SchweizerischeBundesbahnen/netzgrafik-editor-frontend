import { Node } from '../../../models/node.model';
import { TrainrunSection } from '../../../models/trainrunsection.model';

export class ShortestDistanceEdge {
  private readonly fullPath: TrainrunSection[];
  private fullDistance: number;

  constructor(
    private fromNode: Node,
    private toNode: Node,
    private departureTime: number,
    private arrivalTime: number,
    private path: TrainrunSection[],
  ) {
    this.fullPath = Object.assign([], this.path);
    this.fullDistance = this.getTravelTime();
  }

  mergePathAndUpdateCost(inPath: TrainrunSection[], inDistance: number) {
    this.fullPath.reverse();
    Object.assign([], inPath)
      .reverse()
      .forEach((ts: TrainrunSection) => {
        this.fullPath.push(ts);
      });
    this.fullPath.reverse();
    this.fullDistance += inDistance;
  }

  getFullPath() {
    return Object.assign([], this.fullPath);
  }

  getFullDistance(): number {
    return this.fullDistance;
  }

  getToNode(): Node {
    return this.toNode;
  }

  getToNodeArrivingTrainrunSection(): TrainrunSection {
    if (this.path.length === 0) {
      return undefined;
    }
    return this.path[this.path.length - 1];
  }

  getFromNode(): Node {
    return this.fromNode;
  }

  getFromNodeDepartingTrainrunSection(): TrainrunSection {
    if (this.path.length === 0) {
      return undefined;
    }
    return this.path[0];
  }

  getArrivalTime(): number {
    return this.arrivalTime;
  }

  private getTravelTime(): number {
    return this.arrivalTime - this.departureTime;
  }
}
