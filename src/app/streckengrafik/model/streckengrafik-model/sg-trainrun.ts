import {SgTrainrunItem} from "./sg-trainrun-item";
import {SgSelectedTrainrun} from "./sg-selected-trainrun";

export class SgTrainrun {
  static currentId = 0;
  private id: number;

  constructor(
    public trainrunId: number,
    public frequency: number,
    public frequencyOffset: number,
    public startTime: number,
    public endTime: number,
    public title: string,
    public categoryShortName: string,
    public colorRef: string,
    public sgTrainrunItems: SgTrainrunItem[],
    public selectedTrainrun: SgSelectedTrainrun,
  ) {
    this.id = SgTrainrun.currentId;
    SgTrainrun.currentId++;
  }

  getId() {
    return this.id;
  }
}
