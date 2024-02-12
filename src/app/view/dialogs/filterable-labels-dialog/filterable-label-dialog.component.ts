import {Component, Inject, OnDestroy} from "@angular/core";
import {
  SBB_DIALOG_DATA,
  SbbDialog,
  SbbDialogRef,
} from "@sbb-esta/angular/dialog";
import {FormModel} from "../../../utils/form-model";
import {FilterableLabelsFormComponentModel} from "./filterable-labels-form/filterable-label-form.component";
import {Observable, Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {ConfirmationDialogParameter} from "../confirmation-dialog/confirmation-dialog.component";
import {UiInteractionService} from "../../../services/ui/ui.interaction.service";

@Component({
  selector: "sbb-filterable-label-dialog",
  templateUrl: "./filterable-label-dialog.component.html",
  styleUrls: ["./filterable-label-dialog.component.scss"],
})
export class FilterableLabelDialogComponent implements OnDestroy {
  readonly formmodel: FormModel<FilterableLabelsFormComponentModel>;
  public dialogTitel: string;
  private destroyed = new Subject<void>();
  private deleteLabelCallback = null;
  private transferLabelCallback = null;
  private saveLabelCallback = null;
  private originalLabel: string;
  private currentDialog = null;

  constructor(
    private uiInteractionService: UiInteractionService,
    public readonly dialogRef: SbbDialogRef<
      FilterableLabelDialogComponent,
      FilterableLabelsFormComponentModel
    >,
    @Inject(SBB_DIALOG_DATA) data: FilterableLabelsFormComponentModel,
  ) {
    data.updateLabelCallback = () => this.updateLabel();

    this.formmodel = new FormModel<FilterableLabelsFormComponentModel>(
      data ?? {
        name: "",
        dialogTitel: "",
        saveLabelCallback: null,
        deleteLabelCallback: null,
        transferLabelCallback: null,
        updateLabelCallback: null,
      },
    );

    this.dialogTitel = data.dialogTitel;
    this.originalLabel = data.name;
    this.deleteLabelCallback = data.deleteLabelCallback;
    this.saveLabelCallback = data.saveLabelCallback;
    this.transferLabelCallback = data.transferLabelCallback;
    this.currentDialog = dialogRef;

    this.dialogRef
      .beforeClosed()
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.updateLabel();
      });
  }

  public static open(
    dialog: SbbDialog,
    initData: FilterableLabelsFormComponentModel,
  ): Observable<FilterableLabelsFormComponentModel> {
    return dialog
      .open(FilterableLabelDialogComponent, {data: initData})
      .afterClosed();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onTransferClicked(): void {
    const dialogTitle = "Übernehmen";
    const dialogContent =
      'Soll das Label "' +
      this.originalLabel +
      '" auf alle sichtbaren ' +
      this.dialogTitel +
      " übertragen werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.transferLabelCallback(this.originalLabel);
          this.dialogRef.close();
        }
      });
  }

  onDeleteClicked(): void {
    const dialogTitle = "Löschen";
    const dialogContent =
      'Soll das Label "' +
      this.originalLabel +
      '" definitiv aus allen sichtbaren ' +
      this.dialogTitel +
      " gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.deleteLabelCallback(this.originalLabel);
          this.dialogRef.close();
        }
      });
  }

  private updateLabel() {
    this.formmodel.tryGetValid();
    const labelValue: string = this.formmodel.getControl("name").value;
    this.saveLabelCallback(this.originalLabel, labelValue);
    this.originalLabel = labelValue;
  }
}
