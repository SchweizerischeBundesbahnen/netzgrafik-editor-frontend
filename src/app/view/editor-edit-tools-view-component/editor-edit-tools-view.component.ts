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

  readonly tEdit = $localize`:@@app.view.editor-edit-tools-view-component.edit:Edit`;
  readonly tFilterableLabels = $localize`:@@app.view.editor-edit-tools-view-component.filterable-labels:Filterable labels`;
  readonly tTrainruns = $localize`:@@app.view.editor-edit-tools-view-component.trainruns:Trainruns`;
  readonly tNodes = $localize`:@@app.view.editor-edit-tools-view-component.nodes:Nodes`;
  readonly tNotes = $localize`:@@app.view.editor-edit-tools-view-component.notes:Notes`;
  readonly tDeleteNetzgrafikTitle = $localize`:@@app.view.editor-edit-tools-view-component.delete-netzgrafik-title:Netzgrafik - Delete`;
  readonly tNonVisibleElements = $localize`:@@app.view.editor-edit-tools-view-component.non-visible-elements:Non visible elements`;
  readonly tDeleteAllNonVisibleElementsTooltip = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-non-visible-elements-tooltip:Delete all non-visible elements, such as nodes, trainruns and notes`;
  readonly tDeleteAllNonVisibleElements = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-non-visible-elements:Delete all non-visible elements`;
  readonly tVisibleElements = $localize`:@@app.view.editor-edit-tools-view-component.visible-elements:Visible elements`;
  readonly tDeleteAllVisibleTrainrunsTooltip = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-trainruns-tooltip:Delete all visible trainruns`;
  readonly tDeleteAllVisibleTrainruns = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-trainruns:Delete all visible trainruns`;
  readonly tDeleteAllVisibleNotesTooltip = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-notes-tooltip:Delete all visible notes`;
  readonly tDeleteAllVisibleNotes = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-notes:Delete all visible notes`;
  readonly tDeleteAllVisibleElementsTooltip = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-elements-tooltip:Delete all visible elements, such as nodes, trainruns and notes`;
  readonly tDeleteAllVisibleElements = $localize`:@@app.view.editor-edit-tools-view-component.delete-all-visible-elements:Delete all visible elements`;
  readonly tMergeNetzgrafikTitle = $localize`:@@app.view.editor-edit-tools-view-component.merge-netzgrafik-title:Netzgrafik - Merge`;
  readonly tAddNetzgrafikAsCopyTooltip = $localize`:@@app.view.editor-edit-tools-view-component.add-netzgrafik-as-copy-tooltip:Add netzgrafik as a copy (trainruns, nodes, notes)`;
  readonly tAddNetzgrafikAsCopy = $localize`:@@app.view.editor-edit-tools-view-component.add-netzgrafik-as-copy:Add netzgrafik as a copy`;
  readonly tMergeNetzgrafikTooltip = $localize`:@@app.view.editor-edit-tools-view-component.merge-netzgrafik-tooltip:Merge netzgrafik (trainruns, nodes, notes)`;
  readonly tMergeNetzgrafik = $localize`:@@app.view.editor-edit-tools-view-component.merge-netzgrafik:Merge netzgrafik`;
  private readonly tDelete = $localize`:@@app.view.editor-edit-tools-view-component.delete:Delete`;

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
    const dialogTitle = this.tDelete;
    const dialogContent =
      $localize`:@@app.view.editor-edit-tools-view-component.on-clear-delete-all-non-visible-elements:Should all non-visible elements be permanently deleted from the netzgrafik?`;
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
    const dialogTitle = this.tDelete;
    const dialogContent =
      $localize`:@@app.view.editor-edit-tools-view-component.on-clear-delete-all-visible-elements:Should all visible elements be permanently deleted from the netzgrafik?`;
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
    const dialogTitle = this.tDelete;
    const dialogContent = $localize`:@@app.view.editor-edit-tools-view-component.on-clear-delete-all-visible-trainruns:Should all visible trainruns be permanently deleted from the netzgrafik?`;
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
    const dialogTitle = this.tDelete;
    const dialogContent = $localize`:@@app.view.editor-edit-tools-view-component.on-clear-delete-all-visible-notes:Should all visible notes be permanently deleted from the netzgrafik?`;
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
