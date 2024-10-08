import {Component, OnDestroy, OnInit} from "@angular/core";
import {FilterService} from "../../services/ui/filter.service";
import {
  TrainrunCategory,
  TrainrunFrequency,
  TrainrunTimeCategory,
} from "../../data-structures/business.data.structures";
import {DataService} from "../../services/data/data.service";
import {UiInteractionService} from "../../services/ui/ui.interaction.service";
import {LabelGroup, LogicalFilterOperator} from "../../models/labelGroup.model";
import {Subject} from "rxjs";
import {FilterSetting} from "../../models/filterSettings.model";
import {takeUntil} from "rxjs/operators";
import {StaticDomTags} from "../editor-main-view/data-views/static.dom.tags";
import {environment} from "../../../environments/environment";
import {VersionControlService} from "../../services/data/version-control.service";

@Component({
  selector: "sbb-editor-filter-view",
  templateUrl: "./editor-filter-view.component.html",
  styleUrls: ["./editor-filter-view.component.scss"],
})
export class EditorFilterViewComponent implements OnInit, OnDestroy {
  filterAllEmptyNodes: boolean;
  filterNotes: boolean;
  filterAllNonStopNodes: boolean;
  filterArrivalDepartureTime: boolean;
  filterShowNonStopTime: boolean;
  filterTravelTime: boolean;
  filterTrainrunName: boolean;
  filterConnections: boolean;
  timeDisplayPrecision: number;

  hasFilteringNodeLabels: boolean;
  hasFilteringNoteLabels: boolean;
  hasFilteringTrainrunLabels: boolean;

  activeFilterName: string;
  activeEditFilterSettingId: number;

  readonly disableBackend = environment.disableBackend;

  private destroyed = new Subject<void>();

  constructor(
    public dataService: DataService,
    public uiInteractionService: UiInteractionService,
    public filterService: FilterService,
    public versionControlService : VersionControlService,
  ) {
    this.activeFilterName = undefined;
    this.activeEditFilterSettingId = undefined;
    this.filterService.filterChanged();
    this.filterService.filter.pipe(takeUntil(this.destroyed)).subscribe(() => {
      this.updateFilterData();
    });
  }

  ngOnInit(): void {
    this.hasFilteringNodeLabels = this.filterService.isFilteringNodeLabels();
    this.hasFilteringNoteLabels = this.filterService.isFilteringNoteLabels();
    this.hasFilteringTrainrunLabels =
      this.filterService.isFilteringTrainrunLabels();
  }

  ngOnDestroy(): void {
    this.destroyed.next();
    this.destroyed.complete();
  }

  updateFilterData() {
    this.filterArrivalDepartureTime =
      this.filterService.isFilterArrivalDepartureTimeEnabled();
    this.filterShowNonStopTime =
      this.filterService.isFilterShowNonStopTimeEnabled();
    this.filterTravelTime = this.filterService.isFilterTravelTimeEnabled();
    this.filterTrainrunName = this.filterService.isFilterTrainrunNameEnabled();
    this.filterConnections = this.filterService.isFilterConnectionsEnabled();
    this.filterNotes = !this.filterService.isFilterNotesEnabled();
    this.filterAllNonStopNodes =
      !this.filterService.isFilteringAllNonStopNodes();
    this.filterAllEmptyNodes = !this.filterService.isFilteringAllEmptyNodes();
    this.timeDisplayPrecision = this.filterService.getTimeDisplayPrecision();
  }

  onSaveAsNewFilterSetting() {
    this.activeEditFilterSettingId = undefined;
    const filterSetting = this.filterService.saveAsNewFilterSetting();
    this.activeFilterName = filterSetting.name;
    this.activeEditFilterSettingId = filterSetting.getId();
  }

  onEditFilterSettingSave(filterSetting: FilterSetting) {
    this.filterService.saveFilterSetting(filterSetting);
    this.filterService.setActiveFilterSettingName(
      this.activeFilterName,
      filterSetting.getId(),
    );
    this.activeEditFilterSettingId = undefined;
  }

  onDeleteFilterSetting(filterSetting: FilterSetting) {
    this.filterService.deleteFilterSetting(filterSetting.getId());
  }

  onEditFilterSetting(filterSetting: FilterSetting) {
    this.activeFilterName = filterSetting.name;
    this.activeEditFilterSettingId = filterSetting.getId();
  }

  isActiveEditFilterSetting(filterSetting: FilterSetting): boolean {
    return this.activeEditFilterSettingId === filterSetting.getId();
  }

  onFilterSettingChanged(filterSetting: FilterSetting) {
    this.activeEditFilterSettingId = undefined;
    if (
      filterSetting.getId() === this.filterService.getActiveFilterSettingId()
    ) {
      if (
        this.filterService.isActiveFilterSettingEqual(filterSetting.getId())
      ) {
        this.filterService.resetFiltering();
        return;
      }
    }
    this.filterService.activateFilterSetting(filterSetting.getId());
  }

  makeFilterSettingButtonLabel(filterSetting: FilterSetting): string {
    return filterSetting.name;
  }

  checkIsFilterSettingActive(filterSetting: FilterSetting): boolean {
    return (
      this.filterService.isFilterSettingEnabled(filterSetting.getId()) &&
      this.filterService.isActiveFilterSettingEqual(filterSetting.getId())
    );
  }

  getFilterSettingClassname(
    filterSetting: FilterSetting,
    isFunctionButton = false,
  ): string {
    if (isFunctionButton) {
      return "FilterSettting function";
    }
    if (this.checkIsFilterSettingActive(filterSetting)) {
      return "FilterSettting selected";
    }
    return "FilterSettting";
  }

  getFilterSettingAddButtonClassname(): string {
    return "FilterSettting add_button";
  }

  getFilterSettingTooltip(filterSetting: FilterSetting): string {
    if (!this.filterService.isFilterSettingEnabled(filterSetting.getId())) {
      return $localize`:@@app.view.editor-filter-view.load-filter:Load ${filterSetting.name}`;
    }
    return $localize`:@@app.view.editor-filter-view.reload-filter:Reload ${filterSetting.name}`;
  }

  isTrainrunFilteringActive(): boolean {
    return this.filterService.isTrainrunFilteringActive();
  }

  isDisplayFilteringActive(): boolean {
    return (
      this.filterService.isDisplayFilteringActive() &&
      this.filterService.isNodeFilteringActive()
    );
  }

  isFilteringNodeLabels(): boolean {
    return this.filterService.isFilteringNodeLabels();
  }

  isFilteringTrainrunLabels(): boolean {
    return this.filterService.isFilteringTrainrunLabels();
  }

  isFilteringNoteLabels(): boolean {
    return this.filterService.isFilteringNoteLabels();
  }

  onResetAllFilter() {
    return this.filterService.resetFiltering();
  }

  onTimeDisplayPrecisionChanged() {
    this.filterService.setTimeDisplayPrecision(this.timeDisplayPrecision);
  }

  filterAllEmptyNodesChanged() {
    if (!this.filterAllEmptyNodes) {
      this.filterService.enableFilterAllEmptyNodes();
    } else {
      this.filterService.disableFilterAllEmptyNodes();
    }
  }

  filterNotesChanged() {
    if (!this.filterNotes) {
      this.filterService.enableFilterNotes();
    } else {
      this.filterService.disableFilterNotes();
    }
  }

  filterAllNonStopNodesChanged() {
    if (!this.filterAllNonStopNodes) {
      this.filterService.enableFilterAllNonStopNodes();
    } else {
      this.filterService.disableFilterAllNonStopNodes();
    }
  }

  filterArrivalDepartureTimeChanged() {
    if (this.filterArrivalDepartureTime) {
      this.filterService.enableFilterArrivalDepartureTime();
    } else {
      this.filterService.disableFilterArrivalDepartureTime();
    }
  }

  filterShowNonStopTimeChanged() {
    if (this.filterShowNonStopTime) {
      this.filterService.enableFilterShowNonStopTime();
    } else {
      this.filterService.disableFilterShowNonStopTime();
    }
  }

  filterTravelTimeChanged() {
    if (this.filterTravelTime) {
      this.filterService.enableFilterTravelTime();
    } else {
      this.filterService.disableFilterTravelTime();
    }
  }

  filterTrainrunNameChanged() {
    if (this.filterTrainrunName) {
      this.filterService.enableFilterTrainrunName();
    } else {
      this.filterService.disableFilterTrainrunName();
    }
  }

  filterConnectionsChanged() {
    if (this.filterConnections) {
      this.filterService.enableFilterConnections();
    } else {
      this.filterService.disableFilterConnections();
    }
  }

  getCategoryClassname(trainrunCategory: TrainrunCategory): string {
    if (this.filterService.isFilterTrainrunCategoryEnabled(trainrunCategory)) {
      return (
        "TrainrunDialog " +
        StaticDomTags.makeClassTag(
          StaticDomTags.TAG_COLOR_REF,
          trainrunCategory.colorRef,
        ) +
        " " +
        StaticDomTags.TAG_SELECTED
      );
    }
    return (
      "TrainrunDialog " +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_COLOR_REF,
        trainrunCategory.colorRef,
      )
    );
  }

  getTimeCategoryClassname(trainrunTimeCategory: TrainrunTimeCategory): string {
    if (
      this.filterService.isFilterTrainrunTimeCategoryEnabled(
        trainrunTimeCategory,
      )
    ) {
      return (
        "TrainrunDialog TimeCategory" +
        StaticDomTags.makeClassTag(
          StaticDomTags.TAG_LINEPATTERN_REF,
          trainrunTimeCategory.linePatternRef,
        ) +
        " " +
        StaticDomTags.TAG_SELECTED
      );
    }
    return (
      "TrainrunDialog TimeCategory " +
      StaticDomTags.makeClassTag(
        StaticDomTags.TAG_LINEPATTERN_REF,
        trainrunTimeCategory.linePatternRef,
      )
    );
  }

  getCategoryTooltip(trainrunCategory: TrainrunCategory): string {
    if (!this.filterService.isFilterTrainrunCategoryEnabled(trainrunCategory)) {
      return $localize`:@@app.view.editor-filter-view.show-trainrun-category:Show ${trainrunCategory.name}:trainrunCategory:`;
    }
    return $localize`:@@app.view.editor-filter-view.hide-trainrun-category:Hide ${trainrunCategory.name}:trainrunCategory:`;
  }

  getTimeCategoryTooltip(trainrunTimeCategory: TrainrunTimeCategory): string {
    /*
    if (!this.filterService.isFilterTrainrunCategoryEnabled(trainrunTimeCategory)) {
      return $localize`:@@app.view.editor-filter-view.show-trainrun-time-category:Show ${trainrunTimeCategory.name}:trainrunTimeCategory:`;
    }
    */
    return $localize`:@@app.view.editor-filter-view.hide-trainrun-time-category:Hide ${trainrunTimeCategory.name}:trainrunTimeCategory:`;
  }

  makeCategoryButtonLabel(trainrunCategory: TrainrunCategory): string {
    const label = trainrunCategory.shortName.toUpperCase();
    if (label.length > 4) {
      return label.substring(0, 3) + "...";
    }
    return label;
  }

  makeTimeCategoryButtonLabel(
    trainrunTimeCategory: TrainrunTimeCategory,
  ): string {
    const label = trainrunTimeCategory.shortName;
    if (label.length > 4) {
      return label.substring(0, 3) + "...";
    }
    return label;
  }

  onCategoryChanged(trainrunCategory: TrainrunCategory) {
    if (!this.filterService.isFilterTrainrunCategoryEnabled(trainrunCategory)) {
      this.filterService.enableFilterTrainrunCategory(trainrunCategory);
    } else {
      this.filterService.disableFilterTrainrunCategory(trainrunCategory);
    }
  }

  onTimeCategoryChanged(trainrunTimeCategory: TrainrunTimeCategory) {
    if (
      !this.filterService.isFilterTrainrunTimeCategoryEnabled(
        trainrunTimeCategory,
      )
    ) {
      this.filterService.enableFilterTrainrunTimeCategory(trainrunTimeCategory);
    } else {
      this.filterService.disableFilterTrainrunTimeCategory(
        trainrunTimeCategory,
      );
    }
  }

  isFilterFunctionOrEnabled(labelGroupObject: LabelGroup): boolean {
    return (
      labelGroupObject.getLogicalFilterOperator() === LogicalFilterOperator.OR
    );
  }

  getFrequencyClassname(trainrunFrequency: TrainrunFrequency): string {
    if (
      this.filterService.isFilterTrainrunFrequencyEnabled(trainrunFrequency)
    ) {
      return (
        "TrainrunDialog Frequency Frequency_" +
        trainrunFrequency.linePatternRef +
        " " +
        StaticDomTags.TAG_SELECTED
      );
    }
    return (
      "TrainrunDialog Frequency Frequency_" + trainrunFrequency.linePatternRef
    );
  }

  getFrequencyTooltip(trainrunFrequency: TrainrunFrequency): string {
    if (
      !this.filterService.isFilterTrainrunFrequencyEnabled(trainrunFrequency)
    ) {
      return $localize`:@@app.view.editor-filter-view.show-trainrun-frequency:Show ${trainrunFrequency.name}:trainrunFrequency:`;
    }
    return $localize`:@@app.view.editor-filter-view.hide-trainrun-frequency:Hide ${trainrunFrequency.name}:trainrunFrequency:`;
  }

  makeFrequencyButtonLabel(trainrunFrequency: TrainrunFrequency): string {
    const label = trainrunFrequency.shortName;
    if (label.length > 4) {
      return label.substring(0, 3) + "...";
    }
    return label;
  }

  onFrequencyChanged(trainrunFrequency: TrainrunFrequency) {
    if (
      !this.filterService.isFilterTrainrunFrequencyEnabled(trainrunFrequency)
    ) {
      this.filterService.enableFilterTrainrunFrequency(trainrunFrequency);
    } else {
      this.filterService.disableFilterTrainrunFrequency(trainrunFrequency);
    }
  }

  onResetTrainrunFilter() {
    this.filterService.resetFilterTrainrunCategory();
    this.filterService.resetFilterTrainrunFrequency();
    this.filterService.resetFilterTrainrunTimeCategory();
  }

  onResetNodeFilter() {
    this.filterService.disableFilterAllEmptyNodes();
    this.filterService.disableFilterAllNonStopNodes();
    this.filterAllEmptyNodes = !this.filterService.isFilteringAllEmptyNodes();
    this.filterAllNonStopNodes =
      !this.filterService.isFilteringAllNonStopNodes();
  }

  onResetNoteFilter() {
    this.filterService.disableFilterNotes();
    this.filterNotes = !this.filterService.isFilterNotesEnabled();
  }

  onResetDisplayFilter() {
    this.onResetNodeFilter();
    this.onResetNoteFilter();
    this.filterService.enableFilterArrivalDepartureTime();
    this.filterService.enableFilterTravelTime();
    this.filterService.enableFilterTrainrunName();
    this.filterService.enableFilterShowNonStopTime();
    this.filterService.enableFilterConnections();
    this.filterArrivalDepartureTime =
      this.filterService.isFilterArrivalDepartureTimeEnabled();
    this.filterTravelTime = this.filterService.isFilterTravelTimeEnabled();
    this.filterTrainrunName = this.filterService.isFilterTrainrunNameEnabled();
    this.filterConnections = this.filterService.isFilterConnectionsEnabled();
    this.filterShowNonStopTime =
      this.filterService.isFilterShowNonStopTimeEnabled();
  }
}
