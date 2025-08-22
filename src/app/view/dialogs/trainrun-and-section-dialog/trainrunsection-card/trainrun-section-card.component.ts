import {AfterViewInit, ChangeDetectorRef, Component, Input, OnDestroy} from "@angular/core";
import {TrainrunSectionService} from "../../../../services/data/trainrunsection.service";
import {TrainrunSection} from "../../../../models/trainrunsection.model";
import {TrainrunService} from "../../../../services/data/trainrun.service";
import {TrainrunDialogParameter} from "../trainrun-and-section-dialog.component";
import {TrainrunsectionHelper} from "../../../../services/util/trainrunsection.helper";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Node} from "../../../../models/node.model";
import {LinePatternRefs, Direction} from "../../../../data-structures/business.data.structures";
import {StaticDomTags} from "../../../editor-main-view/data-views/static.dom.tags";
import {ColorRefType} from "../../../../data-structures/technical.data.structures";
import {TrainrunSectionTimesService} from "../../../../services/data/trainrun-section-times.service";
import {LeftAndRightTimeStructure} from "../trainrunsection-tab/trainrun-section-tab.component";

@Component({
  selector: "sbb-trainrunsection-card",
  templateUrl: "./trainrun-section-card.component.html",
  styleUrls: ["./trainrun-section-card.component.scss"],
  providers: [TrainrunSectionTimesService],
})
export class TrainrunSectionCardComponent implements AfterViewInit, OnDestroy {
  @Input() trainrunDialogParameter: TrainrunDialogParameter;
  @Input() innerContentScaleFactor = "1.0";

  public selectedTrainrunSection: TrainrunSection;
  public startNode: string[] = ["", ""];
  public endNode: string[] = ["", ""];
  public frequencyLinePattern: LinePatternRefs;
  public categoryColorRef: ColorRefType;
  public timeCategoryLinePattern: LinePatternRefs;
  public direction = Direction;
  public chosenCard: "top" | "bottom";

  private trainrunSectionHelper: TrainrunsectionHelper;
  private destroyed = new Subject<void>();

  public get nodesOrdered(): Node[] {
    return this.trainrunSectionTimesService.getNodesOrdered();
  }

  constructor(
    private trainrunService: TrainrunService,
    private trainrunSectionService: TrainrunSectionService,
    private changeDetection: ChangeDetectorRef,
    public trainrunSectionTimesService: TrainrunSectionTimesService,
  ) {
    this.trainrunSectionHelper = new TrainrunsectionHelper(this.trainrunService);

    this.trainrunSectionTimesService.setOffset(0);
    this.trainrunService.trainruns.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.updateAllValues();
    });
    this.trainrunSectionService.trainrunSections.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.updateAllValues();
    });
    // Initialize the selected trainrun as one-way, selecting the [source] → [target] card
    if (this.selectedTrainrunSection.getTrainrun().isRoundTrip()) {
      if (TrainrunsectionHelper.isTargetRightOrBottom(this.selectedTrainrunSection)) {
        this.onTrainrunSectionCardClick("top");
      } else {
        this.onTrainrunSectionCardClick("bottom");
      }
    }
  }

  updateAllValues() {
    this.selectedTrainrunSection = this.trainrunSectionService.getSelectedTrainrunSection();
    if (this.selectedTrainrunSection === null) {
      return;
    }

    const selectedTrainrun = this.selectedTrainrunSection.getTrainrun();
    this.trainrunSectionTimesService.setTrainrunSection(this.selectedTrainrunSection);
    this.frequencyLinePattern = this.selectedTrainrunSection.getFrequencyLinePatternRef();
    this.categoryColorRef = selectedTrainrun.getCategoryColorRef();
    this.timeCategoryLinePattern = selectedTrainrun.getTimeCategoryLinePatternRef();
    this.trainrunSectionTimesService.setHighlightTravelTimeElement(false);
    this.trainrunSectionTimesService.applyOffsetAndTransformTimeStructure();

    const startNode = this.trainrunService.getStartNodeWithTrainrunId(
      this.selectedTrainrunSection.getTrainrunId(),
    );
    this.startNode = [startNode.getFullName(), startNode.getBetriebspunktName()];
    const endNode = this.trainrunService.getEndNodeWithTrainrunId(
      this.selectedTrainrunSection.getTrainrunId(),
    );
    this.endNode = [endNode.getFullName(), endNode.getBetriebspunktName()];

    if (!selectedTrainrun.isRoundTrip()) {
      this.chosenCard = TrainrunsectionHelper.isTargetRightOrBottom(this.selectedTrainrunSection)
        ? "top"
        : "bottom";
    }
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  ngAfterViewInit(): void {
    if (
      this.trainrunDialogParameter !== undefined &&
      this.trainrunDialogParameter.nodesOrdered.length > 0
    ) {
      this.trainrunSectionTimesService.setNodesOrdered(this.trainrunDialogParameter.nodesOrdered);
    }

    this.updateAllValues();
    this.changeDetection.detectChanges();
  }

  getInnerContentStyleTag(): string {
    return "transform: scale(" + this.innerContentScaleFactor + ");";
  }

  getEdgeLineClassAttrString(layer: number, cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_CLASS +
      StaticDomTags.makeClassTag(StaticDomTags.LINE_LAYER, "" + layer) +
      StaticDomTags.makeClassTag(StaticDomTags.FREQ_LINE_PATTERN, this.frequencyLinePattern) +
      " " +
      StaticDomTags.TAG_UI_DIALOG +
      " " +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_COLOR_REF, this.getColorRefTag(cardPosition)) +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_LINEPATTERN_REF, this.timeCategoryLinePattern)
    );
  }

  getColorRefTag(cardPosition: string) {
    return (
      this.categoryColorRef +
      " " +
      (this.chosenCard === cardPosition
        ? StaticDomTags.TAG_FOCUS
        : this.chosenCard === null
          ? ""
          : StaticDomTags.TAG_MUTED)
    );
  }

  getOneWayCardBetriebspunktClassTag(cardPosition: string) {
    return "OneWayCardBetriebspunkt " + this.getColorRefTag(cardPosition);
  }

  getEdgeLineTextClass(cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_TEXT_CLASS +
      " " +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_COLOR_REF, this.getColorRefTag(cardPosition))
    );
  }

  getEdgeLineArrowClass(cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_ARROW_CLASS +
      " " +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_COLOR_REF, this.getColorRefTag(cardPosition))
    );
  }

  onTrainrunSectionCardClick(position: "top" | "bottom") {
    if (this.chosenCard === position) {
      return;
    }
    // Get the left and right nodes to determine the cards order
    const leftNode = this.trainrunSectionHelper.getNextStopLeftNode(
      this.selectedTrainrunSection,
      this.nodesOrdered,
    );
    const rightNode = this.trainrunSectionHelper.getNextStopRightNode(
      this.selectedTrainrunSection,
      this.nodesOrdered,
    );

    const wantedSourceNode = position === "top" ? leftNode : rightNode;
    if (wantedSourceNode !== this.selectedTrainrunSection.getSourceNode()) {
      this.trainrunSectionService.invertTrainrunSectionsSourceAndTarget(
        this.selectedTrainrunSection.getTrainrunId(),
      );
    }
    this.chosenCard = position;
    this.trainrunService.updateDirection(
      this.selectedTrainrunSection.getTrainrun(),
      Direction.ONE_WAY,
    );
  }

  getTrainrunTimeStructure(): Omit<LeftAndRightTimeStructure, "travelTime"> {
    const selectedTrainrun = this.trainrunService.getSelectedTrainrun();
    if (!selectedTrainrun) {
      return undefined;
    }
    const selectedTrainrunId = selectedTrainrun.getId();
    const trainrunSections =
      this.trainrunSectionService.getAllTrainrunSectionsForTrainrun(selectedTrainrunId);
    const [startNode, endNode] = [
      this.trainrunService.getStartNodeWithTrainrunId(selectedTrainrunId),
      this.trainrunService.getEndNodeWithTrainrunId(selectedTrainrunId),
    ];

    // Try to find startNode → endNode
    let firstTrainrunSection = trainrunSections.find(
      (ts) => ts.getSourceNodeId() === startNode.getId(),
    );
    let lastTrainrunSection = [...trainrunSections]
      .reverse()
      .find((ts) => ts.getTargetNodeId() === endNode.getId());

    // If not found, swap first and last sections (and source and target nodes)
    if (!firstTrainrunSection && !lastTrainrunSection) {
      firstTrainrunSection = trainrunSections.find(
        (ts) => ts.getSourceNodeId() === endNode.getId(),
      );
      lastTrainrunSection = [...trainrunSections]
        .reverse()
        .find((ts) => ts.getTargetNodeId() === startNode.getId());
      [firstTrainrunSection, lastTrainrunSection] = [lastTrainrunSection, firstTrainrunSection];
      return {
        leftDepartureTime: firstTrainrunSection.getTargetDeparture(),
        leftArrivalTime: firstTrainrunSection.getTargetArrival(),
        rightDepartureTime: lastTrainrunSection.getSourceDeparture(),
        rightArrivalTime: lastTrainrunSection.getSourceArrival(),
      };
    }

    return {
      leftDepartureTime: firstTrainrunSection.getSourceDeparture(),
      leftArrivalTime: firstTrainrunSection.getSourceArrival(),
      rightDepartureTime: lastTrainrunSection.getTargetDeparture(),
      rightArrivalTime: lastTrainrunSection.getTargetArrival(),
    };
  }
}
