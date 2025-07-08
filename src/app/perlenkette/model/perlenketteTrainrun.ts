import {PerlenketteItem} from "./perlenketteItem";
import {TrainrunDirection, TrainrunTimeCategory} from "../../data-structures/business.data.structures";

export class PerlenketteTrainrun {
  constructor(
    public trainrunId: number,
    public frequency: number,
    public frequencyOffset: number,
    public trainrunTimeCategory: TrainrunTimeCategory,
    public title: string,
    public categoryShortName: string,
    public colorRef: string,
    public pathItems: PerlenketteItem[] = [],
    public trainrunDirection: TrainrunDirection,
  ) {}
}
