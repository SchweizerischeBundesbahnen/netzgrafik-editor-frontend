import {parse, ParseResult} from 'papaparse';
import {Component, ElementRef, ViewChild} from '@angular/core';
import {RailMLExporter} from '../../utils/railMLExporter';
import * as svg from 'save-svg-as-png';
import {DataService} from '../../services/data/data.service';
import {TrainrunService} from '../../services/data/trainrun.service';
import {NodeService} from '../../services/data/node.service';
import {FilterService} from '../../services/ui/filter.service';
import {TrainrunSectionService} from '../../services/data/trainrunsection.service';
import {UiInteractionService} from '../../services/ui/ui.interaction.service';
import {StammdatenService} from '../../services/data/stammdaten.service';
import {LogService} from '../../logger/log.service';
import {VersionControlService} from '../../services/data/version-control.service';
import {
  HaltezeitFachCategories,
  NetzgrafikDto,
  TrainrunCategoryHaltezeit
} from '../../data-structures/business.data.structures';
import {downloadBlob} from '../util/download-utils';
import {map} from 'rxjs/operators';
import {LabelService} from '../../services/data/label.serivce';
import {NetzgrafikColoringService} from '../../services/data/netzgrafikColoring.service';

@Component({
  selector: 'sbb-editor-tools-view-component',
  templateUrl: './editor-tools-view.component.html',
  styleUrls: ['./editor-tools-view.component.scss']
})
export class EditorToolsViewComponent {
  @ViewChild('stammdatenFileInput', {static: false}) stammdatenFileInput: ElementRef;
  @ViewChild('netgrafikJsonFileInput', {static: false}) netgrafikJsonFileInput: ElementRef;

  public isDeletable$ = this.versionControlService.variant$.pipe(map(v => v?.isDeletable));
  public isWritable$ = this.versionControlService.variant$.pipe(map(v => v?.isWritable));

  constructor(private dataService: DataService,
              private trainrunService: TrainrunService,
              private nodeService: NodeService,
              public filterService: FilterService,
              private trainrunSectionService: TrainrunSectionService,
              private uiInteractionService: UiInteractionService,
              private stammdatenService: StammdatenService,
              private labelService: LabelService,
              private logger: LogService,
              private versionControlService: VersionControlService,
              private netzgrafikColoringService: NetzgrafikColoringService
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
        'nodes' in netzgrafikDto &&
        'trainrunSections' in netzgrafikDto &&
        'trainruns' in netzgrafikDto &&
        'resources' in netzgrafikDto &&
        'metadata' in netzgrafikDto) {
        this.logger.log('onLoad; load netzgrafik: ', netzgrafikDto);
        this.uiInteractionService.showNetzgrafik();
        this.uiInteractionService.closeNodeStammdaten();
        this.uiInteractionService.closePerlenkette();
        this.nodeService.unselectAllNodes();
        this.dataService.loadNetzgrafikDto(netzgrafikDto);
      }
    };
    reader.readAsText(file);

    // set the event target value to null in order to be able to load the same file multiple times after one another
    param.target.value = null;
  }

  onSave() {
    const data: NetzgrafikDto = this.dataService.getNetzgrafikDto();
    const blob = new Blob([JSON.stringify(data)], {type: 'application/json'});
    downloadBlob(blob, 'netzgrafik.json');
  }

  onExportRailML() {
    const filename = 'file.xml';

    const pom = document.createElement('a');
    const railMLExporter = new RailMLExporter(
      this.dataService,
      this.nodeService,
      this.trainrunService,
      this.trainrunSectionService
    );

    const bb = new Blob([railMLExporter.createRailML()], {type: 'text/plain'});

    pom.setAttribute('href', window.URL.createObjectURL(bb));
    pom.setAttribute('download', filename);

    pom.dataset.downloadurl = ['text/plain', pom.download, pom.href].join(':');
    pom.draggable = true;
    pom.classList.add('dragout');

    pom.click();
  }

  onExportNetzgrafikSVG() {
    // option 2: save svg as svg
    // https://www.npmjs.com/package/save-svg-as-png
    const containerInfo = this.getContainertoExport();
    svg.svgAsDataUri(containerInfo.documentToExport, containerInfo.exportParameter,).then(uri => {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.href = uri;
      a.download = 'netzgrafik.svg';
      a.click();
      URL.revokeObjectURL(a.href);
      a.remove();
      containerInfo.documentToExport.setAttribute('style', containerInfo.documentSavedStyle);
    });
  }

  onPrintNetzgrafik() {
    this.uiInteractionService.closeFilter();
    this.uiInteractionService.print();
  }

  onExportNetzgrafikPNG() {
    // option 1: save svg as png
    // https://www.npmjs.com/package/save-svg-as-png
    const containerInfo = this.getContainertoExport();
    svg.saveSvgAsPng(containerInfo.documentToExport, 'netzgrafik.png', containerInfo.exportParameter);
    //containerInfo.documentToExport.setAttribute('style', containerInfo.documentSavedStyle);
  }

  onLoadStammdatenButton() {
    this.stammdatenFileInput.nativeElement.click();
  }

  onLoadStammdaten(param) {
    const file = param.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const finalResult: ParseResult = parse(reader.result.toString(), {header: true});
      this.stammdatenService.setStammdaten(finalResult.data);
    };
    reader.readAsText(file);

    // set the event target value to null in order to be able to load the same file multiple times after one another
    param.target.value = null;
  }

  onExportStammdaten() {
    const filename = 'stammdaten.csv';
    const csvData = this.convertToStammdatenCSV();
    this.onExport(filename, csvData);
  }

  onExportZuglauf() {
    const filename = 'zuglauf.csv';
    const csvData = this.convertToZuglaufCSV();
    this.onExport(filename, csvData);
  }

  onExport(filename: string, csvData: string) {
    const blob = new Blob([csvData], {
      type: 'text/csv'
    });
    const url = window.URL.createObjectURL(blob);

    const nav = (window.navigator as any);
    if (nav.msSaveOrOpenBlob) {
      nav.msSaveBlob(blob, filename);
    } else {
      const a = document.createElement('a');
      a.href = url;
      a.download = filename;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
    window.URL.revokeObjectURL(url);
  }

  private convertToStammdatenCSV(): string {
    const separator = ';';
    const comma = ',';

    const headers: string[] = [];
    headers.push('BP');
    headers.push('Bahnhof');
    headers.push('Kategorie');
    headers.push('Region');
    headers.push('Fahrgastwechselzeit_IPV');
    headers.push('Fahrgastwechselzeit_A');
    headers.push('Fahrgastwechselzeit_B');
    headers.push('Fahrgastwechselzeit_C');
    headers.push('Fahrgastwechselzeit_D');
    headers.push('ZAZ');
    headers.push('Umsteigezeit');
    headers.push('Labels');
    headers.push('X');
    headers.push('Y');
    headers.push('Erstellen');

    const contentData: string[] = [];
    contentData.push(headers.join(separator));
    this.nodeService.getNodes().forEach((nodeElement) => {
      const trainrunCategoryHaltezeit: TrainrunCategoryHaltezeit = nodeElement.getTrainrunCategoryHaltezeit();
      const stammdaten = this.stammdatenService.getBPStammdaten(nodeElement.getBetriebspunktName());
      const zaz = stammdaten !== null ? stammdaten.getZAZ() : 0;
      const erstellen = stammdaten !== null ? stammdaten.getErstellen() : 'JA';
      const kategorien = stammdaten !== null ? stammdaten.getKategorien() : [];
      const regions = stammdaten !== null ? stammdaten.getRegions() : [];

      const row: string[] = [];
      row.push(nodeElement.getBetriebspunktName());
      row.push(nodeElement.getFullName());
      row.push(kategorien.map(kat => '' + kat).join(comma));
      row.push(regions.map(reg => '' + reg).join(comma));
      row.push('' + (trainrunCategoryHaltezeit[HaltezeitFachCategories.IPV].no_halt ? 0 :
        trainrunCategoryHaltezeit[HaltezeitFachCategories.IPV].haltezeit - zaz));
      row.push('' + (trainrunCategoryHaltezeit[HaltezeitFachCategories.A].no_halt ? 0 :
        trainrunCategoryHaltezeit[HaltezeitFachCategories.A].haltezeit - zaz));
      row.push('' + (trainrunCategoryHaltezeit[HaltezeitFachCategories.B].no_halt ? 0 :
        trainrunCategoryHaltezeit[HaltezeitFachCategories.B].haltezeit - zaz));
      row.push('' + (trainrunCategoryHaltezeit[HaltezeitFachCategories.C].no_halt ? 0 :
        trainrunCategoryHaltezeit[HaltezeitFachCategories.C].haltezeit - zaz));
      row.push('' + (trainrunCategoryHaltezeit[HaltezeitFachCategories.D].no_halt ? 0 :
        trainrunCategoryHaltezeit[HaltezeitFachCategories.D].haltezeit - zaz));
      row.push('' + zaz);
      row.push('' + nodeElement.getConnectionTime());
      row.push(nodeElement.getLabelIds().map(labelID => {
        const labelOfInterest = this.labelService.getLabelFromId(labelID);
        if (labelOfInterest !== undefined) {
          return labelOfInterest.getLabel();
        }
        return '';
      }).join(comma));
      row.push('' + nodeElement.getPositionX());
      row.push('' + nodeElement.getPositionY());
      row.push(erstellen);
      contentData.push(row.join(separator));
    });
    return contentData.join('\n');
  }

  private getContainertoExport() {
    let htmlElementToExport = document.getElementById('main-streckengrafik-container');
    let param = {};
    console.log(htmlElementToExport);

    if (htmlElementToExport === null) {
      htmlElementToExport = document.getElementById('graphContainer');
      const boundingBox = this.getNetzgrafikBoundingBox();
      param = {
        encoderOptions: 1.0,
        scale: 2.0,
        left: boundingBox.minCoordX - 32,
        top: boundingBox.minCoordY - 32,
        width: boundingBox.maxCoordX - boundingBox.minCoordX + 64,
        height: boundingBox.maxCoordY - boundingBox.minCoordY + 64,
        backgroundColor: this.uiInteractionService.getActiveTheme().backgroundColor
      };
    } else {
      param = {
        encoderOptions: 1.0,
        scale: 1.0,
        left: htmlElementToExport.offsetWidth / 3,
        top: 80,
        width: htmlElementToExport.offsetWidth,
        height: htmlElementToExport.offsetHeight,
        backgroundColor: this.uiInteractionService.getActiveTheme().backgroundColor
      };
    }
    const oldStyle = htmlElementToExport.getAttribute('style');
    const htmlsTagCollection = document.getElementsByTagName('html');
    if (htmlsTagCollection.length > 0) {
      const htmlRoot = htmlsTagCollection[0];
      htmlElementToExport.setAttribute('style', htmlRoot.getAttribute('style'));

      const styles = this.netzgrafikColoringService.generateGlobalStyles(
        this.dataService.getTrainrunCategories(),
        this.trainrunSectionService.getTrainrunSections()
      );

      styles.forEach(s => {
        const docStyles = htmlRoot.ownerDocument.styleSheets;
        for (let i = 0; i < s.cssRules.length; i++) {
          htmlRoot.ownerDocument.styleSheets[docStyles.length - 1].insertRule(s.cssRules[i].cssText);
        }
      });
    }
    return {
      documentToExport: htmlElementToExport,
      exportParameter: param,
      documentSavedStyle: oldStyle
    };
  }

  private getNetzgrafikBoundingBox() {
    let minX;
    let maxX;
    let minY;
    let maxY;
    this.nodeService.nodesStore.nodes.forEach((n) => {
      minX = minX === undefined ? n.getPositionX() :
        Math.min(minX, n.getPositionX());
      maxX = maxX === undefined ? n.getPositionX() + n.getNodeWidth() :
        Math.max(maxX, n.getPositionX() + n.getNodeWidth());
      minY = minY === undefined ? n.getPositionY() :
        Math.min(minY, n.getPositionY());
      maxY = maxY === undefined ? n.getPositionY() + n.getNodeHeight() :
        Math.max(maxY, n.getPositionY() + n.getNodeHeight());
    });
    return {minCoordX: minX, minCoordY: minY, maxCoordX: maxX, maxCoordY: maxY};
  }

  private convertToZuglaufCSV(): string {
    const separator = ';';
    const comma = ',';
    const contentData: string[] = [];
    const headers: string[] = [];
    headers.push('Zugkategorie');
    headers.push('Zugname');
    headers.push('Startbahnhof');
    headers.push('Zielbahnhof');
    headers.push('Verkehrsperiode');
    headers.push('Takt');
    headers.push('Abfahrtsminute am Start Knoten)');
    headers.push('Fahrzeit Start-Ziel');
    headers.push('Ankuntsminute am Ziel Knoten)');
    headers.push('Wendezeit Zielbahnhof');
    headers.push('Abfahrtsminute am  Ziel Knoten');
    headers.push('Fahrzeit Ziel-Start');
    headers.push('Ankuntsminute am Start Knoten');
    headers.push('Wendezeit Startbahnhof');
    headers.push('Umlaufzeit');
    headers.push('Labels');

    contentData.push(headers.join(separator));
    this.trainrunService.getTrainruns()
      .filter(trainrun => this.filterService.filterTrainrun(trainrun))
      .forEach((trainrun) => {

        let startBetriebspunktName = '';
        let endBetriebspunktName = '';
        let travelTimeFoewart = 0;
        let travelTimeBackward = 0;
        let waitingTimeOnStartStation = 0;
        let waitingTimeOnEndStation = 0;
        let foewartHoldtime = 0;
        let backwardHoldtime = 0;
        let startNodeDeparture = undefined;
        let endNodeArrival = undefined;
        let endNodeDeparture = undefined;
        let startNodeArrival = undefined;
        this.trainrunSectionService.getAllTrainrunSectionsForTrainrun(trainrun.getId())
          .filter(trainrunSection => this.filterService.filterTrainrunsection(trainrunSection))
          .forEach((trainrunSection, index) => {

            if (index === 0) {
              startBetriebspunktName = trainrunSection.getSourceNode().getBetriebspunktName();
              startNodeArrival = trainrunSection.getSourceArrival();
              startNodeDeparture = trainrunSection.getSourceDeparture();
              waitingTimeOnStartStation = this.calcWaitingTime(trainrunSection.getSourceArrival(), trainrunSection.getSourceDeparture());
            }

            if (endNodeArrival) {
              foewartHoldtime = foewartHoldtime + this.calcWaitingTime(endNodeArrival, trainrunSection.getSourceDeparture());
            }

            if (endNodeDeparture) {
              backwardHoldtime = backwardHoldtime + this.calcWaitingTime(trainrunSection.getSourceArrival(), endNodeDeparture);
            }
            endNodeArrival = trainrunSection.getTargetArrival();
            endNodeDeparture = trainrunSection.getTargetDeparture();
            endBetriebspunktName = trainrunSection.getTargetNode().getBetriebspunktName();
            travelTimeFoewart = travelTimeFoewart + trainrunSection.getTravelTime();
            travelTimeBackward = travelTimeBackward + trainrunSection.getTravelTime();
            waitingTimeOnEndStation = this.calcWaitingTime(trainrunSection.getTargetArrival(), trainrunSection.getTargetDeparture());
          });

        if (trainrun.getFrequency() < 60) {
          waitingTimeOnEndStation = waitingTimeOnEndStation % trainrun.getFrequency();
          waitingTimeOnStartStation = waitingTimeOnStartStation % trainrun.getFrequency();
        }

        travelTimeFoewart = travelTimeFoewart + foewartHoldtime;
        travelTimeBackward = travelTimeBackward + backwardHoldtime;
        const timeOfCirculation = travelTimeFoewart + waitingTimeOnEndStation + travelTimeBackward + waitingTimeOnStartStation;
        const row: string[] = [];
        row.push(trainrun.getTrainrunCategory().shortName);
        row.push(trainrun.getTitle());
        row.push(startBetriebspunktName);
        row.push(endBetriebspunktName);
        row.push(trainrun.getTrainrunTimeCategory().shortName);
        row.push(trainrun.getTrainrunFrequency().shortName);
        row.push('' + startNodeDeparture);
        row.push('' + travelTimeFoewart);
        row.push('' + endNodeArrival);
        row.push('' + waitingTimeOnEndStation);
        row.push('' + endNodeDeparture);
        row.push('' + travelTimeBackward);
        row.push('' + startNodeArrival);
        row.push('' + waitingTimeOnStartStation);
        row.push('' + timeOfCirculation);
        row.push(trainrun.getLabelIds().map(labelID => this.labelService.getLabelFromId(labelID).getLabel()).join(comma));

        contentData.push(row.join(separator));
      });
    return contentData.join('\n');
  }

  private calcWaitingTime(arrival: number, departure: number) {
    if (arrival > departure) {
      return 60 - arrival + departure;
    }
    return departure - arrival;
  }

}
