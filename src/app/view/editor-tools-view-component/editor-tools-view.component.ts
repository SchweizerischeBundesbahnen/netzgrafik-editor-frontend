import {parse, ParseResult} from "papaparse";
import {Component, ElementRef, ViewChild} from "@angular/core";
import * as svg from "save-svg-as-png";
import {DataService} from "../../services/data/data.service";
import {TrainrunService} from "../../services/data/trainrun.service";
import {NodeService} from "../../services/data/node.service";
import {FilterService} from "../../services/ui/filter.service";
import {TrainrunSectionService} from "../../services/data/trainrunsection.service";
import {UiInteractionService} from "../../services/ui/ui.interaction.service";
import {StammdatenService} from "../../services/data/stammdaten.service";
import {LogService} from "../../logger/log.service";
import {VersionControlService} from "../../services/data/version-control.service";
import {
  HaltezeitFachCategories,
  NetzgrafikDto,
  TrainrunCategoryHaltezeit,
} from "../../data-structures/business.data.structures";
import {downloadBlob} from "../util/download-utils";
import {map} from "rxjs/operators";
import {LabelService} from "../../services/data/label.serivce";
import {NetzgrafikColoringService} from "../../services/data/netzgrafikColoring.service";
import {ViewportCullService} from "../../services/ui/viewport.cull.service";
import {LevelOfDetailService} from "../../services/ui/level.of.detail.service";

@Component({
  selector: "sbb-editor-tools-view-component",
  templateUrl: "./editor-tools-view.component.html",
  styleUrls: ["./editor-tools-view.component.scss"],
})
export class EditorToolsViewComponent {
  @ViewChild("stammdatenFileInput", {static: false})
  stammdatenFileInput: ElementRef;
  @ViewChild("netgrafikJsonFileInput", {static: false})
  netgrafikJsonFileInput: ElementRef;

  public isDeletable$ = this.versionControlService.variant$.pipe(
    map((v) => v?.isDeletable),
  );
  public isWritable$ = this.versionControlService.variant$.pipe(
    map((v) => v?.isWritable),
  );

  constructor(
    private dataService: DataService,
    private trainrunService: TrainrunService,
    private nodeService: NodeService,
    public filterService: FilterService,
    private trainrunSectionService: TrainrunSectionService,
    private uiInteractionService: UiInteractionService,
    private stammdatenService: StammdatenService,
    private labelService: LabelService,
    private logger: LogService,
    private versionControlService: VersionControlService,
    private netzgrafikColoringService: NetzgrafikColoringService,
    private viewportCullService: ViewportCullService,
    private levelOfDetailService: LevelOfDetailService,
  ) {
  }

  onLoadButton() {
    this.netgrafikJsonFileInput.nativeElement.click();
  }

  onLoad(param) {
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
        this.logger.log("onLoad; load netzgrafik: ", netzgrafikDto);
        this.uiInteractionService.showNetzgrafik();
        this.uiInteractionService.closeNodeStammdaten();
        this.uiInteractionService.closePerlenkette();
        this.nodeService.unselectAllNodes();
        this.dataService.loadNetzgrafikDto(netzgrafikDto);
        this.uiInteractionService.viewportCenteringOnNodesBoundingBox();
      }
    };
    reader.readAsText(file);

    // set the event target value to null in order to be able to load the same file multiple times after one another
    param.target.value = null;
  }

  onSave() {
    const data: NetzgrafikDto = this.dataService.getNetzgrafikDto();
    const blob = new Blob([JSON.stringify(data)], {type: "application/json"});
    downloadBlob(blob, $localize`:@@app.view.editor-side-view.editor-tools-view-component.netzgrafikFile:netzgrafik` + ".json");
  }

  onExportNetzgrafikSVG() {
    // option 2: save svg as svg
    // https://www.npmjs.com/package/save-svg-as-png
    this.levelOfDetailService.disableLevelOfDetailRendering();
    this.viewportCullService.onViewportChangeUpdateRendering(false);

    const containerInfo = this.getContainertoExport();
    svg
      .svgAsDataUri(
        containerInfo.documentToExport,
        containerInfo.exportParameter,
      )
      .then((uri) => {
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.href = uri;
        a.download = $localize`:@@app.view.editor-side-view.editor-tools-view-component.netzgrafikFile:netzgrafik` + ".svg";
        a.click();
        URL.revokeObjectURL(a.href);
        a.remove();
        containerInfo.documentToExport.setAttribute(
          "style",
          containerInfo.documentSavedStyle,
        );
        this.levelOfDetailService.enableLevelOfDetailRendering();
      });
  }

  onPrintNetzgrafik() {
    this.uiInteractionService.closeFilter();
    this.uiInteractionService.print();
  }

  onExportNetzgrafikPNG() {
    // option 1: save svg as png
    // https://www.npmjs.com/package/save-svg-as-png
    this.levelOfDetailService.disableLevelOfDetailRendering();
    this.viewportCullService.onViewportChangeUpdateRendering(false);

    const containerInfo = this.getContainertoExport();
    svg.saveSvgAsPng(
      containerInfo.documentToExport,
      $localize`:@@app.view.editor-side-view.editor-tools-view-component.netzgrafikFile:netzgrafik` + ".png",
      containerInfo.exportParameter,
    );
    //containerInfo.documentToExport.setAttribute('style', containerInfo.documentSavedStyle);
    this.levelOfDetailService.enableLevelOfDetailRendering();
  }

  onLoadStammdatenButton() {
    this.stammdatenFileInput.nativeElement.click();
  }

  onLoadStammdaten(param) {
    const file = param.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const finalResult: ParseResult = parse(reader.result.toString(), {
        header: true,
      });
      this.stammdatenService.setStammdaten(finalResult.data);
    };
    reader.readAsText(file);

    // set the event target value to null in order to be able to load the same file multiple times after one another
    param.target.value = null;
  }

  onExportStammdaten() {
    const filename = $localize`:@@app.view.editor-side-view.editor-tools-view-component.baseDataFile:baseData` + ".csv";
    const csvData = this.convertToStammdatenCSV();
    this.onExport(filename, csvData);
  }

  onExportZuglauf() {
    const filename = $localize`:@@app.view.editor-side-view.editor-tools-view-component.trainrunFile:trainrun` + ".csv";
    const csvData = this.convertToZuglaufCSV();
    this.onExport(filename, csvData);
  }

  onExport(filename: string, csvData: string) {
    const blob = new Blob([csvData], {
      type: "text/csv",
    });
    const url = window.URL.createObjectURL(blob);

    const nav = window.navigator as any;
    if (nav.msSaveOrOpenBlob) {
      nav.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  private convertToStammdatenCSV(): string {
    const separator = ";";
    const comma = ",";

    const headers: string[] = [];
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.bp:BP`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.station:Station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.category:category`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.passengerConnectionTimeA:Passenger_connection_time_A`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.passengerConnectionTimeB:Passenger_connection_time_B`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.passengerConnectionTimeC:Passenger_connection_time_C`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.passengerConnectionTimeD:Passenger_connection_time_D`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.ZAZ:ZAZ`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.transferTime:Transfer_time`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.labels:Labels`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.X:X`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.Y:Y`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.create:Create`);

    const contentData: string[] = [];
    contentData.push(headers.join(separator));
    this.nodeService.getNodes().forEach((nodeElement) => {
      const trainrunCategoryHaltezeit: TrainrunCategoryHaltezeit =
        nodeElement.getTrainrunCategoryHaltezeit();
      const stammdaten = this.stammdatenService.getBPStammdaten(
        nodeElement.getBetriebspunktName(),
      );
      const zaz = stammdaten !== null ? stammdaten.getZAZ() : 0;
      const erstellen = stammdaten !== null ? stammdaten.getErstellen() : "JA";
      const kategorien = stammdaten !== null ? stammdaten.getKategorien() : [];
      const regions = stammdaten !== null ? stammdaten.getRegions() : [];

      const row: string[] = [];
      row.push(nodeElement.getBetriebspunktName());
      row.push(nodeElement.getFullName());
      row.push(kategorien.map((kat) => "" + kat).join(comma));
      row.push(regions.map((reg) => "" + reg).join(comma));
      row.push(
        "" +
        (trainrunCategoryHaltezeit[HaltezeitFachCategories.IPV].no_halt
          ? 0
          : trainrunCategoryHaltezeit[HaltezeitFachCategories.IPV].haltezeit -
          zaz),
      );
      row.push(
        "" +
        (trainrunCategoryHaltezeit[HaltezeitFachCategories.A].no_halt
          ? 0
          : trainrunCategoryHaltezeit[HaltezeitFachCategories.A].haltezeit -
          zaz),
      );
      row.push(
        "" +
        (trainrunCategoryHaltezeit[HaltezeitFachCategories.B].no_halt
          ? 0
          : trainrunCategoryHaltezeit[HaltezeitFachCategories.B].haltezeit -
          zaz),
      );
      row.push(
        "" +
        (trainrunCategoryHaltezeit[HaltezeitFachCategories.C].no_halt
          ? 0
          : trainrunCategoryHaltezeit[HaltezeitFachCategories.C].haltezeit -
          zaz),
      );
      row.push(
        "" +
        (trainrunCategoryHaltezeit[HaltezeitFachCategories.D].no_halt
          ? 0
          : trainrunCategoryHaltezeit[HaltezeitFachCategories.D].haltezeit -
          zaz),
      );
      row.push("" + zaz);
      row.push("" + nodeElement.getConnectionTime());
      row.push(
        nodeElement
          .getLabelIds()
          .map((labelID) => {
            const labelOfInterest = this.labelService.getLabelFromId(labelID);
            if (labelOfInterest !== undefined) {
              return labelOfInterest.getLabel();
            }
            return "";
          })
          .join(comma),
      );
      row.push("" + nodeElement.getPositionX());
      row.push("" + nodeElement.getPositionY());
      row.push(erstellen);
      contentData.push(row.join(separator));
    });
    return contentData.join("\n");
  }

  private getContainertoExport() {
    let htmlElementToExport = document.getElementById(
      "main-streckengrafik-container",
    );
    let param = {};
    console.log("Try -1- (main-streckengrafik-container): ", htmlElementToExport !== null);

    if (htmlElementToExport === null) {
      htmlElementToExport = document.getElementById("graphContainer");
      console.log("Try -2- (graphContainer): ", htmlElementToExport !== null);

      const boundingBox = this.nodeService.getNetzgrafikBoundingBox();
      param = {
        encoderOptions: 1.0,
        scale: 2.0,
        left: boundingBox.minCoordX - 32,
        top: boundingBox.minCoordY - 32,
        width: boundingBox.maxCoordX - boundingBox.minCoordX + 64,
        height: boundingBox.maxCoordY - boundingBox.minCoordY + 64,
        backgroundColor:
        this.uiInteractionService.getActiveTheme().backgroundColor,
      };
    } else {
      param = {
        encoderOptions: 1.0,
        scale: 1.0,
        left: htmlElementToExport.offsetWidth / 3,
        top: 80,
        width: htmlElementToExport.offsetWidth,
        height: htmlElementToExport.offsetHeight,
        backgroundColor:
        this.uiInteractionService.getActiveTheme().backgroundColor,
      };
    }
    const oldStyle = htmlElementToExport.getAttribute("style");
    const htmlsTagCollection = document.getElementsByTagName("html");
    if (htmlsTagCollection.length > 0) {
      const htmlRoot = htmlsTagCollection[0];
      htmlElementToExport.setAttribute("style", htmlRoot.getAttribute("style"));

      const styles = this.netzgrafikColoringService.generateGlobalStyles(
        this.dataService.getTrainrunCategories(),
        this.trainrunSectionService.getTrainrunSections(),
      );

      styles.forEach((s) => {
        const docStyles = htmlRoot.ownerDocument.styleSheets;
        for (let i = 0; i < s.cssRules.length; i++) {
          htmlRoot.ownerDocument.styleSheets[docStyles.length - 1].insertRule(
            s.cssRules[i].cssText,
          );
        }
      });
    }
    return {
      documentToExport: htmlElementToExport,
      exportParameter: param,
      documentSavedStyle: oldStyle,
    };
  }

  private convertToZuglaufCSV(): string {
    const separator = ";";
    const comma = ",";
    const contentData: string[] = [];
    const headers: string[] = [];
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.trainCategory:Train category`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.trainName:Train name`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.startStation:Start station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.destinationStation:Destination station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.trafficPeriod:Traffic period`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.frequence:Frequence`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.departureMinuteAtStart:Minute of departure at start node`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.travelTimeStartDestination:Travel time start-destination`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.arrivalMinuteAtDestination:Arrival minute at destination node`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.turnaroundTimeDestination:Turnaround time at destination station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.departureMinuteDeparture:Departure minute at destination node`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.travelTimeDestinationStart:Travel time destination-start`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.arrivalMinuteAtStart:Arrival minute at start node`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.turnaroundTimeStart:Turnaround time at start station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.turnaroundTime:Turnaround time`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.labels:Labels`);

    contentData.push(headers.join(separator));
    this.trainrunService
      .getTrainruns()
      .filter((trainrun) => this.filterService.filterTrainrun(trainrun))
      .forEach((trainrun) => {
        let startBetriebspunktName = "";
        let endBetriebspunktName = "";

        // Retrieve start -> end with:
        // start {startNode, startTrainrunSection}
        // end {iterator.current.node, iterator.current.trainrunSection}
        const startNode = this.trainrunService.getStartNodeWithTrainrunId(trainrun.getId());
        const startTrainrunSection = startNode.getStartTrainrunSection(trainrun.getId());
        const iterator = this.trainrunService.getIterator(startNode, startTrainrunSection);
        while (iterator.hasNext()) {
          iterator.next();
        }

        startBetriebspunktName = startNode.getBetriebspunktName();
        endBetriebspunktName = iterator.current().node.getBetriebspunktName();
        const departureTimeAtStart = startTrainrunSection.getSourceNodeId() === startNode.getId() ?
          startTrainrunSection.getSourceDepartureConsecutiveTime() :
          startTrainrunSection.getTargetDepartureConsecutiveTime();
        const arrivalTimeAtEnd = iterator.current().trainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
          iterator.current().trainrunSection.getSourceArrivalConsecutiveTime() :
          iterator.current().trainrunSection.getTargetArrivalConsecutiveTime();
        const travelTime = arrivalTimeAtEnd - departureTimeAtStart;

        const startNodeDeparture = startTrainrunSection.getSourceNodeId() === startNode.getId() ?
          startTrainrunSection.getSourceDeparture() :
          startTrainrunSection.getTargetDeparture();
        const endNodeArrival = iterator.current().trainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
          iterator.current().trainrunSection.getSourceArrival() :
          iterator.current().trainrunSection.getTargetArrival();

        const endNodeDeparture = iterator.current().trainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
          iterator.current().trainrunSection.getSourceDeparture() :
          iterator.current().trainrunSection.getTargetDeparture();
        const startNodeArrival = startTrainrunSection.getSourceNodeId() === startNode.getId() ?
          startTrainrunSection.getSourceArrival() :
          startTrainrunSection.getTargetArrival();

        let waitingTimeOnStartStation = startNodeDeparture - startNodeArrival;
        let waitingTimeOnEndStation = endNodeDeparture - endNodeArrival;

        if (trainrun.getFrequency() > 60) {
          // special case - if the freq is bigger than 60min (1h) - then just mirror
          waitingTimeOnStartStation = 2.0 * (trainrun.getFrequency() / 2.0 - startNodeArrival);
          waitingTimeOnEndStation = 2.0 * (trainrun.getFrequency() / 2.0 - endNodeArrival);
        } else {
          // find next freq (departing)
          while (waitingTimeOnStartStation < 0) {
            waitingTimeOnStartStation += trainrun.getFrequency();
          }
          while (waitingTimeOnEndStation < 0) {
            waitingTimeOnEndStation += trainrun.getFrequency();
          }
        }

        if (trainrun.getFrequency() < 60) {
          waitingTimeOnEndStation =
            waitingTimeOnEndStation % trainrun.getFrequency();
          waitingTimeOnStartStation =
            waitingTimeOnStartStation % trainrun.getFrequency();
        }

        const timeOfCirculation =
          travelTime +
          waitingTimeOnEndStation +
          travelTime +
          waitingTimeOnStartStation;
        const row: string[] = [];
        row.push(trainrun.getTrainrunCategory().shortName.trim());
        row.push(trainrun.getTitle().trim());
        row.push(startBetriebspunktName.trim());
        row.push(endBetriebspunktName.trim());
        row.push("Verkehrt: " + trainrun.getTrainrunTimeCategory().shortName.trim());
        row.push("" + trainrun.getTrainrunFrequency().shortName.trim());
        row.push("" + startNodeDeparture);
        row.push("" + travelTime);
        row.push("" + endNodeArrival);
        row.push("" + waitingTimeOnEndStation);
        row.push("" + endNodeDeparture);
        row.push("" + travelTime);
        row.push("" + startNodeArrival);
        row.push("" + waitingTimeOnStartStation);
        row.push("" + timeOfCirculation);
        row.push(
          trainrun
            .getLabelIds()
            .map((labelID) => {
                const label = this.labelService.getLabelFromId(labelID);
                if (label) {
                  return label.getLabel().trim();
                }
                return "";
              }
            )
            .join(comma),
        );

        contentData.push(row.join(separator));
      });
    return contentData.join("\n");
  }
}
