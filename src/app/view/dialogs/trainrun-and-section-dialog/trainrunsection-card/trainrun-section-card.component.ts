import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
} from "@angular/core";
import {TrainrunSectionService} from "../../../../services/data/trainrunsection.service";
import {TrainrunSection} from "../../../../models/trainrunsection.model";
import {TrainrunService} from "../../../../services/data/trainrun.service";
import {TrainrunDialogParameter} from "../trainrun-and-section-dialog.component";
import {TrainrunsectionHelper} from "../../../../services/util/trainrunsection.helper";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {Node} from "../../../../models/node.model";
import {
  LinePatternRefs,
  TrainrunDirection,
} from "../../../../data-structures/business.data.structures";
import {StaticDomTags} from "../../../editor-main-view/data-views/static.dom.tags";
import {ColorRefType} from "../../../../data-structures/technical.data.structures";
import {TrainrunSectionTimesService} from "../../../../services/data/trainrun-section-times.service";
import {GeneralViewFunctions} from "src/app/view/util/generalViewFunctions";

@Component({
  selector: "sbb-trainrunsection-card",
  templateUrl: "./trainrun-section-card.component.html",
  styleUrls: ["./trainrun-section-card.component.scss"],
  providers: [TrainrunSectionTimesService],
})
export class TrainrunSectionCardComponent implements AfterViewInit, OnDestroy {
  @Input()
  trainrunDialogParameter: TrainrunDialogParameter;

  public selectedTrainrunSection: TrainrunSection;
  public leftBetriebspunkt: string[] = ["", ""];
  public rightBetriebspunkt: string[] = ["", ""];
  public frequencyLinePattern: LinePatternRefs;
  public categoryColorRef: ColorRefType;
  public timeCategoryLinePattern: LinePatternRefs;
  public TrainrunDirection = TrainrunDirection;
  public chosenCard: "top" | "bottom" | null = null;

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
    this.trainrunSectionHelper = new TrainrunsectionHelper(
      this.trainrunService,
    );

    this.trainrunSectionTimesService.setOffset(0);
    this.trainrunService.trainruns
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.updateAllValues();
      });
    this.trainrunSectionService.trainrunSections
      .pipe(takeUntil(this.destroyed))
      .subscribe(() => {
        this.updateAllValues();
      });
  }

  updateAllValues() {
    this.selectedTrainrunSection =
      this.trainrunSectionService.getSelectedTrainrunSection();
    if (this.selectedTrainrunSection === null) {
      return;
    }

    const selectedTrainrun = this.selectedTrainrunSection.getTrainrun();
    this.trainrunSectionTimesService.setTrainrunSection(
      this.selectedTrainrunSection,
    );
    this.frequencyLinePattern =
      this.selectedTrainrunSection.getFrequencyLinePatternRef();
    this.categoryColorRef = selectedTrainrun.getCategoryColorRef();
    this.timeCategoryLinePattern =
      selectedTrainrun.getTimeCategoryLinePatternRef();
    this.trainrunSectionTimesService.setHighlightTravelTimeElement(false);
    this.trainrunSectionTimesService.applyOffsetAndTransformTimeStructure();

    this.leftBetriebspunkt = this.trainrunSectionHelper.getLeftBetriebspunkt(
      this.selectedTrainrunSection,
      this.nodesOrdered,
    );
    this.rightBetriebspunkt = this.trainrunSectionHelper.getRightBetriebspunkt(
      this.selectedTrainrunSection,
      this.nodesOrdered,
    );

    const selectedTrainrunDirection = selectedTrainrun.getTrainrunDirection();
    if (selectedTrainrunDirection !== TrainrunDirection.ROUND_TRIP) {
      const isTargetRight = this.trainrunSectionHelper.getIsTargetRight(
        this.selectedTrainrunSection,
      );

      if (isTargetRight) {
        this.chosenCard =
          selectedTrainrunDirection === TrainrunDirection.ONE_WAY_FORWARD
            ? "top"
            : "bottom";
      } else {
        this.chosenCard =
          selectedTrainrunDirection === TrainrunDirection.ONE_WAY_BACKWARD
            ? "top"
            : "bottom";
      }
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
      this.trainrunSectionTimesService.setNodesOrdered(
        this.trainrunDialogParameter.nodesOrdered,
      );
    }

    this.updateAllValues();
    this.changeDetection.detectChanges();
  }

  getEdgeLineClassAttrString(layer: number, cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_CLASS +
      StaticDomTags.makeClassTag(StaticDomTags.LINE_LAYER, "" + layer) +
      StaticDomTags.makeClassTag(
        StaticDomTags.FREQ_LINE_PATTERN,
        this.frequencyLinePattern,
      ) +
      " " +
      StaticDomTags.TAG_UI_DIALOG +
      " " +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_COLOR_REF,
        this.getColorRefTag(cardPosition),
      ) +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_LINEPATTERN_REF,
        this.timeCategoryLinePattern,
      )
    );
  }

  getColorRefTag(cardPosition: string) {
    const colorRefTag =
      cardPosition === this.chosenCard ? this.categoryColorRef : "NORMAL";
    return colorRefTag;
  }

  getEdgeLineTextClass(cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_TEXT_CLASS +
      " " +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_COLOR_REF,
        this.getColorRefTag(cardPosition),
      )
    );
  }

  getEdgeLineArrowClass(cardPosition: string) {
    return (
      StaticDomTags.EDGE_LINE_ARROW_CLASS +
      " " +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_COLOR_REF,
        this.getColorRefTag(cardPosition),
      )
    );
  }

  onTrainrunSectionCardSelection(targetSide: "right" | "left") {
    const isTowardTarget = this.isTowardTarget(targetSide);

    const newTrainrunDirection = isTowardTarget
      ? TrainrunDirection.ONE_WAY_FORWARD
      : TrainrunDirection.ONE_WAY_BACKWARD;

    this.chosenCard = targetSide === "right" ? "top" : "bottom";

    this.trainrunService.updateTrainrunDirection(
      this.selectedTrainrunSection.getTrainrun(),
      newTrainrunDirection,
    );
  }

  private isTowardTarget(targetSide: "right" | "left"): boolean {
    if (targetSide === "right") {
      return this.trainrunSectionHelper.getIsTargetRight(this.selectedTrainrunSection);
    } else {
      return this.trainrunSectionHelper.getIsTargetLeft(this.selectedTrainrunSection);
    }
  }
}
