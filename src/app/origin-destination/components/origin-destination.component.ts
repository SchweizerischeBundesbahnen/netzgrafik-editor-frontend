import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import * as d3 from "d3";
import {DataService} from "src/app/services/data/data.service";
import {NodeService} from "src/app/services/data/node.service";
import {TrainrunService} from "src/app/services/data/trainrun.service";
import {
  buildEdges,
  computeNeighbors,
  computeShortestPaths,
  topoSort,
} from "../../view/util/origin-destination-graph";

import {Subject} from "rxjs";

type OriginDestination = {
  origin: string;
  destination: string;
  travelTime: string;
  transfert: string;
  totalCost: string;
};
@Component({
  selector: "sbb-origin-destination",
  templateUrl: "./origin-destination.component.html",
  styleUrls: ["./origin-destination.component.scss"],
})
export class OriginDestinationComponent implements OnInit {
  @ViewChild("div") divRef: ElementRef;

  private readonly destroyed$ = new Subject<void>();

  constructor(
    private nodeService: NodeService,
    private dataService: DataService,
    private trainrunService: TrainrunService,
  ) {}

  ngOnInit(): void {
    const originDestinationData = this.originDestinationData();
    const nodes = this.nodeService.getNodes();
    const nodeNames = nodes.map((node) => node.getBetriebspunktName());
    this.renderMatriceOD(originDestinationData, nodeNames);
  }

  private originDestinationData(): OriginDestination[] {
    // Duration of the schedule to consider (in minutes).
    // TODO: ideally this would be 24 hours, but performance is a concern.
    // One idea to optimize would be to consider the minimum time window before the schedule repeats (LCM).
    // Draft here: https://colab.research.google.com/drive/1Z1r2uU2pgffWxCbG_wt2zoLStZKzWleE#scrollTo=F6vOevK6znee
    const timeLimit = 16 * 60;

    const metadata = this.dataService.getNetzgrafikDto().metadata;
    // The cost to add for each connection.
    const connectionPenalty =
      metadata.analyticsSettings.originDestinationSettings.connectionPenalty;
    const nodes = this.nodeService.getNodes();
    const selectedNodes = this.nodeService.getSelectedNodes();
    const odNodes =
      selectedNodes.length > 0
        ? selectedNodes
        : this.nodeService.getVisibleNodes();
    const trainruns = this.trainrunService.getVisibleTrainruns();

    const edges = buildEdges(
      nodes,
      odNodes,
      trainruns,
      connectionPenalty,
      this.trainrunService,
      timeLimit,
    );

    const neighbors = computeNeighbors(edges);
    const vertices = topoSort(neighbors);
    // In theory we could parallelize the pathfindings, but the overhead might be too big.
    const res = new Map<string, [number, number]>();
    odNodes.forEach((origin) => {
      computeShortestPaths(origin.getId(), neighbors, vertices).forEach(
        (value, key) => {
          res.set([origin.getId(), key].join(","), value);
        },
      );
    });

    const rows = [];
    odNodes.sort((a, b) =>
      a.getBetriebspunktName().localeCompare(b.getBetriebspunktName()),
    );
    odNodes.forEach((origin) => {
      odNodes.forEach((destination) => {
        if (origin.getId() === destination.getId()) {
          return;
        }
        const costs = res.get([origin.getId(), destination.getId()].join(","));
        if (costs === undefined) {
          // Keep empty if no path is found.
          rows.push({
            origin: origin.getBetriebspunktName(),
            destination: destination.getBetriebspunktName(),
            travelTime: "",
            transfert: "",
            totalCost: "",
          });
          return;
        }
        const [totalCost, connections] = costs;
        const row = {
          origin: origin.getBetriebspunktName(),
          destination: destination.getBetriebspunktName(),
          travelTime: (totalCost - connections * connectionPenalty).toString(),
          transfert: connections.toString(),
          totalCost: totalCost.toString(),
        };
        rows.push(row);
      });
    });

    return rows;
  }

  renderMatriceOD(
    originDestinationData: OriginDestination[],
    nodeNames: string[],
  ) {
    // set the dimensions and margins of the graph
    const margin = {top: 80, right: 25, bottom: 30, left: 40},
      width = 450 - margin.left - margin.right,
      height = 450 - margin.top - margin.bottom;

    const {height: parentElementHeight, width: parentElementWidth} = d3
      .select("#main-origin-destination-container-root")
      .node()
      .getBoundingClientRect();

    // append the svg object to the body of the page
    const svg = d3
      .select("#main-origin-destination-container-root")
      .append("svg")
      .attr("id", "main-origin-destination-container")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`);

    // Build X scales and axis:
    const x = d3.scaleBand().range([0, width]).domain(nodeNames).padding(0.05);
    svg
      .append("g")
      .style("font-size", 15)
      .attr("transform", "translate(0, -20)")
      .call(d3.axisBottom(x).tickSize(0))
      .select(".domain")
      .remove();

    // Build Y scales and axis:
    const y = d3
      .scaleBand()
      .range([height, 0])
      .domain(nodeNames.reverse())
      .padding(0.05);
    svg
      .append("g")
      .style("font-size", 15)
      .call(d3.axisLeft(y).tickSize(0))
      .select(".domain")
      .remove();

    // Build color scale
    const myColor = d3
      .scaleSequential()
      .interpolator(d3.interpolateInferno)
      .domain([1, 50]);

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
      .style("padding", "5px");

    // Three function that change the tooltip when user hover / move / leave a cell
    const mouseover = function (d) {
      tooltip.style("opacity", 1);
      d3.select(this).style("stroke", "black").style("opacity", 1);
    };

    const totalCostTranslation = $localize`:@@app.origin-destination.tooltip.total-cost:Total cost`;
    const transfersTranslation = $localize`:@@app.origin-destination.tooltip.transfers:Transfers`;
    const travelTimeTranslation = $localize`:@@app.origin-destination.tooltip.travel-time:Travel time`;

    const mousemove = function (d) {
      tooltip
        .html(
          `${travelTimeTranslation}: ${d.travelTime}<br>${transfersTranslation}: ${d.transfert}<br>${totalCostTranslation}: ${d.totalCost}`,
        )
        .style("left", d3.mouse(this)[0] + 70 + "px")
        .style("top", d3.mouse(this)[1] + "px");
    };

    const mouseleave = function (d) {
      tooltip.style("opacity", 0);
      d3.select(this).style("stroke", "none").style("opacity", 0.8);
    };

    // add the squares
    svg
      .selectAll()
      .data(originDestinationData)
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
      .style("fill", function (d) {
        return myColor(+d.totalCost);
      })
      .style("stroke-width", 4)
      .style("stroke", "none")
      .style("opacity", 0.8)
      .on("mouseover", mouseover)
      .on("mousemove", mousemove)
      .on("mouseleave", mouseleave);

    svg
      .selectAll()
      .data(originDestinationData)
      .enter()
      .append("text")
      .attr("x", (d) => {
        return x(d.origin) + x.bandwidth() / 2;
      })
      .attr("y", function (d) {
        return y(d.destination) + y.bandwidth() / 2;
      })
      .text((d) => d.travelTime)
      .style("text-anchor", "middle")
      .style("alignment-baseline", "middle")
      .style("font-size", "10px")
      .style("fill", "white");
  }
}
