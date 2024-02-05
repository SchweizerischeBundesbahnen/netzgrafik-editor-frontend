import {Index} from './index';
import {IndexSection} from './indexSection';

export class IndexNode implements Index {

  constructor(
    public nodeIndex: number,
  ) {
  }

  getIndexNode(): IndexNode {
    return this;
  }

  isIndexNode(): boolean {
    return true;
  }

  getIndexSection(): IndexSection {
    return undefined;
  }

  isIndexSection(): boolean {
    return false;
  }
}
