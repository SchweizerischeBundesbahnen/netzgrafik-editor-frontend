import {Component, Input, OnInit} from "@angular/core";
import {UntypedFormControl, Validators} from "@angular/forms";
import {FormModel} from "../../../../utils/form-model";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

@Component({
  selector: "sbb-project-form",
  templateUrl: "./project-form.component.html",
  styleUrls: ["./project-form.component.scss"],
})
export class ProjectFormComponent implements OnInit {
  @Input() model!: FormModel<ProjectFormComponentModel>;

  readonly separatorKeysCodes = [ENTER, COMMA];

  ngOnInit(): void {
    this.model.registerValidator("name", Validators.required);
    this.model.registerValidator("writeUsers", userIdsValidator);
    this.model.registerValidator("readUsers", userIdsValidator);
  }

  onLabelsFocusoutWrite() {
    const keyboardEvent = new KeyboardEvent("keydown", {
      code: "Enter",
      key: "Enter",
      charCode: 13,
      keyCode: 13,
      view: window,
      bubbles: true,
    });
    document.getElementById("userWriteInput").dispatchEvent(keyboardEvent);
  }

  onLabelsFocusoutReade() {
    const keyboardEvent = new KeyboardEvent("keydown", {
      code: "Enter",
      key: "Enter",
      charCode: 13,
      keyCode: 13,
      view: window,
      bubbles: true,
    });
    document.getElementById("userReadeInput").dispatchEvent(keyboardEvent);
  }
}

const userIdsValidator = (control: UntypedFormControl) => {
  if (!control) {
    return null;
  }
  const userIds: string[] = control.value;
  const invalidIds = userIds.filter((id) =>
    !id.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/));
  if (invalidIds.length === 0) {
    return null;
  }
  return {invalidUserIds: invalidIds.join(", ")};
};

export interface ProjectFormComponentModel {
  name: string;
  summary: string;
  description: string;
  writeUsers: string[];
  readUsers: string[];
}
