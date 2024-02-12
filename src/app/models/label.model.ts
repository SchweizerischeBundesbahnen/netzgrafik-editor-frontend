import {LabelDto, LabelRef} from "../data-structures/business.data.structures";

export class Label {
  private static currentId = 0;
  private id: number;
  private label: string;
  private labelGroupId: number;
  private labelRef: LabelRef;

  constructor(
    {id, label, labelGroupId, labelRef}: LabelDto = {
      id: Label.incrementId(),
      label: "",
      labelGroupId: 0,
      labelRef: LabelRef.Undefinded,
    },
  ) {
    this.id = id;
    this.label = label;
    this.labelGroupId = labelGroupId;
    this.labelRef = labelRef;

    if (Label.currentId < this.id) {
      Label.currentId = this.id;
    }
  }

  private static incrementId(): number {
    return ++Label.currentId;
  }

  getId(): number {
    return this.id;
  }

  getLabel(): string {
    return this.label;
  }

  setLabel(label: string) {
    this.label = label;
  }

  getLabelGroupId(): number {
    return this.labelGroupId;
  }

  setLabelGroupId(labelGroupId: number) {
    this.labelGroupId = labelGroupId;
  }

  getLabelRef(): LabelRef {
    return this.labelRef;
  }

  setLabelRef(labelRef: LabelRef) {
    this.labelRef = labelRef;
  }

  getDto(): LabelDto {
    return {
      id: this.id,
      label: this.label,
      labelGroupId: this.labelGroupId,
      labelRef: this.labelRef,
    };
  }
}
