import { IndexNode } from './indexNode';
import { IndexSection } from './indexSection';

export interface Index {
  isIndexNode(): boolean;

  getIndexNode(): IndexNode;

  isIndexSection(): boolean;

  getIndexSection(): IndexSection;
}
