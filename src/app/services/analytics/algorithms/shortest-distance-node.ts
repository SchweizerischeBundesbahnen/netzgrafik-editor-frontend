import {TrainrunSection} from '../../../models/trainrunsection.model';
import {Node} from '../../../models/node.model';

export class ShortestDistanceNode {
  public path: TrainrunSection[];

  constructor(
    public node: Node,
    public distance: number
  ) {
    this.path = [];
  }

  setPath(inPath: TrainrunSection[]) {
    this.path = Object.assign([], inPath);
  }
}
