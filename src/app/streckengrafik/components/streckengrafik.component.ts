import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  HostListener,
  Input,
  NgZone,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';
import {interval, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {ViewBoxService} from '../services/util/view-box.service';
import {ViewBoxChangeInfo} from '../model/util/viewBoxChangeInfo';
import {ResizeChangeInfo} from '../model/util/resizeChangeInfo';
import {ResizeService} from '../services/util/resize.service';
import {SliderChangeInfo} from '../model/util/sliderChangeInfo';
import {TimeSliderService} from '../services/time-slider.service';
import {UpdateCounterTriggerSerivce} from '../services/util/update-counter.service';
import {Sg4ToggleTrackOccupierService} from '../services/sg-4-toggle-track-occupier.service';
import {
  StreckengrafikDisplayElementService
} from '../services/util/streckengrafik-display-element.service';
import {StreckengrafikDrawingContext} from '../model/util/streckengrafik.drawing.context';

@Component({
  selector: 'sbb-streckengrafik',
  templateUrl: './streckengrafik.component.html',
  styleUrls: ['./streckengrafik.component.scss']
})
export class StreckengrafikComponent implements OnInit, OnDestroy, AfterViewInit {

  @ViewChild('svg') svgRef: ElementRef;

  viewBox: string;
  yZoom: number;
  disabledDisplayTools = true;

  @Input()
  pathAlignmentHorizontal = true;

  private viewBoxChangeInfo: ViewBoxChangeInfo = new ViewBoxChangeInfo();
  private sliderChangeInfo: SliderChangeInfo = new SliderChangeInfo();

  private readonly destroyed$ = new Subject<void>();

  private oldResizeChangeInfo: ResizeChangeInfo = new ResizeChangeInfo(-1, -1);
  private oldRect: DOMRect = undefined;

  constructor(private readonly timeSliderService: TimeSliderService,
              private readonly viewBoxService: ViewBoxService,
              private readonly sg4ToggleTrackOccupierService: Sg4ToggleTrackOccupierService,
              private readonly updateCounterTriggerSerivce: UpdateCounterTriggerSerivce,
              private readonly cd: ChangeDetectorRef,
              private resizeService: ResizeService,
              private streckengrafikDisplayElementService: StreckengrafikDisplayElementService,
              private ngZone: NgZone
  ) {
  }

  ngOnInit(): void {
    this.oldRect = undefined;
    this.oldResizeChangeInfo = new ResizeChangeInfo(-1, -1);

    this.viewBoxService.getViewBox()
      .pipe(takeUntil(this.destroyed$))
      .subscribe(viewBoxChangeInfo => {
        this.viewBoxChangeInfo = viewBoxChangeInfo;
        this.renderViewBox();
      });

    this.timeSliderService.getSliderChangeObservable()
      .pipe(takeUntil(this.destroyed$))
      .subscribe((sliderChangeInfo: SliderChangeInfo) => {
        this.sliderChangeInfo = sliderChangeInfo;
        this.yZoom = this.sliderChangeInfo.zoom;
        this.renderViewBox();
      });
  }

  ngAfterViewInit() {
    this.ngZone.runOutsideAngular(() => {
      this.triggeredOnResizeCheck();
    });
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  onResetButton() {
    this.timeSliderService.reset();
  }

  expandAllPathNodes() {
    this.sg4ToggleTrackOccupierService.expandAllPathNode();
  }

  collapseAllPathNodes() {
    this.sg4ToggleTrackOccupierService.collapseAllPathNode();
  }

  allPathNodeClosed(): boolean {
    return this.sg4ToggleTrackOccupierService.allPathNodeClosed();
  }

  onFixZoom(zoom: number) {
    this.timeSliderService.changeZoom(zoom);
  }

  toggleStreckengrafikNameNotFocusNorEnabledButton() {
    this.streckengrafikDisplayElementService.toggleFilterStreckengrafikNameNotFocusNorSelected();
  }

  toggleStreckengrafikTimeNotFocusNorEnabledButton() {
    this.streckengrafikDisplayElementService.toggleFilterStreckengrafikTimeNotFocusNorSelected();
    this.streckengrafikDisplayElementService.toggleTimeSliderVisibility();
  }

  toggleHeadwayBandVisbility() {
    this.streckengrafikDisplayElementService.toggleHeadwayBands();
  }

  toggleRailTrackSliderVisbility() {
    this.streckengrafikDisplayElementService.toggleRailTrackSliderVisibility();
  }

  showTimeSlider(): boolean {
    return this.streckengrafikDisplayElementService.isTimeSliderVisible();
  }

  showRailTrackSlider(): boolean {
    return this.streckengrafikDisplayElementService.isRailTrackSliderVisible();
  }

  getRailTrackliderButtonText(): string {
    if (!this.streckengrafikDisplayElementService.isRailTrackSliderVisible()) {
      return '\u{2610} Streckengleis';
    }
    return '\u{2611} Streckengleis';
  }

  getHeadwayBandButtonText(): string {
    if (!this.streckengrafikDisplayElementService.isHeadwayBandVisible()) {
      return '\u{2610} Zugfolgezeiten';
    }
    return '\u{2611} Zugfolgezeiten';
  }

  getTimeButtonText(): string {
    if (this.streckengrafikDisplayElementService.isFilterStreckengrafikTimeNotFocusNorEnabled()) {
      return '\u{2610} Zeit';
    }
    return '\u{2611} Zeit';
  }

  getNameButtonText(): string {
    if (this.streckengrafikDisplayElementService.isFilterStreckengrafikNameNotFocusNorEnabled()) {
      return '\u{2610} Name';
    }
    return '\u{2611} Name';
  }


  getZoomButtonClassTag(tag: string, zoomFactor: number): string {
    if (zoomFactor === Math.round(this.yZoom * 1000) / 1000) {
      return tag + ' ZoomEqual';
    }
    return tag;
  }

  getStreckengrafikNameNotFocusNorEnabledButtonClassTag(tag: string) {
    if (this.streckengrafikDisplayElementService.isFilterStreckengrafikNameNotFocusNorEnabled()) {
      return tag + ' StreckengrafikNameNotFocusNorEnabled';
    }
    return tag;
  }

  getStreckengrafikTimeNotFocusNorEnabledButtonClassTag(tag: string) {
    if (this.streckengrafikDisplayElementService.isFilterStreckengrafikTimeNotFocusNorEnabled()) {
      return tag + ' StreckengrafikTimeNotFocusNorEnabled';
    }
    return tag;
  }

  getHeadwayVisibleButtonClassTag(tag: string) {
    if (!this.streckengrafikDisplayElementService.isHeadwayBandVisible()) {
      return tag + ' HeadwayBandVisible';
    }
    return tag;
  }

  getRailTrackSliderVisibleButtonClassTag(tag: string) {
    if (!this.streckengrafikDisplayElementService.isRailTrackSliderVisible()) {
      return tag + ' RailTrackSliderVisible';
    }
    return tag;
  }

  @HostListener('window:resize', ['$event'])
  onResize(): void {
    this.updateContentSize();
  }

  updateContentSize(): void {
    StreckengrafikDrawingContext.updateDrawingContainerData();
    const domRect: DOMRect = this.svgRef?.nativeElement?.getBoundingClientRect();
    const doc = document.getElementById('main-streckengrafik-container');
    if (doc !== null) {
      this.render(Math.min(doc.clientWidth - 100, domRect.width),
        Math.min(doc.clientHeight - 40, domRect.height));
    }
  }

  triggeredOnResizeCheck(time: number = 50) {
    interval(time).pipe(takeUntil(this.destroyed$)).subscribe(() => {
      this.onResize();
    });
  }

  toggleDisplayTools() {
    this.disabledDisplayTools = !this.disabledDisplayTools;
  }

  @HostListener('wheel', ['$event'])
  public onScroll(event: WheelEvent) {
    event.preventDefault();
    event.stopImmediatePropagation();
    if (this.pathAlignmentHorizontal) {
      this.timeSliderService.handleWheelZoom(event.offsetY, event.deltaY, event.timeStamp);
    } else {
      this.timeSliderService.handleWheelZoom(event.offsetX, event.deltaY, event.timeStamp);
    }
  }

  private renderViewBox() {
    if (this.pathAlignmentHorizontal) {
      this.viewBox = '0 ' +
        this.sliderChangeInfo.move + ' ' +
        this.viewBoxChangeInfo.width + ' ' +
        this.viewBoxChangeInfo.height;
    } else {
      this.viewBox = ' ' + this.sliderChangeInfo.move + ' ' +
        '0 ' +
        this.viewBoxChangeInfo.width + ' ' +
        this.viewBoxChangeInfo.height;
    }

  }

  private render(width: number, height: number) {
    if (this.oldResizeChangeInfo.width !== width || this.oldResizeChangeInfo.height !== height) {
      this.oldResizeChangeInfo = new ResizeChangeInfo(width, height);
      this.resizeService.resizeChange(this.oldResizeChangeInfo);
    }
  }

}
