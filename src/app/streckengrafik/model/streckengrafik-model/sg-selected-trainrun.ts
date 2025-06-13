import { TrainrunDirection } from "src/app/data-structures/business.data.structures";
import {SgPath} from "./sg-path";
import {SgTrainrun} from "./sg-trainrun";

export class SgSelectedTrainrun {
  constructor(
    public trainrunId: number,
    public frequency: number,
    public frequencyOffset: number,
    public startTime: number,
    public endTime: number,
    public title: string,
    public categoryShortName: string,
    public colorRef: string,
    public paths: SgPath[],
    public trainruns: SgTrainrun[],
    public counter: number,
    public trainrunDirection?: TrainrunDirection,
  ) {}
}
