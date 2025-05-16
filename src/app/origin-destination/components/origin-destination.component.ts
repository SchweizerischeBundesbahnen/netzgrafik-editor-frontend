import {OriginDestinationService} from "./../../services/data/origin-destination.service";
import {
  Component,
  ElementRef,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from "@angular/core";
import * as d3 from "d3";
import {NodeService} from "src/app/services/data/node.service";
import {UiInteractionService} from "../../services/ui/ui.interaction.service";

import {Subject, takeUntil} from "rxjs";
import {
  SVGMouseController,
  SVGMouseControllerObserver,
} from "src/app/view/util/svg.mouse.controller";
import {ViewboxProperties} from "src/app/services/ui/ui.interaction.service";
import {Vec2D} from "src/app/utils/vec2D";
import {OriginDestination} from "src/app/services/data/origin-destination.service";

@Component({
  selector: "sbb-origin-destination",
  templateUrl: "./origin-destination.component.html",
  styleUrls: ["./origin-destination.component.scss"],
})
export class OriginDestinationComponent implements OnInit, OnDestroy {
  @ViewChild("div") divRef: ElementRef;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    private nodeService: NodeService,
    private origineDestinationService: OriginDestinationService,
    private uiInteractionService: UiInteractionService,
  ) {}

  private matrixData: OriginDestination[] = [];

  private colorScale: d3.ScaleLinear<string, string>;

  private controller: SVGMouseController;
  colorBy: "totalCost" | "travelTime" | "transfer" = "totalCost";
  displayBy: "totalCost" | "travelTime" | "transfer" = "totalCost";

  private extractNumericODValues(
    odList: OriginDestination[],
    field: "totalCost" | "travelTime" | "transfer",
  ): number[] {
    return odList.map((od) => parseFloat(od[field])).filter((v) => !isNaN(v));
  }

  private renderView() {
    const nodes = this.origineDestinationService.getODOutputNodes();
    const nodeNames = nodes.map((node) => node.getBetriebspunktName());

    this.rendermatrixOD(nodeNames);

    this.controller = new SVGMouseController(
      "main-origin-destination-container",
      this.createSvgMouseControllerObserver(),
    );
    this.controller.init(this.createInitialViewboxProperties());
  }

  ngOnInit(): void {
    this.matrixData = this.origineDestinationService.originDestinationData();
    this.renderView();

    this.uiInteractionService.zoomInObservable
      .pipe(takeUntil(this.destroyed$))
      .subscribe((zoomCenter: Vec2D) => this.controller.zoomIn(zoomCenter));

    this.uiInteractionService.zoomOutObservable
      .pipe(takeUntil(this.destroyed$))
      .subscribe((zoomCenter: Vec2D) => this.controller.zoomOut(zoomCenter));
  }

  rendermatrixOD(nodeNames: string[]) {
    // set the dimensions and margins of the graph
    const margin = {top: 80, right: 0, bottom: 30, left: 20};
    const cellSize = 30;

    const width = cellSize * nodeNames.length;
    const height = cellSize * nodeNames.length;

    // append the svg object to the body of the page
    const svg = d3
      .select("#main-origin-destination-container-root")
      .append("svg")
      .attr("id", "main-origin-destination-container")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .attr(
        "viewBox",
        `0 0 ${width + margin.left + margin.right} ${height + margin.top + margin.bottom}`,
      );

    const containerGroup = svg
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    const graphContentGroup = containerGroup
      .append("g")
      .attr("id", "zoom-group");

    // Build X scales and axis:
    const x = d3.scaleBand().range([0, width]).domain(nodeNames).padding(0.05);

    graphContentGroup
      .append("g")
      .style("pointer-events", "none")
      .style("font-size", 15)
      .attr("transform", "translate(0, -20)")
      .call(d3.axisBottom(x).tickSize(0))
      .style("user-select", "none")
      .call((g) =>
        g
          .selectAll("text")
          .style("text-anchor", "start")
          .attr("dx", "-0.8em")
          .attr("dy", "0.4em")
          .attr("transform", "rotate(-45)")
          .style("user-select", "none"),
      )
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(nodeNames.reverse())
      .padding(0.05);
    graphContentGroup
      .append("g")
      .style("pointer-events", "none")
      .style("font-size", 14)
      .call(d3.axisLeft(y).tickSize(0))
      .style("user-select", "none")
      .select(".domain")
      .remove();

    const numericValues = this.extractNumericODValues(
      this.matrixData,
      this.colorBy,
    );
    const maxValue = numericValues.length ? Math.max(...numericValues) : 1;
    const minValue = numericValues.length ? Math.min(...numericValues) : 0;
    this.colorScale = this.getColorScale(minValue, maxValue);

    // create a tooltip
    const tooltip = d3
      .select("#main-origin-destination-container-root")
      .append("div")
      .style("opacity", 0)
      .attr("class", "tooltip")
      .style("background-color", "white")
      .style("border", "solid")
      .style("border-width", "2px")
      .style("border-radius", "5px")
      .style("padding", "5px")
      .style("user-select", "none")
      .style("pointer-events", "none");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      tooltip.style("opacity", 1);
      d3.select(this)
        .style("stroke", "black")
        .style("stroke-width", "2px")
        .style("opacity", 1);
    };

    const totalCostTranslation = $localize`:@@app.origin-destination.tooltip.total-cost:Total cost`;
    const transfersTranslation = $localize`:@@app.origin-destination.tooltip.transfers:Transfers`;
    const travelTimeTranslation = $localize`:@@app.origin-destination.tooltip.travel-time:Travel time`;

    const mousemove = function (d) {
      tooltip
        .html(
          `${d.origin} &#x2192; ${d.destination}<br><hr> ${travelTimeTranslation}: ${d.travelTime}<br>${transfersTranslation}: ${d.transfer}<br>${totalCostTranslation}: ${d.totalCost}`,
        )
        .style("left", `${d3.event.offsetX + 64}px`)
        .style(
          "top",
          `${d3.event.offsetY + 64 < 0 ? 0 : d3.event.offsetY + 64}px`,
        );
    };

    const mouseleave = function (d) {
      tooltip.style("opacity", 0);
      d3.select(this).style("stroke", "none").style("opacity", 0.8);
    };

    // add the squares
    graphContentGroup
      .selectAll()
      .data(this.matrixData)
      .enter()
      .append("rect")
      .attr("x", (d: OriginDestination) => {
        return x(d.origin);
      })
      .attr("y", function (d: OriginDestination) {
        return y(d.destination);
      })
      .attr("rx", 4)
      .attr("ry", 4)
      .attr("width", x.bandwidth())
      .attr("height", y.bandwidth())

      .style("fill", (d) => this.getCellColor(d))

      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    graphContentGroup
      .selectAll()
      .data(this.matrixData)
      .enter()
      .append("text")
      .style("pointer-events", "none")
      .attr("x", (d) => {
        return x(d.origin) + x.bandwidth() / 2;
      })
      .attr("y", function (d) {
        return y(d.destination) + y.bandwidth() / 2;
      })
      .text((d) => this.getCellText(d))
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .style("font-size", "10px")
      .style("pointer-events", "none")
      .style("user-select", "none")
      .style("fill", "white");
  }

  @HostListener("wheel", ["$event"])
  public onScroll(event: WheelEvent) {
    console.log("event", event);
  }

  private createSvgMouseControllerObserver(): SVGMouseControllerObserver {
    return {
      onEarlyReturnFromMousemove: () => false,
      onGraphContainerMouseup: () => {},
      zoomFactorChanged: (zoomFactor) => {
        this.uiInteractionService.zoomFactorChanged(zoomFactor);
      },
      onViewboxChanged: (viewboxProperties) => {
        const svg = d3.select("#main-origin-destination-container");
        svg.attr(
          "viewBox",
          `${viewboxProperties.panZoomLeft} ${viewboxProperties.panZoomTop} ${viewboxProperties.panZoomWidth} ${viewboxProperties.panZoomHeight}`,
        );
      },
      onStartMultiSelect: () => {},
      updateMultiSelect: () => {},
      onEndMultiSelect: () => {},
      onScaleNetzgrafik: () => {},
    };
  }

  private createInitialViewboxProperties(): ViewboxProperties {
    return {
      zoomFactor: 100,
      origWidth: 1000,
      origHeight: 1000,
      panZoomLeft: 0,
      panZoomTop: 0,
      panZoomWidth: 1000,
      panZoomHeight: 1000,
      currentViewBox: null,
    };
  }

  private getCellValue(d: OriginDestination, field: string): number {
    return parseFloat(String(d[field]));
  }

  private getCellColor(d: OriginDestination): string {
    const value = this.getCellValue(d, this.colorBy);
    return isNaN(value) ? "#76767633" : this.colorScale(value);
  }

  private getCellText(d: OriginDestination): string {
    const value = this.getCellValue(d, this.displayBy);
    return isNaN(value) ? "" : value.toString();
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.destroyed$.complete();
  }

  colorSetName: "custom" | "blue" | "orange" | "gray" = "custom";

  getColorScale(min: number, max: number): d3.ScaleLinear<string, string> {
    const d1 = min + (max - min) * 0.33;
    const d2 = min + (max - min) * 0.66;
    switch (this.colorSetName) {
      case "custom":
        return d3
          .scaleLinear<string>()
          .domain([min, d1, d2, max])
          .range(["#2166AC", "#67A9CF", "#FDAE61", "#B2182B"])
          .clamp(true);

      case "gray":
        return d3
          .scaleLinear<string>()
          .domain([min, d1, d2, max])
          .range(["#CCCCCC", "#999999", "#666666", "#333333"])
          .clamp(true);
      case "blue":
        return d3
          .scaleLinear<string>()
          .domain([min, d1, d2, max])
          .range(["#003366", "#00A3E0", "#FDAE61", "#E60000"])
          .clamp(true);
      case "orange":
        return d3
          .scaleLinear<string>()
          .domain([min, d1, d2, max])
          .range(["#4CAF50", "#FFCA28", "#F57C00", "#C60018"])
          .clamp(true);
      default:
        return d3
          .scaleLinear<string>()
          .domain([min, d1, d2, max])
          .range(["#003366", "#00A3E0", "#FDAE61", "#E60000"])
          .clamp(true);
    }
  }

  onChangePalette(name: "custom" | "blue" | "orange" | "gray") {
    this.colorSetName = name;
    d3.select("#main-origin-destination-container").remove();
    this.renderView();
  }

  onChangeColorBy(field: "transfer" | "totalCost" | "travelTime") {
    this.colorBy = field;
    d3.select("#main-origin-destination-container").remove();
    this.renderView();
  }

  public onChangeDisplayBy(field: "transfer" | "totalCost" | "travelTime") {
    this.displayBy = field;
    d3.select("#main-origin-destination-container").remove();
    this.renderView();
  }
}
