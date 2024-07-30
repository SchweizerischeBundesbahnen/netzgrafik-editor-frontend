import {Label} from "./label.model";
import {Node} from "./node.model";
import {Trainrun} from "./trainrun.model";
import {TrainrunSection} from "./trainrunsection.model";

enum OperationType {
  create = "create",
  update = "update",
  delete = "delete"
}

export abstract class Operation {
  readonly type: OperationType;

  constructor(type: OperationType) {
    this.type = type;
  }
}

export class CreateTrainrunOperation extends Operation {
  readonly trainrunSection: TrainrunSection;

  constructor(trainrunSection: TrainrunSection) {
    super(OperationType.create);
    this.trainrunSection = trainrunSection;
  }
}

export class UpdateTrainrunSectionsOperation extends Operation {
  readonly trainrunSections: TrainrunSection[];

  constructor(trainrunSections: TrainrunSection[]) {
    super(OperationType.update);
    this.trainrunSections = trainrunSections;
  }
}

export class DeleteTrainrunOperation extends Operation {
  readonly trainrun: Trainrun;

  constructor(trainrun: Trainrun) {
    super(OperationType.delete);
    this.trainrun = trainrun;
  }
}

export class CreateLabelOperation extends Operation {
  readonly label: Label;

  constructor(label: Label) {
    super(OperationType.create);
    this.label = label;
  }
}

export class UpdateLabelOperation extends Operation {
  readonly label: Label;

  constructor(label: Label) {
    super(OperationType.update);
    this.label = label;
  }
}

export class DeleteLabelOperation extends Operation {
  readonly label: Label;

  constructor(label: Label) {
    super(OperationType.delete);
    this.label = label;
  }
}

export class CreateNodeOperation extends Operation {
  readonly node: Node;

  constructor(node: Node) {
    super(OperationType.create);
    this.node = node;
  }
}

export class UpdateNodeOperation extends Operation {
  readonly node: Node;

  constructor(node: Node) {
    super(OperationType.update);
    this.node = node;
  }
}

export class DeleteNodeOperation extends Operation {
  readonly node: Node;

  constructor(node: Node) {
    super(OperationType.delete);
    this.node = node;
  }
}

export class DeleteNodesOperation extends Operation {
  readonly nodes: Node[];

  constructor(nodes: Node[]) {
    super(OperationType.delete);
    this.nodes = nodes;
  }
}
