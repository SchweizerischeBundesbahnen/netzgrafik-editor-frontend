import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from "@angular/core";
import {UiInteractionService} from "../../../services/ui/ui.interaction.service";
import {NodeService} from "../../../services/data/node.service";
import {
  LabelRef,
  TrainrunCategoryHaltezeit,
} from "../../../data-structures/business.data.structures";
import {Node} from "../../../models/node.model";
import {ConfirmationDialogParameter} from "../../dialogs/confirmation-dialog/confirmation-dialog.component";
import {ResourceService} from "../../../services/data/resource.service";
import {Resource} from "../../../models/resource.model";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {LabelService} from "../../../services/data/label.serivce";
import {LabelGroupService} from "../../../services/data/labelgroup.service";
import {SbbChipEvent, SbbChipInputEvent} from "@sbb-esta/angular/chips";
import {COMMA, ENTER} from "@angular/cdk/keycodes";

interface NodeProperties {
  nodeId: number;
  nodeBetriebspunktName: string;
  nodeBetriebspunktFullName: string;
  nodeConnectionTime: number;
  nodeTrainrunCategoryHaltezeit: TrainrunCategoryHaltezeit;
  nodeResouceId: number;
  nodeCapacity: number;
  labels: string[];
}

@Component({
  selector: "sbb-editor-node-detail-view",
  templateUrl: "./editor-node-detail-view.component.html",
  styleUrls: ["./editor-node-detail-view.component.scss"],
})
export class EditorNodeDetailViewComponent implements OnInit, OnDestroy {
  @Output()
  public nodeDeleted = new EventEmitter<void>();

  nodeProperties: NodeProperties = {
    nodeId: 0,
    nodeBetriebspunktName: "",
    nodeBetriebspunktFullName: "",
    nodeConnectionTime: 0,
    nodeTrainrunCategoryHaltezeit: Node.getDefaultHaltezeit(),
    nodeResouceId: null,
    nodeCapacity: 2,
    labels: [],
  };

  readonly separatorKeysCodes = [ENTER, COMMA];
  nodeLabelsAutoCompleteOptions: string[] = [];

  private destroyed = new Subject<void>();

  constructor(
    private uiInteractionService: UiInteractionService,
    private resourceService: ResourceService,
    private nodeService: NodeService,
    private labelService: LabelService,
    private labelGroupService: LabelGroupService,
    private cd: ChangeDetectorRef,
  ) {}

  ngOnInit(): void {
    this.uiInteractionService.updateNodeStammdatenWindow
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.updateNodeLabelsAutoCompleteOptions();
        this.updateNodeProperties();
      });
    this.nodeService.nodes.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.updateNodeLabelsAutoCompleteOptions();
      this.updateNodeProperties();
    });
    this.updateNodeLabelsAutoCompleteOptions();
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  onBetriebspunktNameChanged(event: any) {
    this.nodeService.changeNodeBetriebspunktName(
      this.nodeProperties.nodeId,
      event.target.value,
    );
    this.nodeProperties.nodeBetriebspunktName = event.target.value;
    this.uiInteractionService.updateNodeStammdaten();
  }

  onFullNameChanged(event: any) {
    this.nodeService.changeNodeFullName(
      this.nodeProperties.nodeId,
      event.target.value,
    );
    this.nodeProperties.nodeBetriebspunktFullName = event.target.value;
  }

  onConnectionTimeChanged() {
    this.nodeService.changeConnectionTime(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeConnectionTime,
    );
  }

  add(chipInputEvent: SbbChipInputEvent) {
    const value = (chipInputEvent.value || "").trim();
    if (!value) {
      return;
    }
    this.nodeProperties.labels.push(value);
    this.nodeService.changeLabels(
      this.nodeProperties.nodeId,
      this.nodeProperties.labels,
    );
    chipInputEvent.chipInput!.clear();
  }

  remove(chipEvent: SbbChipEvent) {
    const valueDelete = chipEvent.chip.value as string;
    const value = (valueDelete || "").trim();
    if (!value) {
      return;
    }
    this.nodeProperties.labels = this.nodeProperties.labels.filter(
      (labels) => labels !== valueDelete,
    );
    this.nodeService.changeLabels(
      this.nodeProperties.nodeId,
      this.nodeProperties.labels,
    );
  }

  onLabelsFocusout() {
    const keyboardEvent = new KeyboardEvent("keydown", {
      code: "Enter",
      key: "Enter",
      charCode: 13,
      keyCode: 13,
      view: window,
      bubbles: true,
    });
    document.getElementById("nodeLabelsInput").dispatchEvent(keyboardEvent);
    this.nodeService.changeLabels(
      this.nodeProperties.nodeId,
      this.nodeProperties.labels,
    );
  }

  onCapacityChanged() {
    if (this.nodeProperties.nodeCapacity > 0) {
      this.resourceService.changeCapacity(
        this.nodeProperties.nodeResouceId,
        this.nodeProperties.nodeCapacity,
      );
    } else {
      this.resourceService.changeCapacity(this.nodeProperties.nodeResouceId, 1);
    }
  }

  loadCapacityValue() {
    this.nodeProperties.nodeCapacity = this.resourceService
      .getResource(this.nodeProperties.nodeResouceId)
      .getCapacity();
  }

  onDeleteNode() {
    const node = this.nodeService.getSelectedNode();
    const dialogTitle = "Löschen";
    const dialogContent =
      "Soll der Knoten " +
      node.getBetriebspunktName() +
      " (" +
      node.getFullName() +
      ") definitiv gelöscht werden?";
    const confirmationDialogParamter = new ConfirmationDialogParameter(
      dialogTitle,
      dialogContent,
    );
    this.uiInteractionService
      .showConfirmationDiagramDialog(confirmationDialogParamter)
      .subscribe((confirmed: boolean) => {
        if (confirmed) {
          this.nodeService.deleteNode(node.getId());
          this.nodeDeleted.emit();
        }
      });
  }

  onHaltezeitChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  haltezeitIPVNoHaltChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  haltezeitANoHaltChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  haltezeitBNoHaltChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  haltezeitCNoHaltChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  haltezeitDNoHaltChanged() {
    this.nodeService.changeHaltezeit(
      this.nodeProperties.nodeId,
      this.nodeProperties.nodeTrainrunCategoryHaltezeit,
    );
  }

  getAutoCompleteLabels(): string[] {
    return this.labelGroupService.getAutoCompleteLabels(
      this.nodeProperties.labels,
      LabelRef.Node,
    );
  }

  private updateNodeLabelsAutoCompleteOptions() {
    this.nodeLabelsAutoCompleteOptions = this.getAutoCompleteLabels();
    this.cd.detectChanges();
  }

  private updateNodeProperties() {
    const selectedNode = this.nodeService.getSelectedNode();
    if (selectedNode !== null) {
      const resource: Resource = this.resourceService.getResource(
        selectedNode.getResourceId(),
      );
      this.nodeProperties = {
        nodeId: selectedNode.getId(),
        nodeBetriebspunktName: selectedNode.getBetriebspunktName(),
        nodeBetriebspunktFullName: selectedNode.getFullName(),
        nodeConnectionTime: selectedNode.getConnectionTime(),
        nodeTrainrunCategoryHaltezeit:
          selectedNode.getTrainrunCategoryHaltezeit(),
        nodeResouceId: resource.getId(),
        nodeCapacity: resource.getCapacity(),
        labels: this.labelService.getTextLabelsFromIds(
          selectedNode.getLabelIds(),
        ),
      };
    }
  }
}
