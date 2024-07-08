import {Component, Inject} from "@angular/core";
import {
  SBB_DIALOG_DATA,
  SbbDialog,
  SbbDialogRef,
} from "@sbb-esta/angular/dialog";
import {ProjectFormComponentModel} from "./project-form/project-form.component";
import {FormModel} from "../../../utils/form-model";
import {Observable} from "rxjs";
import {filter} from "rxjs/operators";

@Component({
  selector: "sbb-project-dialog",
  templateUrl: "./project-dialog.component.html",
  styleUrls: ["./project-dialog.component.scss"],
})
export class ProjectDialogComponent {
  readonly formModel: FormModel<ProjectFormComponentModel>;
  readonly isNewProject: boolean;

  readonly tCreateProject = $localize`:@@app.view.project.project-dialog.create-project:Create project`;
  readonly tEditProject = $localize`:@@app.view.project.project-dialog.edit-project:Edit project`;
  readonly tCreate = $localize`:@@app.view.project.project-dialog.create:Create`;
  readonly tSave = $localize`:@@app.view.project.project-dialog.save:Save`;
  readonly tCancel = $localize`:@@app.view.project.project-dialog.cancel:Cancel`;

  constructor(
    public readonly dialogRef: SbbDialogRef<
      ProjectDialogComponent,
      ProjectFormComponentModel
    >,
    @Inject(SBB_DIALOG_DATA) data?: ProjectFormComponentModel,
  ) {
    this.formModel = new FormModel<ProjectFormComponentModel>(
      data ?? {
        name: "",
        description: "",
        summary: "",
        writeUsers: [],
        readUsers: [],
      },
    );
    this.isNewProject = !!!data;
  }

  public static open(
    dialog: SbbDialog,
    initData?: ProjectFormComponentModel,
  ): Observable<ProjectFormComponentModel> {
    return dialog
      .open(ProjectDialogComponent, initData ? {data: initData} : undefined)
      .afterClosed()
      .pipe(filter((project) => typeof project === "object"));
  }

  onCreateClicked(): void {
    const formData = this.formModel.tryGetValid();

    if (formData) {
      this.dialogRef.close(formData);
    }
  }

  onCancelClicked(): void {
    if (this.dialogRef !== null) {
      this.dialogRef.close();
    }
  }
}
