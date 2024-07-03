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
