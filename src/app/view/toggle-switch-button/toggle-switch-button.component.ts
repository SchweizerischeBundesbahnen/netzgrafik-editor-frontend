import {Component, EventEmitter, Input, Output,} from "@angular/core";

@Component({
  selector: "sbb-toggle-switch-button",
  templateUrl: "./toggle-switch-button.component.html",
  styleUrls: ["./toggle-switch-button.component.scss"],
})
export class ToggleSwitchButtonComponent {
  @Output() checkedChanged = new EventEmitter<boolean>();
  @Input() checked = false;
  @Input() labelFalse: string = "";
  @Input() labelTrue: string = "";

  constructor() {
  }

  onToggle(check: boolean) {
    if (this.labelFalse === "") {
      this.onChange(!this.checked);
      return;
    }
    if (this.labelTrue === "") {
      this.onChange(!this.checked);
      return;
    }
    this.onChange(check);
  }

  onChange(isChecked: boolean) {
    if (this.checked === isChecked) {
      return;
    }
    this.checked = isChecked;
    this.checkedChanged.next(this.checked);
  }

  createCheckboxClassTag(): string {
    if (this.labelFalse === "") {
      return "only-label-true";
    }
    if (this.labelTrue === "") {
      return "only-label-true";
    }
    return "";
  }

  createLabelCheckedTag(isTrueLabel: boolean): string {
    let retVal = "toggle-label";
    if (this.labelTrue !== "" && this.labelFalse !== "") {
      if (!isTrueLabel && !this.checked) {
        retVal += " checked ";
      }
      if (isTrueLabel && this.checked) {
        retVal += " checked ";
      }
    }
    return retVal;
  }

}
