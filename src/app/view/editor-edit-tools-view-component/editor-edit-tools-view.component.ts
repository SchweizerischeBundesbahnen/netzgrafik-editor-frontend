import {Component, ElementRef, OnDestroy, ViewChild} from "@angular/core";
import {DataService} from "../../services/data/data.service";
import {UiInteractionService} from "../../services/ui/ui.interaction.service";
import {ConfirmationDialogParameter} from "../dialogs/confirmation-dialog/confirmation-dialog.component";
import {NodeService} from "../../services/data/node.service";
import {TrainrunSectionService} from "../../services/data/trainrunsection.service";
import {EditorMode} from "../editor-menu/editor-mode";
import {LogService} from "../../logger/log.service";
import {FilterService} from "../../services/ui/filter.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {TrainrunService} from "../../services/data/trainrun.service";
import {NoteService} from "../../services/data/note.service";
import {LabelRef} from "../../data-structures/business.data.structures";
import {LabelService} from "../../services/data/label.serivce";
import {LabelGroupService} from "../../services/data/labelgroup.service";
import {LabelGroup} from "../../models/labelGroup.model";

@Component({
  selector: "sbb-editor-edit-tools-view-component",
  templateUrl: "./editor-edit-tools-view.component.html",
  styleUrls: ["./editor-edit-tools-view.component.scss"],
})
export class EditorEditToolsViewComponent implements OnDestroy {
  @ViewChild("netzgrafikMergeFileInput", {static: false})
  netzgrafikMergeFileInput: ElementRef;
  @ViewChild("netzgrafikMergeAsACopyFileInput", {static: false})
  netzgrafikMergeAsACopyFileInput: ElementRef;

  public editorMode: EditorMode = EditorMode.NetzgrafikEditing;
  public nodeLabelGroups: LabelGroup[];
  public trainrunLabelGroups: LabelGroup[];
  private destroyed = new Subject<void>();

  constructor(
    private dataService: DataService,
    private nodeService: NodeService,
    private trainrunService: TrainrunService,
    private trainrunSectionService: TrainrunSectionService,
    private noteService: NoteService,
    public labelService: LabelService,
    public labelGroupService: LabelGroupService,
    private logger: LogService,
    public filterService: FilterService,
    private uiInteractionService: UiInteractionService,
  ) {
    this.nodeLabelGroups = this.labelGroupService.getLabelGroupsFromLabelRef(
      LabelRef.Node,
    );
    this.trainrunLabelGroups =
      this.labelGroupService.getLabelGroupsFromLabelRef(LabelRef.Trainrun);

    this.labelGroupService.labelGroups
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.nodeLabelGroups =
          this.labelGroupService.getLabelGroupsFromLabelRef(LabelRef.Node);
        this.trainrunLabelGroups =
          this.labelGroupService.getLabelGroupsFromLabelRef(LabelRef.Trainrun);
      });

    this.labelService.labels.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.nodeLabelGroups = this.labelGroupService.getLabelGroupsFromLabelRef(
        LabelRef.Node,
      );
      this.trainrunLabelGroups =
        this.labelGroupService.getLabelGroupsFromLabelRef(LabelRef.Trainrun);
    });
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onClearAllFiltered() {
    const dialogTitle = "Löschen";
    const dialogContent =
      "Sollen alle nicht sichtbare Elemene aus der Netzgrafik definitiv gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.trainrunSectionService.deleteAllNonVisibleTrainrunSections();
          this.nodeService.deleteAllNonVisibleNodes();
          this.noteService.deleteAllNonVisibleNotes();
        }
      });
  }

  onClear() {
    const dialogTitle = "Löschen";
    const dialogContent =
      "Sollen alle sichtbare Elemene aus der Netzgrafik definitiv gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.trainrunSectionService.deleteAllVisibleTrainrunSections();
          this.nodeService.deleteAllVisibleNodes();
          this.noteService.deleteAllVisibleNotes();
        }
      });
  }

  onClearAllTrainruns() {
    const dialogTitle = "Löschen";
    const dialogContent =
      "Sollen alle sichtbare Züge definitiv gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.trainrunSectionService.deleteAllVisibleTrainrunSections();
        }
      });
  }

  onClearAllNotes() {
    const dialogTitle = "Löschen";
    const dialogContent =
      "Sollen alle sichtbare Kommentare definitiv gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.noteService.deleteAllVisibleNotes();
        }
      });
  }

  onLoadNetzgrafikToInsertCopieButton() {
    this.netzgrafikMergeAsACopyFileInput.nativeElement.click();
  }

  onLoadNetzgrafikToMergeButton() {
    this.netzgrafikMergeFileInput.nativeElement.click();
  }

  onLoadNetzgrafikToMergeAsACopy(param) {
    this.uiInteractionService.closeNodeStammdaten();
    this.uiInteractionService.closePerlenkette();
    this.loadNetzgrafik(param, (netzgrafikDto) =>
      this.dataService.insertCopyNetzgrafikDto(netzgrafikDto),
    );
  }

  onLoadNetzgrafikToMerge(param) {
    this.uiInteractionService.closeNodeStammdaten();
    this.uiInteractionService.closePerlenkette();
    this.loadNetzgrafik(param, (netzgrafikDto) =>
      this.dataService.mergeNetzgrafikDto(netzgrafikDto),
    );
  }

  private loadNetzgrafik(param, callback) {
    const file = param.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const netzgrafikDto = JSON.parse(reader.result.toString());
      if (
        "nodes" in netzgrafikDto &&
        "trainrunSections" in netzgrafikDto &&
        "trainruns" in netzgrafikDto &&
        "resources" in netzgrafikDto &&
        "metadata" in netzgrafikDto
      ) {
        this.logger.log(
          "onLoadNetzgrafikToMerge; load netzgrafik: ",
          netzgrafikDto,
        );
        this.setEditModeToNetzgrafikEditing();
        callback(netzgrafikDto);
      }
    };
    reader.readAsText(file);

    // set the event target value to null in order to be able to load the same file multiple times after one another
    param.target.value = null;
  }

  private setEditModeToNetzgrafikEditing() {
    if (this.editorMode !== EditorMode.NetzgrafikEditing) {
      this.editorMode = EditorMode.NetzgrafikEditing;
      this.uiInteractionService.showNetzgrafik();
    }
  }
}
