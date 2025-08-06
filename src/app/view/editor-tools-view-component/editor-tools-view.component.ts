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
  NodeDto,
  TrainrunCategoryHaltezeit,
  TrainrunSectionDto,
} from "../../data-structures/business.data.structures";
import {downloadBlob} from "../util/download-utils";
import {map} from "rxjs/operators";
import {LabelService} from "../../services/data/label.service";
import {NetzgrafikColoringService} from "../../services/data/netzgrafikColoring.service";
import {ViewportCullService} from "../../services/ui/viewport.cull.service";
import {LevelOfDetailService} from "../../services/ui/level.of.detail.service";
import {TrainrunSectionValidator} from "../../services/util/trainrunsection.validator";
import {OriginDestinationService} from "src/app/services/analytics/origin-destination/components/origin-destination.service";
import {EditorMode} from "../editor-menu/editor-mode";
import {GeneralViewFunctions} from "../util/generalViewFunctions";
import {TrainrunSection} from "../../models/trainrunsection.model";

interface ContainertoExportData {
  documentToExport: HTMLElement;
  exportParameter: any;
  documentSavedStyle: string;
}

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
    private originDestinationService: OriginDestinationService,
  ) {
  }

  onLoadButton() {
    this.netgrafikJsonFileInput.nativeElement.click();
  }

  onLoad(param) {
    const file = param.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      let netzgrafikDto: any;
      try {
        netzgrafikDto = JSON.parse(reader.result.toString());
      } catch (err: any) {
        const msg = $localize`:@@app.view.editor-side-view.editor-tools-view-component.import-netzgrafik-error:JSON error`;
        this.logger.error(msg);
        return;
      }

      if (netzgrafikDto === undefined) {
        const msg = $localize`:@@app.view.editor-side-view.editor-tools-view-component.import-netzgrafik-error:JSON error`;
        this.logger.error(msg);
        return;
      }

      if (
        "nodes" in netzgrafikDto &&
        "trainrunSections" in netzgrafikDto &&
        "trainruns" in netzgrafikDto &&
        "resources" in netzgrafikDto &&
        "metadata" in netzgrafikDto
      ) {
        this.processNetzgrafikJSON(netzgrafikDto);
        return;
      }

      const msg = $localize`:@@app.view.editor-side-view.editor-tools-view-component.import-netzgrafik-error:JSON error`;
      this.logger.error(msg);
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

  onExportContainerAsSVG() {
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
        a.download = this.getFilenameToExport() + ".svg";
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

  onPrintContainer() {
    this.uiInteractionService.closeFilter();
    setTimeout(() => {
      this.uiInteractionService.print();
    }, 1500); // to allow cd-layout-filter to close
  }

  onExportContainerAsPNG() {
    // option 1: save svg as png
    // https://www.npmjs.com/package/save-svg-as-png
    this.levelOfDetailService.disableLevelOfDetailRendering();
    this.viewportCullService.onViewportChangeUpdateRendering(false);

    const containerInfo = this.getContainertoExport();
    svg.saveSvgAsPng(
      containerInfo.documentToExport,
      this.getFilenameToExport() + ".png",
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

  onTrainrunDetailDataAsCSVData() {
    const filename = $localize`:@@app.view.editor-side-view.editor-tools-view-component.trainrunExportFile:trainrunExportFile` + ".csv";
    const csvData = this.createTrainrunDetailDataAsCSVData();
    this.onExport(filename, csvData);
  }

  onExportOriginDestination() {
    const filename = $localize`:@@app.view.editor-side-view.editor-tools-view-component.originDestinationFile:originDestination` + ".csv";
    const csvData = this.convertToOriginDestinationCSV();
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


  getVariantIsWritable() {
    return this.versionControlService.getVariantIsWritable();
  }

  getContainerName() {
    const editorMode = this.uiInteractionService.getEditorMode();
    switch (editorMode) {
      case EditorMode.StreckengrafikEditing:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.spaceTimeChart:Space-time chart`;
      case EditorMode.OriginDestination:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.originDestination:Origin-destination matrix`;
      default:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.netzgrafik:Netzgrafik`;
    }
  }

  private buildCSVString(headers: string[], rows: string[][]): string {
    const separator = ";";

    const contentData: string[] = [];
    contentData.push(headers.join(separator));
    rows.forEach((row) => {
      contentData.push(row.join(separator));
    });
    return contentData.join("\n");
  }

  private convertToStammdatenCSV(): string {
    const comma = ",";

    const headers: string[] = [];
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.bp:BP`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.station:Station`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.category:category`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.region:Region`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.passengerConnectionTimeIPV:passengerConnectionTimeIPV`);
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

    const rows: string[][] = [];
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
      rows.push(row);
    });
    return this.buildCSVString(headers, rows);
  }

  private getContainertoExport(): ContainertoExportData {
    let htmlElementToExport: HTMLElement | null = null;
    let param = {};

    const editorMode = this.uiInteractionService.getEditorMode();

    switch (editorMode) {
      case EditorMode.StreckengrafikEditing: {
        const boundingBox = this.nodeService.getNetzgrafikBoundingBox();
        param = {
          encoderOptions: 1.0,
          scale: 2.0,
          left: boundingBox.minCoordX - 32,
          top: boundingBox.minCoordY - 32,
          width: boundingBox.maxCoordX - boundingBox.minCoordX + 64,
          height: boundingBox.maxCoordY - boundingBox.minCoordY + 64,
          backgroundColor: this.uiInteractionService.getActiveTheme().backgroundColor,
        };
        htmlElementToExport = document.getElementById("main-streckengrafik-container");
        break;
      }
      case EditorMode.OriginDestination: {
        htmlElementToExport = document.getElementById("main-origin-destination-container");
        if (htmlElementToExport === null) {
          return undefined;
        }
        const bbox = (htmlElementToExport as unknown as SVGGElement).getBBox();
        const padding = 10;
        param = {
          encoderOptions: 1.0,
          scale: 1.0,
          left: bbox.x - padding,
          top: bbox.y - padding,
          width: bbox.width + 2 * padding,
          height: bbox.height + 2 * padding,
          backgroundColor: this.uiInteractionService.getActiveTheme().backgroundColor,
        };
        break;
      }
      default: {
        htmlElementToExport = document.getElementById("graphContainer");
        if (htmlElementToExport === null) {
          return undefined;
        }
        param = {
          encoderOptions: 1.0,
          scale: 1.0,
          left: htmlElementToExport.offsetWidth / 3,
          top: 80,
          width: htmlElementToExport.offsetWidth,
          height: htmlElementToExport.offsetHeight,
          backgroundColor: this.uiInteractionService.getActiveTheme().backgroundColor,
        };
        break;
      }
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
      documentSavedStyle: oldStyle
    };
  }

  private createTrainrunDetailDataAsCSVData(): string {
    /*
      This prompt can be uses to test with any LLM

      ---- start ----
      Build agent that can process, analyze, and compare timetable data. In order to do this, data with trainruns is required.
      A timetable consists of at least one or an unlimited number of trainruns. Each trainrun is described with attributes
      such as Name, Frequency, Direction, and PathTime.

      Name: The name indicates the train journey, which usually consists of one forward and one backward trainrun.
      If a train journey only travels in one direction, then the train journey consists only of a forward trainrun.

      Frequency: Each train journey has a frequency attribute that indicates how often the train runs.
      For example, a frequency of 15 means that a single train departs from the starting point every 15 minutes,
      resulting in 4 trains per hour. A frequency of 30 means a new train starts every half hour,
      and 60 means once per hour. The trains of the train journey consist solely of a master train.
      Using the frequency, all train run of a timetable can be infinitely rolled out or unfolded from the train
      journey and its journeys. This leads to a full-day timetable that is suitable for planning problems and also
      for complex timetable analyses.

      PathTime: This attribute describes the temporal and spatial sequence of the travel route.
      PathTime is a vector that consists of the following elements:

      - Node: Name of the place or city.
      - ArrivalTime: Consecutive Arrival time at the node: The time in minutes at which the train arrives at the node.
      - DepartureTime: Consecutive Departure time at the node: The time in minutes at which the train leaves the node.
      - Stop: True if the train stops so that passengers can board or alight and possibly take a connecting journey at the same node.
            False if the train does not stop and passengers cannot board or alight.
      - ArrivalMinute: Arrival time at the node: The time in minutes at which the train arrives at the node - just the minute - 0..60
      - DepatureMinute: Departure time at the node: The time in minutes at which the train leaves the node -  just the minute - 0..60

      Additional Information:
      Within a train journey, all trainruns in opposite direction have a symmetric counterpart, expect there is just a one-way trainrun.
      Symmetrical means that forward (F) and backward (B)
      always have symmetrical times. The travel times are symmetrical to zero minutes, i.e., 60 minus the arrival
      time corresponds to the departure time in the opposite direction.

      Build the agent. Then ask the user if they can upload timetable data. Every time timetable data is uploaded,
      create a new variant. Use only the timetable data that has been uploaded. Once a new variant is uploaded,
      output in a table for the new data of the new variant how many trains were loaded and how many journes there are.
      Only this should be output. Once everything is loaded, also output, "I am waiting for new instructions."

      Output: Ask for the language the user would like to receive the response in. And write: "Please load the data by uploading CSV files."
      ---- end ----

      Prompt
      ---- start ----
      Please compare the variants and provide feedback on the differences you observe in the variants,
      including route deviations, ArrivalMinute or DepatureMinute deviations, frequencies, ... .
      The results should be visualized. For example, you could use a table with the variants and the
      analysis results in the columns and the topic in the rows.
      ---- end ----

    */
    const sep = ",";
    const headers: string[] = [];
    const rows: string[][] = [];

    //headers.push("ID");
    headers.push("Name");
    headers.push("Frequency");
    headers.push("Direction");
    headers.push("PathTime");

    const direction = ["F", "B"];

    this.trainrunService
      .getTrainruns()
      .filter((trainrun) => this.filterService.filterTrainrun(trainrun))
      .forEach((trainrun) => {
        const freqsUnroll: number[] = [0];

        direction.forEach(dir => {

          let alltrainrunsections = this.trainrunSectionService.getAllTrainrunSectionsForTrainrun(trainrun.getId());
          while (alltrainrunsections.length > 0) {

            const bothEndNodes =
              this.trainrunService.getBothEndNodesFromTrainrunPart(alltrainrunsections[0]);

            const startNodeTmp =
              GeneralViewFunctions.getLeftOrTopNode(
                bothEndNodes.endNode1,
                bothEndNodes.endNode2,
              );

            // forward / backward
            const startNode = dir === "F" ? startNodeTmp :
              startNodeTmp.getId() === bothEndNodes.endNode1.getId() ?
                bothEndNodes.endNode2 : bothEndNodes.endNode1;


            const startTrainrunSection = startNode.getStartTrainrunSection(trainrun.getId());

            const visitedTrainrunSections: TrainrunSection[] = [];
            visitedTrainrunSections.push(startTrainrunSection);
            const iterator = this.trainrunService.getIterator(startNode, startTrainrunSection);
            let nodes: string = "Path=[" + startNode.getBetriebspunktName();

            // calc start time
            const startTime = startTrainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
              startTrainrunSection.getTargetDepartureConsecutiveTime() :
              startTrainrunSection.getSourceDepartureConsecutiveTime();
            const startTimeMinute = startTrainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
              startTrainrunSection.getTargetDeparture() :
              startTrainrunSection.getSourceDeparture();

            let pathTime: string = "PathTime=[(" + startNode.getBetriebspunktName() + ", null " + "," + startTime + "," + true + ", null, " + startTimeMinute +")";

            while (iterator.hasNext()) {
              iterator.next();
              nodes += sep + iterator.current().node.getBetriebspunktName();
              const ts = iterator.current().trainrunSection;

              // calc time a
              const timeA = ts.getSourceNodeId() === iterator.current().node.getId() ?
                ts.getSourceArrivalConsecutiveTime() :
                ts.getTargetArrivalConsecutiveTime();
              const timeAMinute = ts.getSourceNodeId() === iterator.current().node.getId() ?
                ts.getSourceArrival() :
                ts.getTargetArrival();

              const node = iterator.current().node;
              const bpName = node.getBetriebspunktName();
              const trans = node.getTransition(iterator.current().trainrunSection.getId());

              const nonStop = trans === undefined ? false : !trans.getIsNonStopTransit();

              if (iterator.hasNext()) {
                const tsNext = iterator.current().node.getNextTrainrunSection(iterator.current().trainrunSection);

                // calc time D
                const timeD = tsNext.getSourceNodeId() === iterator.current().node.getId() ?
                  tsNext.getSourceDepartureConsecutiveTime() :
                  tsNext.getTargetDepartureConsecutiveTime();
                const timeDMinute = tsNext.getSourceNodeId() === iterator.current().node.getId() ?
                  tsNext.getSourceDeparture() :
                  tsNext.getTargetDeparture();

                pathTime += sep + "(" + bpName + "," + timeA + "," + timeD + "," + nonStop + "," + timeAMinute + "," +  timeDMinute + ")";
              } else {
                pathTime += sep + "(" + bpName + "," + timeA + ", null" + "," + true + ", " + timeAMinute + ", null)";
              }

              visitedTrainrunSections.push(iterator.current().trainrunSection);
            }
            visitedTrainrunSections.push(iterator.current().trainrunSection);

            // create row data to push to rows
            const row: string[] = [];
            //row.push("" + trainrun.getId());
            row.push("" + trainrun.getCategoryShortName() + trainrun.getTitle());
            row.push("" + trainrun.getTrainrunFrequency().frequency);
            row.push(dir);
            //row.push(nodes + "]");
            row.push(pathTime + "]");

            // to storage
            rows.push(row);

            // filter all still visited trainrun sections
            alltrainrunsections = alltrainrunsections.filter(ts =>
              visitedTrainrunSections.indexOf(ts) === -1
            );
          }
        }); // each direction F : forward / B : backward

      }); // each trainrun


    return this.buildCSVString(headers, rows);
  }



  private convertToZuglaufCSV(): string {
    const comma = ",";
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

    const rows: string[][] = [];
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

        rows.push(row);
      });
    return this.buildCSVString(headers, rows);
  }

  private convertToOriginDestinationCSV(): string {
    const headers: string[] = [];
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.origin:Origin`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.destination:Destination`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.travelTime:Travel time`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.transfers:Transfers`);
    headers.push($localize`:@@app.view.editor-side-view.editor-tools-view-component.totalCost:Total cost`);

    const matrixData = this.originDestinationService.originDestinationData();

    const rows = [];
    matrixData.forEach((d) => {
      if (!d.found) {
        rows.push([d.origin, d.destination, "", "", ""]);
        return;
      }
      const row = [
        d.origin,
        d.destination,
        d.travelTime.toString(),
        d.transfers.toString(),
        d.totalCost.toString(),
      ];
      rows.push(row);
    });

    return this.buildCSVString(headers, rows);
  }

  private detectNetzgrafikJSON3rdParty(netzgrafikDto: NetzgrafikDto): boolean {
    return netzgrafikDto.nodes.find((n: NodeDto) =>
        n.ports === undefined) !== undefined
      ||
      netzgrafikDto.nodes.filter((n: NodeDto) =>
        n.ports?.length === 0).length === netzgrafikDto.nodes.length
      ||
      netzgrafikDto.trainrunSections.find((ts: TrainrunSectionDto) =>
        ts.path === undefined ||
        ts.path?.path === undefined ||
        ts.path?.path?.length === 0
      ) !== undefined;
  }

  private processNetzgrafikJSON3rdParty(netzgrafikDto: NetzgrafikDto) {
    // --------------------------------------------------------------------------------
    // 3rd party generated JSON detected
    // --------------------------------------------------------------------------------
    const msg = $localize`:@@app.view.editor-side-view.editor-tools-view-component.import-netzgrafik-as-json-info-3rd-party:3rd party import`;
    this.logger.info(msg);


    // --------------------------------------------------------------------------------
    // (Step 1) Import only nodes
    const netzgrafikOnlyNodeDto: NetzgrafikDto = Object.assign({}, netzgrafikDto);
    netzgrafikOnlyNodeDto.trainruns = [];
    netzgrafikOnlyNodeDto.trainrunSections = [];
    this.dataService.loadNetzgrafikDto(netzgrafikOnlyNodeDto);

    // (Step 2) Import nodes and trainrunSectiosn by trainrun inseration (copy => create)
    this.dataService.insertCopyNetzgrafikDto(netzgrafikDto, false);

    // step(3) Check whether a transitions object was given when not
    //         departureTime - arrivatelTime == 0 => non-stop
    this.nodeService.getNodes().forEach((n) => {
      n.getTransitions().forEach((trans) => {
        const p1 = n.getPort(trans.getPortId1());
        const p2 = n.getPort(trans.getPortId2());
        let arrivalTime = p1.getTrainrunSection().getTargetArrival();
        if (p1.getTrainrunSection().getSourceNodeId() === n.getId()) {
          arrivalTime = p1.getTrainrunSection().getSourceArrival();
        }
        let departureTime = p2.getTrainrunSection().getTargetDeparture();
        if (p2.getTrainrunSection().getSourceNodeId() === n.getId()) {
          departureTime = p2.getTrainrunSection().getSourceDeparture();
        }
        trans.setIsNonStopTransit(arrivalTime - departureTime === 0);
      });
    });

    // step(4) Recalc/propagate consecutive times
    this.trainrunService.propagateInitialConsecutiveTimes();

    // step(5) Validate all trainrun sections
    this.trainrunSectionService.getTrainrunSections().forEach((ts) => {
      TrainrunSectionValidator.validateOneSection(ts);
      TrainrunSectionValidator.validateTravelTime(ts);
    });
  }

  private processNetzgrafikJSON(netzgrafikDto: NetzgrafikDto) {
    // prepare JSON import
    this.uiInteractionService.showNetzgrafik();
    this.uiInteractionService.closeNodeStammdaten();
    this.uiInteractionService.closePerlenkette();
    this.uiInteractionService.resetEditorMode();
    this.nodeService.unselectAllNodes();

    // import data
    if (
      netzgrafikDto.trainrunSections.length === 0
      ||
      !this.detectNetzgrafikJSON3rdParty(netzgrafikDto)
    ) {
      // -----------------------------------------------
      // Default: Netzgrafik-Editor exported JSON
      // -----------------------------------------------
      this.dataService.loadNetzgrafikDto(netzgrafikDto);
      // -----------------------------------------------
    } else {
      // -----------------------------------------------
      // 3rd Party: Netzgrafik-Editor exported JSON
      // -----------------------------------------------
      this.processNetzgrafikJSON3rdParty(netzgrafikDto);
    }

    // recompute viewport
    this.uiInteractionService.viewportCenteringOnNodesBoundingBox();
  }

  private getFilenameToExport() {
    const editorMode = this.uiInteractionService.getEditorMode();
    switch (editorMode) {
      case EditorMode.StreckengrafikEditing:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.spaceTimeChartFile:spaceTimeChart`;
      case EditorMode.OriginDestination:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.originDestinationFile:originDestination`;
      default:
        return $localize`:@@app.view.editor-side-view.editor-tools-view-component.netzgrafikFile:netzgrafik`;
    }
  }
}
