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
import {
  OriginDestinationService
} from "src/app/services/analytics/origin-destination/components/origin-destination.service";
import {EditorMode} from "../editor-menu/editor-mode";
import {TrainrunSection} from '../../models/trainrunsection.model';
import {GeneralViewFunctions} from '../util/generalViewFunctions';

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

  onExportOriginDestination() {
    const filename = $localize`:@@app.view.editor-side-view.editor-tools-view-component.originDestinationFile:originDestination` + ".csv";
    const csvData = this.convertToOriginDestinationCSV();
    this.onExport(filename, csvData);
  }

  onConvertZuglaufeCSV() {
    const filename = "experiment.csv";
    const csvData = this.convertZuglaufeCSV();
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

  private convertZuglaufeCSV(): string {
    /*

    Es gibt verschiedene Fahrpläne, welche als Zugfahrten gegeben werden. Jeder Fahrplan besteht aus n-Zugfahrten.

    Pro Zugfahrt gibt es eine ID, Name, TrainName, Part, Frequenz oder Takt, Direction und ein Pfad (Vektor Path) bestehend aus Knoten,
    die durch die Zugfahrt durchfahren werden. Aus den Path-Vektoren kann eine Topologie abgeleitet werden. Die abgeleitete
    Topologie ist ein gerichteter Graph. Des Weiteren gibt es noch einen Vektor PathTime, welcher den Pfad nochmals abbildet,
    jedoch mit der Ankunftszeit und Abfahrtszeit erweitert ist. Somit besteht PathTime aus Elementen mit folgenden drei Einträgen (Ort: Knoten, Ankunftszeit: Zeit in Minuten, Abfahrtszeit: Zeit in Minuten, Hält am Knoten oder nicht). Diese
    Darstellung gilt für alle Zügen, egal der Richtung - also (Ort, An, Ab). Bitte beachte, dass Ankunftszeit relevant ist, wann der Kunde ankommt. Abfahrtszeit ist wichtig, wann der Zug frühstens abfährt. Wichtig wird dies bei der Fahrplan abfragen
    wann der Kunde am Ort sein muss und wann der Kunde am Ziel ankommt, aber auch ob ein Umsteigen funktioniert oder auf den nächsten Takt (Zug) gewartet werden muss. Falls der Zug nicht hält am Knoten, können keine Passagiere auststeien noch zusteigen, also
    auch nicht umsteigen.

    Hier sind noch mehr Informationen zu den Daten:

    ID:
      Die ID wird nur zum Debugging benötigt, oder falls die Daten exportiert werden sollen.

    Name:
    alle Plots, Ausgaben, Informationen etc. verwenden den Namen als Referenz, bzw. der Nutzer bekommt den Zugnamen angezeigt.

    TrainName:
    ist der Name, welcher der Fahrplanplaner als Name für beide Richtungen braucht, wird hier grundsätzlcih nur zum Debugging benötigt

    Direction:
    Die Direction wird nur zum Debugging benötigt, oder falls die Daten exportiert werden sollen.

    Part:
    ist aufsteigender Index, wird nur aufsteigen, falls der Zug aus mehr als einem Segment besteht, welches topologisch nicht verbunden ist, sonst 0

    Frequenz:
    Die Frequenz gibt den Takt an, mit dem ein Zug fährt. Es gibt folgende Takte (15, 20, 30, 60, 120). Hat ein Zug eine Frequenz von 60, dann fährt der Zug jede Stunde zur gegebenen Minute - also 1x pro Stunde.
    Bei 30 im Halbstundentakt - also 2 Mal pro Stunde. 15 im 15-Minuten-Takt - also 4 Mal pro Stunde. 20 im 20-Minuten-Takt also 3 Mal pro Stunde. 120 jede zweite Stunde.

    Die Zeit ist in Minuten angegeben. Fährt ein Zug über die Stunde, d.h. ist die Zeit im PathTime kleiner als der vorherige Wert, bedeutet dies, dass der Zuglauf über eine volle Stunde geht.

    Wichtig ist für alle Zuge, vorwärts wie rückfahrt die Frequenz zu beachten, d.h. die Züge verkehren unendlich, 24h ohne Unterbruch.

    Die Züge machen einen Umlauf, d.h. am Endknoten wenden sie und fahren zurück. Die Rückfahrt hat die gleiche ID mit unterschiedlicher Direction.



    Wichtig ist, dass wir nur ein Zug in den Daten mitgeben, ohne die Frequenz. Die Frequenz muss ausgerollt werden, d.h. verkehrt ein Zug alle 60min, dann haben wir einen Zug beispielsweise um 08:xx und 09:xx, 10:xx, ...
    Haben wir einen Zug alle 30min, dann einen Zug 08:xx, 08:(30+xx), 09:xx, ... Haben wir alle 15min einen Zug, dann einen um 08:xx, 08:(15+xx), 08:(30+xx), ...
    Die ist wichtig, damit der ganze Fahrplan erstellt werden kann. Jede Stunde ist alles wieder gleich.

    Erstelle für jede der nachfolgenden Aufgaben einen Agenten und wähle je nach Benutzeranfrage den richtigen aus und führe dann den Task durch:

    Ertelle im Hintergrund ein time-expanded Graphen, damit im Anschluss sehr schnell die Reiseketten mit Origin-Destination Matrix gerechnet werden kann oder auch sehr schnell Fahrplanabfragen möglich werden.

    TopoAgent:
    Bitte plotte mir für jede Variante die abgeleitete Topologie als ASCII Chart als einfach lesbarer graph von oben nach unten. Der Plot und die Analyse soll nur die Topologien zurück geben, also
    ohne Züge und ohne Richtung der Path, nur die Topologie, welche eigentlich der Bahninfrastruktur entspricht.

    MareyAgent:
    Bitte plotte mir für jede Variante den Fahrplan als grafischen Fahrplan als ASCII Chart - der grafische Fahrplan
    soll als Marey Diagramm mit allen Zugfahrten, mit Zeit von oben nach unten und die Strecke von links nach rechts erstellt werden. Bitte jede Spalte
    mit . abtrennen und exakt anordnen. Die Spalten müssen alle gleiche Breite haben, so dass die Information klar dargestellt wird.

    ODAgent:
    Bitte gib mir für jede Variante als Origin-Destination-Matrix an, d.h. die kürzeste Fahrzeit an. Dann noch eine zweite Darstellung mit den Anzahl Umstiegen.

    ScheduleAgent:
    Bitte gib mir für alle Varianten den Fahrplan ab 08:00 aus. Ich möchte von {} nach {} reisen.

    CompareAgent:
    Bitte vergleiche mir die Fahrpläne für die Reise von {} nach {},
    so dass ich als Fahrplan-Designer entscheiden kann, was besser ist.
    Die Bewertung, falls du dies machen kannst, soll starken Fokus auf Kunden (Reisende) haben.



    Sobald alles verabeitet hast, d.h. die Daten geladen sind - schreibe mir in einer Tabelle für jeden Zug die Ankunfts und Abfahrtszeiten pro Knoten raus.


    Daten für Variante 1 mit Zugfahrten pro Zeile

    ID	Name	TrainName	Part	Frequency	Direction	Path	PathTime
    98	IC1F	IC1	0	60	F	Path=[A1,B,C,D,E2,F2]	PathTime=[(A1, null ,0, false ),(B,1,3,true),(C,4,4,false),(D,7,9,true),(E2,10,12,true),(F2,13, null,false)]
    98	IC1B	IC1	0	60	B	Path=[F2,E2,D,C,B,A1]	PathTime=[(F2, null ,47, false ),(E2,48,50,true),(D,51,53,true),(C,56,56,false),(B,57,59,true),(A1,60, null,false)]
    99	IC2F	IC2	0	60	F	Path=[A2,B,C,D,E1,F1]	PathTime=[(A2, null ,2, false ),(B,3,5,true),(C,6,8,true),(D,11,13,true),(E1,14,14,false),(F1,15, null,false)]
    99	IC2B	IC2	0	60	B	Path=[F1,E1,D,C,B,A2]	PathTime=[(F1, null ,45, false ),(E1,46,46,false),(D,47,49,true),(C,52,54,true),(B,55,57,true),(A2,58, null,false)]


    Daten für Variante 2 mit Zugfahrten pro Zeile

    ID	Name	TrainName	Part	Frequency	Direction	Path	PathTime
    100	IC1F	IC1	0	60	F	Path=[A1,B,C]	PathTime=[(A1, null ,0, false ),(B,1,1,false),(C,2, null,false)]
    100	IC1B	IC1	0	60	B	Path=[C,B,A1]	PathTime=[(C, null ,58, false ),(B,59,59,false),(A1,60, null,false)]
    101	IC2F	IC2	0	60	F	Path=[A2,B,C,D,E1,F1]	PathTime=[(A2, null ,0, false ),(B,1,3,true),(C,4,6,true),(D,7,7,false),(E1,8,10,true),(F1,11, null,false)]
    101	IC2B	IC2	0	60	B	Path=[F1,E1,D,C,B,A2]	PathTime=[(F1, null ,49, false ),(E1,50,52,true),(D,53,53,false),(C,54,56,true),(B,57,59,true),(A2,60, null,false)]
    102	IC4F	IC4	0	60	F	Path=[D,E2,F2]	PathTime=[(D, null ,7, false ),(E2,8,10,true),(F2,11, null,false)]
    102	IC4B	IC4	0	60	B	Path=[F2,E2,D]	PathTime=[(F2, null ,49, false ),(E2,50,52,true),(D,53, null,false)]
    103	IC3F	IC3	0	60	F	Path=[C,D]	PathTime=[(C, null ,5, false ),(D,6, null,false)]
    103	IC3B	IC3	0	60	B	Path=[D,C]	PathTime=[(D, null ,54, false ),(C,55, null,false)]
    104	IC3F	IC3	0	60	F	Path=[E1,F1]	PathTime=[(E1, null ,0, false ),(F1,1, null,false)]
    104	IC3B	IC3	0	60	B	Path=[F1,E1]	PathTime=[(F1, null ,59, false ),(E1,60, null,false)]


    */


    const comma = ";";
    const sep = ",";
    const headers: string[] = [];
    headers.push("ID");
    headers.push("Name");
    headers.push("TrainName");
    headers.push("Part");
    headers.push("Frequency");
    headers.push("Direction");
    headers.push("Path");
    headers.push("PathTime");

    const rows: string[][] = [];

    const direction = ["F", "B"];

    this.trainrunService
      .getTrainruns()
      .filter((trainrun) => this.filterService.filterTrainrun(trainrun))
      .forEach((trainrun) => {

        direction.forEach(dir => {

          let alltrainrunsections = this.trainrunSectionService.getAllTrainrunSectionsForTrainrun(trainrun.getId());
          let partCnt = 0;
          while (alltrainrunsections.length > 0) {
            const row: string[] = [];
            row.push("" + trainrun.getId());
            row.push("" + trainrun.getCategoryShortName() + trainrun.getTitle() + dir);
            row.push("" + trainrun.getCategoryShortName() + trainrun.getTitle());
            row.push("" + partCnt++);
            row.push("" + trainrun.getTrainrunFrequency().frequency);
            row.push(dir);

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
            let knoten: string = "Path=[" + startNode.getBetriebspunktName();
            const startTime = startTrainrunSection.getSourceNodeId() === iterator.current().node.getId() ?
              startTrainrunSection.getTargetDepartureConsecutiveTime() :
              startTrainrunSection.getSourceDepartureConsecutiveTime();
            let pathTime: string = "PathTime=[(" + startNode.getBetriebspunktName() + ", null " + "," + startTime + "," + true + ")";
            while (iterator.hasNext()) {
              iterator.next();
              knoten += sep + iterator.current().node.getBetriebspunktName();
              const ts = iterator.current().trainrunSection;
              const timeA = ts.getSourceNodeId() === iterator.current().node.getId() ?
                ts.getSourceArrivalConsecutiveTime() :
                ts.getTargetArrivalConsecutiveTime();

              const node = iterator.current().node;
              const bpName = node.getBetriebspunktName();
              const trans = node.getTransition(iterator.current().trainrunSection.getId());

              const nonStop = trans === undefined? false : !trans.getIsNonStopTransit();

              if (iterator.hasNext()) {
                const tsNext = iterator.current().node.getNextTrainrunSection(iterator.current().trainrunSection);
                const timeD = tsNext.getSourceNodeId() === iterator.current().node.getId() ?
                  tsNext.getSourceDepartureConsecutiveTime() :
                  tsNext.getTargetDepartureConsecutiveTime();
                pathTime += sep + "(" + bpName + "," + timeA + "," + timeD + "," + nonStop + ")";
              } else {
                pathTime += sep + "(" + bpName + "," + timeA + ", null" + "," + true + ")";
              }

              visitedTrainrunSections.push(iterator.current().trainrunSection);
            }
            visitedTrainrunSections.push(iterator.current().trainrunSection);
            row.push(knoten + "]");
            row.push(pathTime + "]");

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
