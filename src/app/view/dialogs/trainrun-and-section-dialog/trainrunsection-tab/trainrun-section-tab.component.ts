import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  OnDestroy,
  ViewChild,
} from "@angular/core";
import {TrainrunSectionService} from "../../../../services/data/trainrunsection.service";
import {TrainrunSection} from "../../../../models/trainrunsection.model";
import {TrainrunService} from "../../../../services/data/trainrun.service";
import {TrainrunDialogParameter} from "../trainrun-and-section-dialog.component";
import {DataService} from "../../../../services/data/data.service";
import {
  LeftAndRightElement,
  TrainrunsectionHelper,
} from "../../../../services/util/trainrunsection.helper";
import {FilterService} from "../../../../services/ui/filter.service";
import {takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {LinePatternRefs} from "../../../../data-structures/business.data.structures";
import {StaticDomTags} from "../../../editor-main-view/data-views/static.dom.tags";
import {ColorRefType} from "../../../../data-structures/technical.data.structures";
import {TrainrunSectionTimesService} from "../../../../services/data/trainrun-section-times.service";
import {VersionControlService} from "../../../../services/data/version-control.service";
import {UiInteractionService} from "../../../../services/ui/ui.interaction.service";
import {
  SymmetrySelectionDialogParameter,
  SymmetryReference,
  SymmetryOn,
} from "../../symmetry-selection-dialog/symmetry-selection-dialog.component";

export interface LeftAndRightTimeStructure {
  leftDepartureTime: number;
  leftArrivalTime: number;
  rightDepartureTime: number;
  rightArrivalTime: number;
  travelTime: number;
  bottomTravelTime: number;
}

export interface LeftAndRightLockStructure {
  leftLock: boolean;
  rightLock: boolean;
  travelTimeLock: boolean;
}

@Component({
  selector: "sbb-trainrunsection-tab",
  templateUrl: "./trainrun-section-tab.component.html",
  styleUrls: ["./trainrun-section-tab.component.scss"],
  providers: [TrainrunSectionTimesService],
})
export class TrainrunSectionTabComponent implements AfterViewInit, OnDestroy {
  @Input()
  trainrunDialogParameter: TrainrunDialogParameter;
  @ViewChild("leftDepartureTimeInputElement")
  leftDepartureTimeInputElement: ElementRef;
  @ViewChild("leftArrivalTimeInputElement")
  leftArrivalTimeInputElement: ElementRef;
  @ViewChild("rightDepartureTimeInputElement")
  rightDepartureTimeInputElement: ElementRef;
  @ViewChild("rightArrivalTimeInputElement")
  rightArrivalTimeInputElement: ElementRef;
  @ViewChild("travelTimeInputElement")
  travelTimeInputElement: ElementRef;
  @ViewChild("bottomTravelTimeInputElement")
  bottomTravelTimeInputElement: ElementRef;
  @ViewChild("leftSymmetryToggle") leftSymmetryToggle: ElementRef;
  @ViewChild("rightSymmetryToggle") rightSymmetryToggle: ElementRef;

  public selectedTrainrunSection: TrainrunSection;
  public leftBetriebspunkt: string[] = ["", ""];
  public rightBetriebspunkt: string[] = ["", ""];
  public tagNbrStopInput = false;
  public numberOfStops: number;
  public frequency: number;
  public frequencyLinePattern: LinePatternRefs;
  public categoryShortName: string;
  public categoryColorRef: ColorRefType;
  public timeCategoryShortName: string;
  public timeCategoryLinePattern: LinePatternRefs;

  private trainrunSectionHelper: TrainrunsectionHelper;
  private destroyed = new Subject<void>();

  public get isTopTrainrunSectionInfoDisplayed(): boolean {
    return (
      this.isRoundTrip() || !TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection)
    );
  }

  public get isBottomTrainrunSectionInfoDisplayed(): boolean {
    return (
      this.isRoundTrip() || TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection)
    );
  }

  public get isSymmetric(): boolean {
    return this.selectedTrainrunSection.isSymmetric();
  }

  constructor(
    private dataService: DataService,
    private filterService: FilterService,
    private trainrunService: TrainrunService,
    private trainrunSectionService: TrainrunSectionService,
    private changeDetection: ChangeDetectorRef,
    public trainrunSectionTimesService: TrainrunSectionTimesService,
    private versionControlService: VersionControlService,
    private uiInteractionService: UiInteractionService,
  ) {
    this.trainrunSectionHelper = new TrainrunsectionHelper(this.trainrunService);

    this.trainrunSectionTimesService.setOffset(0);
    this.trainrunService.trainruns.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.resetOffsetAfterTrainrunChanged();
      this.updateAllValues();
    });
    this.trainrunSectionService.trainrunSections.pipe(takeUntil(this.destroyed)).subscribe(() => {
      if (
        this.selectedTrainrunSection !== this.trainrunSectionService.getSelectedTrainrunSection()
      ) {
        this.resetOffsetAfterTrainrunChanged();
        this.updateAllValues();
      }
    });
  }

  updateAllValues() {
    this.selectedTrainrunSection = this.trainrunSectionService.getSelectedTrainrunSection();
    if (this.selectedTrainrunSection === null) {
      return;
    }
    this.trainrunSectionTimesService.setTrainrunSection(this.selectedTrainrunSection);
    this.frequency = this.selectedTrainrunSection.getFrequency();
    this.frequencyLinePattern = this.selectedTrainrunSection.getFrequencyLinePatternRef();
    this.categoryShortName = this.selectedTrainrunSection.getTrainrun().getCategoryShortName();
    this.categoryColorRef = this.selectedTrainrunSection.getTrainrun().getCategoryColorRef();
    this.timeCategoryShortName = this.selectedTrainrunSection
      .getTrainrun()
      .getTimeCategoryShortName();
    this.timeCategoryLinePattern = this.selectedTrainrunSection
      .getTrainrun()
      .getTimeCategoryLinePatternRef();
    this.trainrunSectionTimesService.setHighlightTravelTimeElement(false);
    this.trainrunSectionTimesService.setHighlightBottomTravelTimeElement(false);
    this.numberOfStops = this.selectedTrainrunSection.getNumberOfStops();
    this.trainrunSectionTimesService.applyOffsetAndTransformTimeStructure();

    this.trainrunSectionTimesService.setLockStructure(
      this.trainrunSectionHelper.getLeftAndRightLock(
        this.selectedTrainrunSection,
        this.trainrunSectionTimesService.getNodesOrdered(),
      ),
    );
    this.leftBetriebspunkt = this.trainrunSectionHelper.getLeftBetriebspunkt(
      this.selectedTrainrunSection,
      this.trainrunSectionTimesService.getNodesOrdered(),
    );
    this.rightBetriebspunkt = this.trainrunSectionHelper.getRightBetriebspunkt(
      this.selectedTrainrunSection,
      this.trainrunSectionTimesService.getNodesOrdered(),
    );
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

    this.calcAndSetOffset();
    const focusElement = this.trainrunSectionHelper.mapSelectedTimeElement(
      this.trainrunDialogParameter.trainrunSectionText,
      this.selectedTrainrunSection,
      this.trainrunSectionTimesService.getNodesOrdered(),
      this.trainrunDialogParameter.forward,
    );
    this.trainrunSectionTimesService.setInitialLeftAndRightElement(focusElement);
    this.setFocusToUIElement(focusElement);

    this.updateAllValues();
    this.changeDetection.detectChanges();
  }

  getContentClassTag(): string {
    const retVal: string = "EditTrainrunSectionDialogTabContent";
    if (this.versionControlService.getVariantIsWritable()) {
      return retVal;
    }
    return retVal + " readonly";
  }

  getContentFooterClassTag(): string {
    const retVal: string = "EditTrainrunDialogTabFooter";
    if (this.versionControlService.getVariantIsWritable()) {
      return retVal;
    }
    return retVal + " readonly";
  }

  setFocusToUIElement(focusElement: LeftAndRightElement) {
    switch (focusElement) {
      case LeftAndRightElement.LeftArrival:
        this.setFocusAndSelectInputElement(this.leftArrivalTimeInputElement.nativeElement);
        break;
      case LeftAndRightElement.LeftDeparture:
        this.setFocusAndSelectInputElement(this.leftDepartureTimeInputElement.nativeElement);
        break;
      case LeftAndRightElement.RightArrival:
        this.setFocusAndSelectInputElement(this.rightArrivalTimeInputElement.nativeElement);
        break;
      case LeftAndRightElement.RightDeparture:
        this.setFocusAndSelectInputElement(this.rightDepartureTimeInputElement.nativeElement);
        break;
      case LeftAndRightElement.TravelTime:
        this.setFocusAndSelectInputElement(this.travelTimeInputElement.nativeElement);
        break;
      case LeftAndRightElement.BottomTravelTime:
        this.setFocusAndSelectInputElement(this.bottomTravelTimeInputElement.nativeElement);
        break;
    }
  }

  setFocusAndSelectInputElement(element: HTMLInputElement) {
    setTimeout(() => {
      element.focus();
      element.select();
    }, 800);
  }

  getEdgeLineClassAttrString(layer: number) {
    return (
      StaticDomTags.EDGE_LINE_CLASS +
      StaticDomTags.makeClassTag(StaticDomTags.LINE_LAYER, "" + layer) +
      StaticDomTags.makeClassTag(StaticDomTags.FREQ_LINE_PATTERN, this.frequencyLinePattern) +
      " " +
      StaticDomTags.TAG_UI_DIALOG +
      " " +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_COLOR_REF, this.categoryColorRef) +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_LINEPATTERN_REF, this.timeCategoryLinePattern)
    );
  }

  getEdgeLineArrowClassAttrString() {
    return (
      StaticDomTags.EDGE_LINE_ARROW_CLASS +
      StaticDomTags.makeClassTag(StaticDomTags.FREQ_LINE_PATTERN, this.frequencyLinePattern) +
      " " +
      StaticDomTags.TAG_UI_DIALOG +
      " " +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_COLOR_REF, this.categoryColorRef) +
      StaticDomTags.makeClassTag(StaticDomTags.TAG_LINEPATTERN_REF, this.timeCategoryLinePattern)
    );
  }

  getArrowTranslateAndRotate() {
    if (this.isTopTrainrunSectionInfoDisplayed && !this.isBottomTrainrunSectionInfoDisplayed) {
      return "translate(60, 16) rotate(0)";
    } else if (
      !this.isTopTrainrunSectionInfoDisplayed &&
      this.isBottomTrainrunSectionInfoDisplayed
    ) {
      return "translate(60, 16) rotate(180)";
    }
    return "";
  }

  /* methods for tabbing */
  setFocusToBeginningOfLoop() {
    this.leftDepartureTimeInputElement.nativeElement.focus();
    this.leftDepartureTimeInputElement.nativeElement.select();
  }

  setFocusToEndOfLoop() {
    this.leftArrivalTimeInputElement.nativeElement.focus();
    this.leftArrivalTimeInputElement.nativeElement.select();
  }

  /* number of stops */
  onNumberOfStopsChanged() {
    this.numberOfStops = Math.max(0, this.numberOfStops);
    this.trainrunSectionService.updateTrainrunSectionNumberOfStops(
      this.selectedTrainrunSection,
      this.numberOfStops,
    );
  }

  onInputNumberOfStopsElementButtonPlus() {
    this.numberOfStops += 1;
    this.trainrunSectionTimesService.setHighlightTravelTimeElement(false);
    this.trainrunSectionTimesService.setHighlightBottomTravelTimeElement(false);
    this.onNumberOfStopsChanged();
  }

  onInputNumberOfStopsElementButtonMinus() {
    this.numberOfStops -= 1;
    this.numberOfStops = Math.max(0, this.numberOfStops);
    this.onNumberOfStopsChanged();
  }

  onMouseEnterNbrStopInput() {
    this.tagNbrStopInput = true;
  }

  onMouseOutNbrStopInput() {
    this.tagNbrStopInput = false;
  }

  getNumberOfStopsInputElementClass() {
    const activeTag = this.tagNbrStopInput ? " IsActive" : " NotActive";
    if (this.numberOfStops > 0) {
      return "NumberOfStopsInputElement show" + activeTag;
    }
    return "NumberOfStopsInputElement" + activeTag;
  }

  isRoundTrip() {
    return this.selectedTrainrunSection.getTrainrun().isRoundTrip();
  }

  isLeftNodeSymmetric(): boolean {
    if (TrainrunsectionHelper.isTargetRightOrBottom(this.selectedTrainrunSection)) {
      return this.selectedTrainrunSection.getSourceSymmetry();
    } else {
      return this.selectedTrainrunSection.getTargetSymmetry();
    }
  }

  isRightNodeSymmetric(): boolean {
    if (TrainrunsectionHelper.isTargetRightOrBottom(this.selectedTrainrunSection)) {
      return this.selectedTrainrunSection.getTargetSymmetry();
    } else {
      return this.selectedTrainrunSection.getSourceSymmetry();
    }
  }

  isLeftToggleDisabled(): boolean {
    return (
      !this.isLeftNodeSymmetric() &&
      ((this.trainrunSectionTimesService.getLockStructure().travelTimeLock &&
        this.trainrunSectionTimesService.getLockStructure().rightLock) ||
        (this.isRightNodeSymmetric() &&
          this.trainrunSectionTimesService.getLockStructure().travelTimeLock))
    );
  }

  isRightToggleDisabled(): boolean {
    return (
      !this.isRightNodeSymmetric() &&
      ((this.trainrunSectionTimesService.getLockStructure().travelTimeLock &&
        this.trainrunSectionTimesService.getLockStructure().leftLock) ||
        (this.isLeftNodeSymmetric() &&
          this.trainrunSectionTimesService.getLockStructure().travelTimeLock))
    );
  }

  onLeftNodeSymmetryToggleChanged(symmetry: boolean) {
    // Symmetry -> Asymmetry
    if (!symmetry) {
      this.trainrunSectionTimesService.onLeftNodeSymmetryChanged(
        symmetry,
        TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection),
      );
      return;
    }

    // Asymmetry -> Symmetry, show the dialog to choose symmetry reference
    const originalLeftSymmetryState = this.isLeftNodeSymmetric();
    this.showSymmetrySelectionDialog(SymmetryOn.LeftNode).then(
      (reference: SymmetryReference | null) => {
        if (!(reference in SymmetryReference)) {
          // User cancelled (user clicks Cancel / X / outside the dialog), don't enable symmetry
          this.revertLeftToggleState(originalLeftSymmetryState);
          return;
        }
        this.trainrunSectionTimesService.onLeftNodeSymmetryChanged(
          symmetry,
          TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection),
          reference,
        );
      },
    );
  }

  onRightNodeSymmetryToggleChanged(symmetry: boolean) {
    // Symmetry -> Asymmetry
    if (!symmetry) {
      this.trainrunSectionTimesService.onRightNodeSymmetryChanged(
        symmetry,
        TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection),
      );
      return;
    }

    // Asymmetry -> Symmetry, show the dialog to choose symmetry reference
    const originalRightSymmetryState = this.isRightNodeSymmetric();
    this.showSymmetrySelectionDialog(SymmetryOn.RightNode).then(
      (reference: SymmetryReference | null) => {
        if (!(reference in SymmetryReference)) {
          // User cancelled (user clicks Cancel / X / outside the dialog), don't enable symmetry
          this.revertRightToggleState(originalRightSymmetryState);
          return;
        }
        this.trainrunSectionTimesService.onRightNodeSymmetryChanged(
          symmetry,
          TrainrunsectionHelper.isPositionSwapped(this.selectedTrainrunSection),
          reference,
        );
      },
    );
  }

  getTravelTimeScssClass(): string {
    if (this.isSymmetric) {
      // If symmetric, travel time is displayed at the center
      return "";
    }
    // If not symmetric, travel time is displayed at the top
    // (and bottom travel time at the bottom)
    return "Top";
  }

  private resetOffsetAfterTrainrunChanged() {
    if (this.trainrunSectionTimesService.getOffsetTransformationActive()) {
      this.trainrunSectionTimesService.removeOffsetAndBackTransformTimeStructure();

      this.selectedTrainrunSection = this.trainrunSectionService.getSelectedTrainrunSection();
      if (this.selectedTrainrunSection !== null) {
        this.frequency = this.selectedTrainrunSection.getFrequency();
        if (this.trainrunSectionTimesService.getOffset() % this.frequency !== 0) {
          this.trainrunSectionTimesService.setOffset(0);
        }
      } else {
        this.trainrunSectionTimesService.setOffset(0);
      }
    }
  }

  private calcAndSetOffset() {
    if (this.trainrunDialogParameter.offset < 0) {
      this.trainrunSectionTimesService.setOffset(
        Math.ceil(Math.abs(this.trainrunDialogParameter.offset) / 60) * 60 -
          Math.abs(this.trainrunDialogParameter.offset),
      );
    } else {
      this.trainrunSectionTimesService.setOffset(this.trainrunDialogParameter.offset);
    }
  }

  private showSymmetrySelectionDialog(symmetryOn: SymmetryOn): Promise<SymmetryReference | null> {
    const parameter = new SymmetrySelectionDialogParameter(
      symmetryOn,
      this.trainrunService,
      this.trainrunSectionService,
      this.trainrunSectionTimesService,
    );

    return new Promise<SymmetryReference | null>((resolve) => {
      parameter.dialogFeedback.subscribe((result: SymmetryReference | null) => {
        resolve(result);
      });
      this.uiInteractionService.showSymmetrySelectionDialog(parameter);
    });
  }

  private revertLeftToggleState(originalState: boolean): void {
    if (this.leftSymmetryToggle && this.leftSymmetryToggle.nativeElement) {
      this.leftSymmetryToggle.nativeElement.checked = !originalState;
    }
    this.changeDetection.detectChanges();
  }

  private revertRightToggleState(originalState: boolean): void {
    if (this.rightSymmetryToggle && this.rightSymmetryToggle.nativeElement) {
      this.rightSymmetryToggle.nativeElement.checked = !originalState;
    }
    this.changeDetection.detectChanges();
  }
}
