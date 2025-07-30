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
    this.onChange(check);
  }

  onChange(isChecked: boolean) {
    if (this.checked === isChecked) {
      return;
    }
    this.checked = isChecked;
    this.checkedChanged.next(this.checked);
  }

}
