import {Index} from './index';
import {IndexNode} from './indexNode';

export class IndexSection implements Index {
  constructor(
    public arrivalNodeIndex: number,
    public departureNodeIndex: number,
  ) {}

  getIndexNode(): IndexNode {
    return undefined;
  }

  isIndexNode(): boolean {
    return false;
  }

  getIndexSection(): IndexSection {
    return this;
  }

  isIndexSection(): boolean {
    return true;
  }
}
