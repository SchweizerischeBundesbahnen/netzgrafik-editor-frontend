import {Component, EventEmitter, Input, Output,} from "@angular/core";

@Component({
  selector: "sbb-toggle-switch-button",
  templateUrl: "./toggle-switch-button.component.html",
  styleUrls: ["./toggle-switch-button.component.scss"],
})
export class ToggleSwitchButtonComponent {
  @Output() changed = new EventEmitter<boolean>();
  @Input() checked = false;
  @Input() labelFalse: string = "";
  @Input() labelTrue: string = "";

  constructor() {
  }

  onToggle(check: boolean) {
    this.onChnaged(check);
  }

  onChnaged(isChecked: boolean) {
    this.checked = isChecked;
    this.changed.next(this.checked);
  }

}
