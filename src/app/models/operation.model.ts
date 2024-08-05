import { Node } from "./node.model";
import { Trainrun } from "./trainrun.model";
import { TrainrunSection } from "./trainrunsection.model";

enum OperationType {
  create = "create",
  update = "update",
  delete = "delete",
}

abstract class Operation<T> {
  readonly type: OperationType;
  readonly payload: T;
  readonly param: any;

  constructor(type: OperationType, payload: T, param: any) {
    this.type = type;
    this.payload = payload;
    this.param = param;
  }
}

class CreateTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun, param: any = null) {
    super(OperationType.create, trainrun, param);
  }
}

class UpdateTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun, param: any = null) {
    super(OperationType.update, trainrun, param);
  }
}

class DeleteTrainrunOperation extends Operation<Trainrun> {
  constructor(trainrun: Trainrun, param: any = null) {
    super(OperationType.delete, trainrun, param);
  }
}

class CreateTrainrunSectionOperation extends Operation<TrainrunSection> {
  constructor(trainrunSection: TrainrunSection, param: any = null) {
    super(OperationType.create, trainrunSection, param);
  }
}

class UpdateTrainrunSectionOperation extends Operation<TrainrunSection> {
  constructor(trainrunSection: TrainrunSection, param: any = null) {
    super(OperationType.update, trainrunSection, param);
  }
}

class UpdateTrainrunSectionsOperation extends Operation<TrainrunSection[]> {
  constructor(trainrunSections: TrainrunSection[], param: any = null) {
    super(OperationType.update, trainrunSections, param);
  }
}

class CreateNodeOperation extends Operation<Node> {
  constructor(node: Node, param: any = null) {
    super(OperationType.create, node, param);
  }
}

class UpdateNodeOperation extends Operation<Node> {
  constructor(node: Node, param: any = null) {
    super(OperationType.update, node, param);
  }
}

class DeleteNodeOperation extends Operation<Node> {
  constructor(node: Node, param: any = null) {
    super(OperationType.delete, node, param);
  }
}

class DeleteNodesOperation extends Operation<Node[]> {
  constructor(nodes: Node[], param: any = null) {
    super(OperationType.delete, nodes, param);
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
