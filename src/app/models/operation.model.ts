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

abstract class Operation<T> {
  readonly type: OperationType;
  readonly objectType: OperationObjectType;
  readonly object: T;

  constructor(type: OperationType, objectType: OperationObjectType, object: T) {
    this.type = type;
    this.objectType = objectType;
    this.object = object;
  }
}

class CreateTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun) {
    super(OperationType.create, OperationObjectType.trainrun, trainrun);
  }
}

class UpdateTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun) {
    super(OperationType.update, OperationObjectType.trainrun, trainrun);
  }
}

class DeleteTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun) {
    super(OperationType.delete, OperationObjectType.trainrun, trainrun);
  }
}

class CreateNodeOperation extends Operation<Node> {
  constructor(node: Node) {
    super(OperationType.create, OperationObjectType.node, node);
  }
}

class UpdateNodeOperation extends Operation<Node> {
  constructor(node: Node) {
    super(OperationType.update, OperationObjectType.node, node);
  }
}

class DeleteNodeOperation extends Operation<Node> {
  constructor(node: Node) {
    super(OperationType.delete, OperationObjectType.node, node);
  }
}

export {
  Operation,
  CreateTrainrunOperation,
  UpdateTrainrunOperation,
  DeleteTrainrunOperation,
  CreateNodeOperation,
  UpdateNodeOperation,
  DeleteNodeOperation,
};
