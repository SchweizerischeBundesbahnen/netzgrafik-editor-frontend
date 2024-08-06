import {Node} from "./node.model";
import {Trainrun} from "./trainrun.model";

enum OperationType {
  create = "create",
  update = "update",
  delete = "delete",
}

enum OperationObjectType {
  trainrun = "trainrun",
  node = "node",
};

abstract class Operation {
  readonly type: OperationType;
  readonly objectType: OperationObjectType;
  readonly object: Trainrun | Node;

  constructor(type: OperationType, objectType: OperationObjectType, object: Trainrun | Node) {
    this.type = type;
    this.objectType = objectType;
    this.object = object;
  }
}

class TrainrunOperation extends Operation {
  constructor(operationType: OperationType, trainrun: Trainrun) {
    super(operationType, OperationObjectType.trainrun, trainrun);
  }
}

class NodeOperation extends Operation {
  constructor(operationType: OperationType, node: Node) {
    super(operationType, OperationObjectType.node, node);
  }
}

export {
  OperationType,
  Operation,
  TrainrunOperation,
  NodeOperation,
};
