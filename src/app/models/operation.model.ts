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

  constructor(type: OperationType, objectType: OperationObjectType) {
    this.type = type;
    this.objectType = objectType;
  }
}

class TrainrunOperation extends Operation {
  readonly trainrun: Trainrun ;

  constructor(operationType: OperationType, trainrun: Trainrun) {
    super(operationType, OperationObjectType.trainrun);
    this.trainrun = trainrun;
  }
}

class NodeOperation extends Operation {
  readonly node: Node;

  constructor(operationType: OperationType, node: Node) {
    super(operationType, OperationObjectType.node);
    this.node = node;
  }
}

export {
  OperationType,
  Operation,
  TrainrunOperation,
  NodeOperation,
};
