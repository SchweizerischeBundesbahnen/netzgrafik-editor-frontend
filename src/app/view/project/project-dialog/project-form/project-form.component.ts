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

  readonly tName = $localize`:@@app.view.project.project-dialog.project-form.name:Name`
  readonly tMandatoryField = $localize`:@@app.view.project.project-dialog.project-form.mandatory-field:Mandatory field`
  readonly tSummary = $localize`:@@app.view.project.project-dialog.project-form.summary:Summary`
  readonly tDescription = $localize`:@@app.view.project.project-dialog.project-form.description:Description`
  readonly tTooltip = $localize`:@@app.view.project.project-dialog.project-form.tooltip:Users must be entered with their U/E number (e.g. u123456e654321). Confirm the entry for each number with 'Enter'. Note lower case!`
  readonly tUserWithWriteAccess = $localize`:@@app.view.project.project-dialog.project-form.user-with-write-access:User with write access`
  readonly tNewUserPlaceholder = $localize`:@@app.view.project.project-dialog.project-form.new-user-placeholder:New user...`
  readonly tInvalidValues = $localize`:@@app.view.project.project-dialog.project-form.invalid-values:Invalid values`
  readonly tUserWithReadAccess = $localize`:@@app.view.project.project-dialog.project-form.user-with-read-access:User with read access`

  ngOnInit(): void {
    this.model.registerValidator("name", Validators.required);
    this.model.registerValidator("writeUsers", userIdsAsEmailValidator);
    this.model.registerValidator("readUsers", userIdsAsEmailValidator);
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

  onLabelsFocusoutRead() {
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

export const userIdsAsEmailValidator = (control: UntypedFormControl) => {
  if (!control) {
    return null;
  }
  const userIds: string[] = control.value;
  // email adresse validator: regex to match emails using the expression
  const invalidEmailPattern = userIds.filter((id) => {
    const retVal =
      id.match(/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)|(u|ue|e)\d+$/);
    if (retVal === null) {
      return true;
    }
    return retVal[0] !== id;
  });

  if (invalidEmailPattern.length === 0) {
    return null;
  }
  return {invalidUserIdAsEmails: invalidEmailPattern.join(", ")};
};

export interface ProjectFormComponentModel {
  name: string;
  summary: string;
  description: string;
  writeUsers: string[];
  readUsers: string[];
}
