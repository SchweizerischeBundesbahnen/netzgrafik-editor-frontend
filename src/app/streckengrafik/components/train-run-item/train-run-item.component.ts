import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {SgTrainrun} from "../../model/streckengrafik-model/sg-trainrun";
import {SgTrainrunItem} from "../../model/streckengrafik-model/sg-trainrun-item";
import {TimeSliderService} from "../../services/time-slider.service";
import {takeUntil} from "rxjs/operators";
import {SliderChangeInfo} from "../../model/util/sliderChangeInfo";
import {Subject} from "rxjs";
import {ViewBoxChangeInfo} from "../../model/util/viewBoxChangeInfo";
import {ViewBoxService} from "../../services/util/view-box.service";
import * as d3 from "d3";
import {
  UpdateCounterController,
  UpdateCounterHandler,
  UpdateCounterTriggerSerivce,
} from "../../services/util/update-counter.service";

@Component({
  // eslint-disable-next-line @angular-eslint/component-selector
  selector: "[sbb-train-run-item]",
  templateUrl: "./train-run-item.component.html",
  styleUrls: ["./train-run-item.component.scss"],
})
export class TrainRunItemComponent
  implements OnInit, OnDestroy, UpdateCounterHandler
{
  @Input()
  trainrun: SgTrainrun;

  public yZoom = 0;
  public yMove = 0;
  public offsets: number[] = [];

  public viewBoxChangeInfo: ViewBoxChangeInfo = new ViewBoxChangeInfo();

  private readonly destroyed$ = new Subject<void>();

  private extraBount = 0;
  private fullDetailRenderingUpdateCounter = 0;
  private updateCounterController: UpdateCounterController = undefined;
  private recalc: boolean;

  constructor(
    private readonly timeSliderService: TimeSliderService,
    private readonly viewBoxService: ViewBoxService,
    private readonly updateCounterTriggerSerivce: UpdateCounterTriggerSerivce,
  ) {
    // use ngOnInit because @Input this.trainrun is used
  }

  ngOnInit(): void {
    this.timeSliderService
      .getSliderChangeObservable()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((sliderChangeInfo: SliderChangeInfo) => {
        if (this.yZoom !== sliderChangeInfo.zoom) {
          this.offsets = [];
        }
        this.recalc = sliderChangeInfo.recalc;
        if (this.yZoom !== sliderChangeInfo.zoom) {
          this.recalc = true;
        }
        this.yZoom = sliderChangeInfo.zoom;
        this.yMove = sliderChangeInfo.move;
        this.doDelayedExtraBound();
      });

    this.viewBoxService
      .getViewBox()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((viewBoxChangeInfo: ViewBoxChangeInfo) => {
        this.viewBoxChangeInfo = viewBoxChangeInfo;
        this.doDelayedExtraBound();
      });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  public showSection(path: SgTrainrunItem): boolean {
    return path.isSection();
  }

  public showNode(path: SgTrainrunItem) {
    return path.isNode();
  }

  public getTranslate(path: SgTrainrunItem): string {
    return "" + path.getStartposition();
  }

  getId(trainrun: SgTrainrun, trainrunItem: SgTrainrunItem) {
    return (
      "streckengrafik_trainrun_item_" +
      trainrun.getId() +
      "_" +
      trainrunItem.backward
    );
  }

  bringToFront(
    trainrun: SgTrainrun,
    trainrunItem: SgTrainrunItem,
    event: MouseEvent,
  ) {
    if (event.buttons !== 0) {
      return;
    }
    const key = "#" + this.getId(trainrun, trainrunItem);
    d3.selectAll(key).raise();
  }

  getUpdateCounterTriggerSerivce(): UpdateCounterTriggerSerivce {
    return this.updateCounterTriggerSerivce;
  }

  updateCounterCallback() {
    this.extraBount = 3;
    this.getOffsets();
  }

  getCurrentUpdateCounter(): number {
    return this.fullDetailRenderingUpdateCounter;
  }

  private doDelayedExtraBound() {
    this.fullDetailRenderingUpdateCounter++;
    this.extraBount = 0;

    if (this.updateCounterController !== undefined) {
      this.updateCounterController.clear();
    }
    if (this.recalc) {
      this.extraBount = 1;
      this.getOffsets();
    } else {
      this.updateCounterController = new UpdateCounterController(
        this.fullDetailRenderingUpdateCounter,
        this,
      );
    }
  }

  private getOffsets() {
    if (!this.trainrun) {
      return;
    }

    const frequency = this.trainrun.frequency * this.yZoom;
    const startTime = this.trainrun.startTime * this.yZoom;
    const endTime = this.trainrun.endTime * this.yZoom;
    const lowerBound = -Math.floor((endTime - this.yMove) / frequency);
    const upperBound = Math.ceil(
      (this.yMove + this.viewBoxChangeInfo.height - startTime) / frequency,
    );

    if (this.offsets.length === 0) {
      this.updateOffsets(lowerBound, upperBound);
    } else {
      const lb = this.offsets[0];
      if (lb > lowerBound * this.trainrun.frequency) {
        this.updateOffsets(lowerBound, upperBound);
        return;
      }

      const up = this.offsets[this.offsets.length - 1];
      if (up < upperBound * this.trainrun.frequency) {
        this.updateOffsets(lowerBound, upperBound);
        return;
      }
    }
  }

  private updateOffsets(inLowerBound: number, inUpperBound: number) {
    const lowerBound = inLowerBound - 1 - this.extraBount;
    const upperBound = inUpperBound + 1 + this.extraBount;
    for (let offset = lowerBound; offset <= upperBound; offset++) {
      this.offsets.push(offset * this.trainrun.frequency);
    }
    // unique
    this.offsets = this.offsets.filter((v, i, a) => a.indexOf(v) === i);
  }
}
