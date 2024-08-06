import {Node} from "./node.model";
import {Trainrun} from "./trainrun.model";
import {TrainrunSection} from "./trainrunsection.model";

enum OperationType {
  create = "create",
  update = "update",
  delete = "delete",
}

enum OperationObjectType {
  trainrun = "trainrun",
  trainrunSection = "trainrunSection",
  trainrunSections = "trainrunSections",
  node = "node",
  nodes = "nodes",
};

abstract class Operation<T> {
  readonly type: OperationType;
  readonly objectType: OperationObjectType;

  readonly object: T;
  readonly param: any;

  constructor(type: OperationType, objectType: OperationObjectType, object: T) {
    this.type = type;
    this.objectType = objectType;
    this.object = object;
    console.log(this);
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

class CreateTrainrunSectionOperation extends Operation<TrainrunSection> {
  constructor(trainrunSection: TrainrunSection) {
    super(OperationType.create, OperationObjectType.trainrunSection, trainrunSection);
  }
}

class UpdateTrainrunSectionOperation extends Operation<TrainrunSection> {
  constructor(trainrunSection: TrainrunSection) {
    super(OperationType.update, OperationObjectType.trainrunSection, trainrunSection);
  }
}

class UpdateTrainrunSectionsOperation extends Operation<TrainrunSection[]> {
  constructor(trainrunSections: TrainrunSection[]) {
    super(OperationType.update, OperationObjectType.trainrunSections, trainrunSections);
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

class DeleteNodesOperation extends Operation<Node[]> {
  constructor(nodes: Node[]) {
    super(OperationType.delete, OperationObjectType.nodes, nodes);
  }
}

export {
  Operation,
  CreateTrainrunOperation,
  UpdateTrainrunOperation,
  DeleteTrainrunOperation,
  CreateTrainrunSectionOperation,
  UpdateTrainrunSectionOperation,
  UpdateTrainrunSectionsOperation,
  CreateNodeOperation,
  UpdateNodeOperation,
  DeleteNodeOperation,
  DeleteNodesOperation,
};
