import {Injectable, OnDestroy} from "@angular/core";
import {
  NetzgrafikDto,
  NodeDto,
  TrainrunCategory,
  TrainrunFrequency,
  TrainrunSectionDto,
  TrainrunTimeCategory,
} from "../../data-structures/business.data.structures";
import {NetzgrafikDefault} from "../../sample-netzgrafik/netzgrafik.default";
import {NodeService} from "./node.service";
import {TrainrunSectionService} from "./trainrunsection.service";
import {TrainrunService} from "./trainrun.service";
import {StammdatenService} from "./stammdaten.service";
import {Stammdaten} from "../../models/stammdaten.model";
import {ResourceService} from "./resource.service";
import {BehaviorSubject, combineLatest, Observable, Subject} from "rxjs";
import {debounceTime, map, skip, takeUntil} from "rxjs/operators";
import {NoteService} from "./note.service";
import {LabelService} from "./label.serivce";
import {LabelGroupService} from "./labelgroup.service";
import {DataMigration} from "../../utils/data-migration";
import {FilterService} from "../ui/filter.service";
import {NetzgrafikColoringService} from "./netzgrafikColoring.service";

export class NetzgrafikLoadedInfo {
  constructor(
    public load: boolean,
    public preview: boolean,
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class DataService implements OnDestroy {
  private netzgrafikDtoStore: {netzgrafikDto: NetzgrafikDto} = {
    netzgrafikDto: NetzgrafikDefault.getDefaultNetzgrafik(),
  };

  private destroyed = new Subject<void>();

  private readonly netzgrafikLoadedInfoSubject =
    new BehaviorSubject<NetzgrafikLoadedInfo>(
      new NetzgrafikLoadedInfo(true, false),
    );
  private readonly netzgrafikLoadedInfo =
    this.netzgrafikLoadedInfoSubject.asObservable();

  constructor(
    private resourceService: ResourceService,
    private nodeService: NodeService,
    private trainrunSectionService: TrainrunSectionService,
    private trainrunService: TrainrunService,
    private stammdatenService: StammdatenService,
    private noteService: NoteService,
    private labelService: LabelService,
    private labelGroupService: LabelGroupService,
    private filterService: FilterService,
    private netzgrafikColoringService: NetzgrafikColoringService,
  ) {
    this.trainrunService.setDataService(this);
    this.nodeService.setDataService(this);
    this.filterService.setDataService(this);
    this.stammdatenService.stammdatenObservable
      .pipe(takeUntil(this.destroyed))
      .subscribe((stammdaten: Stammdaten[]) => {
        this.nodeService.setNodePropertiesFromStammdaten(stammdaten);
      });
  }

  ngOnDestroy() {
    this.destroyed.next();
    this.destroyed.complete();
  }

  loadNetzgrafikDto(netzgrafikDto: NetzgrafikDto, preview = false) {
    this.netzgrafikLoadedInfoSubject.next(
      new NetzgrafikLoadedInfo(true, preview),
    );

    DataMigration.migrateNetzgrafikDto(netzgrafikDto);

    this.netzgrafikDtoStore.netzgrafikDto = netzgrafikDto;
    this.resourceService.setResourceData(
      this.netzgrafikDtoStore.netzgrafikDto.resources,
    );
    this.nodeService.setNodeData(this.netzgrafikDtoStore.netzgrafikDto.nodes);
    this.trainrunSectionService.setTrainrunSectionsDataAndValidate(
      this.netzgrafikDtoStore.netzgrafikDto.trainrunSections,
    );
    this.trainrunService.setTrainrunData(
      this.netzgrafikDtoStore.netzgrafikDto.trainruns,
    );
    this.noteService.setNoteData(
      this.netzgrafikDtoStore.netzgrafikDto.freeFloatingTexts,
    );
    this.labelService.setLabelData(
      this.netzgrafikDtoStore.netzgrafikDto.labels,
    );
    this.labelGroupService.setLabelGroupData(
      this.netzgrafikDtoStore.netzgrafikDto.labelGroups,
    );
    this.filterService.setFilterData(
      this.netzgrafikDtoStore.netzgrafikDto.filterData,
    );
    this.netzgrafikColoringService.setNetzgrafikColors(
      this.netzgrafikDtoStore.netzgrafikDto.metadata.netzgrafikColors,
    );

    this.initializeDataServices();
    this.netzgrafikLoadedInfoSubject.next(
      new NetzgrafikLoadedInfo(false, preview),
    );
  }

  insertCopyNetzgrafikDto(netzgrafikDto: NetzgrafikDto) {
    this.nodeService.unselectAllNodes();
    const nodeMap = this.nodeService.mergeNodes(netzgrafikDto.nodes);
    const trainrunMap = this.trainrunService.createNewTrainrunsFromDtoList(
      netzgrafikDto.trainruns,
    );
    const trainrunSectionMap =
      this.trainrunSectionService.createNewTrainrunSectionsFromDtoList(
        netzgrafikDto.trainrunSections,
        nodeMap,
        trainrunMap,
        netzgrafikDto.nodes,
      );
    this.nodeService.mergeLabelNode(netzgrafikDto, nodeMap);
    this.nodeService.mergeConnections(
      netzgrafikDto,
      trainrunSectionMap,
      nodeMap,
    );
    this.nodeService.connectionsUpdated();
    this.nodeService.transitionsUpdated();
    this.trainrunService.mergeLabelTrainrun(netzgrafikDto, trainrunMap);
    this.noteService.createNewNoteFromDtoList(netzgrafikDto.freeFloatingTexts);
  }

  mergeNetzgrafikDto(netzgrafikDto: NetzgrafikDto) {
    this.nodeService.unselectAllNodes();
    const nodeMap = this.nodeService.mergeNodes(netzgrafikDto.nodes);
    const trainrunMap = this.trainrunService.mergeTrainruns(
      netzgrafikDto.trainruns,
    );
    this.trainrunSectionService.mergeTrainrunSections(
      netzgrafikDto.trainrunSections,
      nodeMap,
      trainrunMap,
      netzgrafikDto.nodes,
    );
    this.nodeService.mergeLabelNode(netzgrafikDto, nodeMap);
    this.trainrunService.mergeLabelTrainrun(netzgrafikDto, trainrunMap);
  }

  initializeDataServices() {
    // do not change the order of the following initialization procedure
    this.trainrunSectionService.initializeTrainrunSectionsWithReferencesToNodesAndTrainruns();
    this.nodeService.initializePortsWithReferencesToTrainrunSections();
    this.nodeService.initializeTransitionsWithReferencesToTrainrun();
    this.nodeService.initPortOrdering();
    this.trainrunSectionService.initializeTrainrunSectionRouting();
    this.nodeService.validateAllConnections();
    this.trainrunService.propagateInitialConsecutiveTimes();
    this.nodeService.nodesUpdated();
    this.nodeService.transitionsUpdated();
    this.nodeService.connectionsUpdated();
    this.trainrunSectionService.trainrunSectionsUpdated();
    this.noteService.notesUpdated();
    this.labelService.labelUpdated();
    this.labelGroupService.labelGroupUpdated();

    this.netzgrafikColoringService.generateGlobalStyles(
      this.getTrainrunCategories(),
      this.trainrunSectionService.getTrainrunSections(),
    );
    this.netzgrafikColoringService.netzgrafikColorUpdated();
  }

  triggerViewUpdate() {
    this.nodeService.nodesUpdated();
    this.nodeService.transitionsUpdated();
    this.nodeService.connectionsUpdated();
    this.trainrunSectionService.trainrunSectionsUpdated();
    this.noteService.notesUpdated();
    this.labelService.labelUpdated();
    this.labelGroupService.labelGroupUpdated();
  }

  getNetzgrafikDto(): NetzgrafikDto {
    const metadata = this.netzgrafikDtoStore.netzgrafikDto.metadata;
    metadata.netzgrafikColors = this.netzgrafikColoringService.getDtos();

    return {
      nodes: this.nodeService.getDtos(),
      trainrunSections: this.trainrunSectionService.getDtos(),
      trainruns: this.trainrunService.getDtos(),
      resources: this.resourceService.getDtos(),
      metadata: metadata,
      freeFloatingTexts: this.noteService.getDtos(),
      labels: this.labelService.getDtos(),
      labelGroups: this.labelGroupService.getDtos(),
      filterData: this.filterService.getDtos(),
    };
  }

  getTrainrunCategory(categoryId: number): TrainrunCategory {
    return this.netzgrafikDtoStore.netzgrafikDto.metadata.trainrunCategories.find(
      (trainrunCategory) => trainrunCategory.id === categoryId,
    );
  }

  getTrainrunFrequency(frequencyId: number): TrainrunFrequency {
    if (frequencyId > 5) {
      frequencyId = 5; // ensure no overflow happens (HVZ, zeitweise -> remove)
    }
    return this.netzgrafikDtoStore.netzgrafikDto.metadata.trainrunFrequencies.find(
      (trainrunFrequency) => trainrunFrequency.id === frequencyId,
    );
  }

  getTrainrunTimeCategory(timeCategoryId: number): TrainrunTimeCategory {
    if (timeCategoryId === undefined) {
      timeCategoryId = 0; // set to default
    }
    return this.netzgrafikDtoStore.netzgrafikDto.metadata.trainrunTimeCategories.find(
      (trainrunTimeCategory) => trainrunTimeCategory.id === timeCategoryId,
    );
  }

  getTrainrunCategories(): TrainrunCategory[] {
    return this.netzgrafikDtoStore.netzgrafikDto.metadata.trainrunCategories;
  }

  getTrainrunFrequencies(): TrainrunFrequency[] {
    return this.netzgrafikDtoStore.netzgrafikDto.metadata.trainrunFrequencies;
  }

  getTrainrunTimeCategories(): TrainrunTimeCategory[] {
    return this.netzgrafikDtoStore.netzgrafikDto.metadata
      .trainrunTimeCategories;
  }

  getBPStammdaten(betriebspunktName: string): Stammdaten {
    return this.stammdatenService.getBPStammdaten(betriebspunktName);
  }

  /**
   * Returns an observable that emits if the current NetzgrafikDto in the editor is modified by the user.
   *
   * @param changeTimeout time [ms] to await further changes before emitting a change event
   */
  getNetzgrafikChangesObservable(changeTimeout: number): Observable<void> {
    return combineLatest([
      this.nodeService.nodes,
      this.trainrunSectionService.trainrunSections,
      this.trainrunService.trainruns,
      this.stammdatenService.stammdatenObservable,
      this.resourceService.resourceObservable,
      this.noteService.notes,
      this.labelService.labels,
      this.labelGroupService.labelGroups,
      this.filterService.filterSetting,
    ]).pipe(
      skip(1),
      map(() => null),
      debounceTime(changeTimeout),
    );
  }

  getNetzgrafikLoadedInfo(): Observable<NetzgrafikLoadedInfo> {
    return this.netzgrafikLoadedInfo;
  }

  compareVariants(netzgrafikDto1: NetzgrafikDto, netzgrafikDto2: NetzgrafikDto): NetzgrafikDto {
    // first,go through all stations of Variant 1 and count the connections
    const connectionMap1 =  this.countConnections(netzgrafikDto1);
    // first,go through all stations of Variant 2 and count the connections
    const connectionMap2 = this.countConnections(netzgrafikDto2);
    // compare the counts of each station with the same ID for Variant 1 and 2
    const nodesComparisonMap = this.compareConnectionCounts(connectionMap1, connectionMap2);

    const comparisonNetzgrafikDto = this.updateConnectionsForNetzgrafikDto(netzgrafikDto1, nodesComparisonMap);

    this.loadNetzgrafikDto(comparisonNetzgrafikDto);
    return comparisonNetzgrafikDto;
  }

  countConnections(netzgrafikDto : NetzgrafikDto): Map<string, number> {
    let map = new Map()

    netzgrafikDto.nodes.forEach(node => {
      let connectionsCount = 0;
      let sourceTrainrunSections = netzgrafikDto.trainrunSections.filter((trainrunSection) => trainrunSection.sourceNodeId == node.id);

      netzgrafikDto.trainrunSections.filter((trainrunSection) => trainrunSection.targetNodeId == node.id).forEach(trainrunSection => {
        // TODO: add trainrunSections when frequency < 60'
        let newTrainrunSection : TrainrunSectionDto = {
          ...trainrunSection,
          sourceNodeId: trainrunSection.targetNodeId,
          targetNodeId: trainrunSection.sourceNodeId,

          sourceDeparture: trainrunSection.targetDeparture,
          targetDeparture: trainrunSection.sourceDeparture,

          sourceArrival: trainrunSection.targetArrival,
          targetArrival: trainrunSection.sourceArrival,
        }
        sourceTrainrunSections.push(newTrainrunSection);
      });

      sourceTrainrunSections.forEach(trainrunSection => {
        let minimalDepartureTime = trainrunSection.sourceArrival.time + node.connectionTime;
        sourceTrainrunSections.forEach(trainrunSection2 => {
          if (trainrunSection2.id != trainrunSection.id && ((trainrunSection2.sourceDeparture.time - minimalDepartureTime + 60) % 60 <= 15)
          ) {
            connectionsCount += 1;
          }
        })        
      });

      // transition if stop and both directions
      let stoppingTransitionsCount = 0;

      node.transitions.forEach(transition => {
        if (!transition.isNonStopTransit) stoppingTransitionsCount += 2;
      })

      map.set(node.betriebspunktName, (connectionsCount + stoppingTransitionsCount) / 2);
    })

    return map;
  }

  compareConnectionCounts(connectionMap1 : Map<string, number>, connectionMap2 : Map<string, number>): Map<string, number> {
    let result = new Map();
    for (let [key, val1] of connectionMap1) {
      result.set(key, val1 - connectionMap2.get(key));
    }
    return result;
  }

  updateConnectionsForNetzgrafikDto(netzgrafikDto : NetzgrafikDto, nodesComparisonMap : Map<string, number>) : NetzgrafikDto {
    let newNetzgrafikDto = {...netzgrafikDto};
    newNetzgrafikDto.nodes.map(node => {
      node.connectionTime = nodesComparisonMap.get(node.betriebspunktName);
    })
    return newNetzgrafikDto;
  }


}
