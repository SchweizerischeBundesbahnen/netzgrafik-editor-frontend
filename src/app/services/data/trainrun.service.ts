import {Trainrun} from "../../models/trainrun.model";
import {
  LabelDto,
  LabelRef,
  NetzgrafikDto,
  TrainrunCategory,
  TrainrunDto,
  TrainrunFrequency,
  TrainrunTimeCategory,
} from "../../data-structures/business.data.structures";
import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs";
import {NodeService} from "./node.service";
import {TrainrunSectionService} from "./trainrunsection.service";
import {DataService} from "./data.service";
import {Node} from "../../models/node.model";
import {TrainrunSection} from "../../models/trainrunsection.model";
import {GeneralViewFunctions} from "../../view/util/generalViewFunctions";
import {NonStopTrainrunIterator, TrainrunIterator,} from "../util/trainrun.iterator";
import {LogService} from "../../logger/log.service";
import {LabelService} from "./label.serivce";
import {FilterService} from "../ui/filter.service";
import {Transition} from "../../models/transition.model";
import {Port} from "../../models/port.model";
import {Connection} from "../../models/connection.model";

@Injectable({
  providedIn: "root",
})
export class TrainrunService {
  // Description of observable data service: https://coryrylan.com/blog/angular-observable-data-services
  trainrunsSubject = new BehaviorSubject<Trainrun[]>([]);
  readonly trainruns = this.trainrunsSubject.asObservable();

  trainrunsStore: { trainruns: Trainrun[] } = {trainruns: []}; // store the data in memory

  private dataService: DataService = null;
  private nodeService: NodeService = null;
  private trainrunSectionService: TrainrunSectionService = null;

  constructor(
    private logService: LogService,
    private labelService: LabelService,
    private filterService: FilterService,
  ) {
  }

  setDataService(dataService: DataService) {
    this.dataService = dataService;
  }

  public setNodeService(nodeService: NodeService) {
    this.nodeService = nodeService;
  }

  public setTrainrunSectionService(
    trainrunSectionService: TrainrunSectionService,
  ) {
    this.trainrunSectionService = trainrunSectionService;
  }

  setTrainrunData(trainrunsDto: TrainrunDto[]) {
    this.trainrunsStore.trainruns = trainrunsDto.map((trainrunDto) => {
      const trainrun = new Trainrun(trainrunDto);
      trainrun.setTrainrunCategory(
        this.dataService.getTrainrunCategory(trainrunDto.categoryId),
      );
      trainrun.setTrainrunFrequency(
        this.dataService.getTrainrunFrequency(trainrunDto.frequencyId),
      );
      trainrun.setTrainrunTimeCategory(
        this.dataService.getTrainrunTimeCategory(
          trainrunDto.trainrunTimeCategoryId,
        ),
      );
      return trainrun;
    });
  }

  createNewTrainrunsFromDtoList(trainruns: TrainrunDto[]): Map<number, number> {
    const trainrunMap = new Map<number, number>();
    trainruns.forEach((trainrun) => {
      // create new trainrun and add it to trainrun map
      trainrunMap.set(
        trainrun.id,
        this.createNewTrainrunFromDto(trainrun).getId(),
      );
    });
    return trainrunMap;
  }

  mergeTrainruns(trainruns: TrainrunDto[]): Map<number, number> {
    const trainrunMap = new Map<number, number>();
    trainruns.forEach((trainrun) => {
      const equalTrainrun = this.trainrunsStore.trainruns.find(
        (tr) =>
          tr.getTitle() === trainrun.name &&
          tr.getTrainrunCategory().id === trainrun.categoryId,
      );
      if (equalTrainrun !== undefined) {
        // just link found trainrun with existing one
        trainrunMap.set(trainrun.id, equalTrainrun.getId());
      } else {
        // create new trainrun and add it to trainrun map
        trainrunMap.set(
          trainrun.id,
          this.createNewTrainrunFromDto(trainrun).getId(),
        );
      }
    });
    return trainrunMap;
  }

  mergeLabelTrainrun(
    netzgrafikDto: NetzgrafikDto,
    trainrunMap: Map<number, number>,
  ) {
    netzgrafikDto.trainruns.forEach((trainrun) => {
      const newTrainrunId = trainrunMap.get(trainrun.id);
      const newTrainrun = this.getTrainrunFromId(newTrainrunId);
      trainrun.labelIds.forEach((labelsId) => {
        const labelDtos: LabelDto[] = netzgrafikDto.labels.filter(
          (label) => label.id === labelsId,
        );
        labelDtos.forEach((labelDto) => {
          const label = this.labelService.getOrCreateLabel(
            labelDto.label,
            labelDto.labelRef,
          );
          if (!newTrainrun.getLabelIds().includes(label.getId())) {
            newTrainrun.getLabelIds().push(label.getId());
          }
        });
      });
    });
    this.labelService.labelUpdated();
  }

  getTrainrunFromId(trainrunId: number): Trainrun {
    return this.trainrunsStore.trainruns.find(
      (trainrun) => trainrun.getId() === trainrunId,
    );
  }

  getSelectedOrNewTrainrun(): Trainrun {
    let trainrun = this.trainrunsStore.trainruns.find((tr) => tr.selected());
    if (trainrun === undefined) {
      trainrun = new Trainrun();
      trainrun.setTrainrunCategory(
        this.dataService.getTrainrunCategory(
          Trainrun.DEFAULT_TRAINRUN_CATEGORY,
        ),
      );
      trainrun.setTrainrunFrequency(
        this.dataService.getTrainrunFrequency(
          Trainrun.DEFAULT_TRAINRUN_FREQUENCY,
        ),
      );
      trainrun.setTrainrunTimeCategory(
        this.dataService.getTrainrunTimeCategory(
          Trainrun.DEFAULT_TRAINRUN_TIME_CATEGORY,
        ),
      );
      trainrun.select();
      this.trainrunsStore.trainruns.push(trainrun);
    }
    return trainrun;
  }

  deleteTrainrun(trainrun: Trainrun, enforceUpdate = true) {
    const deletetLabelIds = this.labelService.clearLabel(
      trainrun.getLabelIds(),
      this.makeLabelIDCounterMap(this.getTrainruns()),
    );
    this.filterService.clearDeletetFilterTrainrunLabels(deletetLabelIds);
    this.trainrunsStore.trainruns.forEach((tr) => tr.unselect());
    this.trainrunsStore.trainruns = this.trainrunsStore.trainruns.filter(
      (tr) => tr.getId() !== trainrun.getId(),
    );
    if (enforceUpdate) {
      this.trainrunsUpdated();
    }
  }

  getSelectedTrainrun(): Trainrun {
    const selectedTrainrun: Trainrun = this.trainrunsStore.trainruns.find(
      (tr) => tr.selected(),
    );
    if (selectedTrainrun !== undefined) {
      return selectedTrainrun;
    } else {
      return null;
    }
  }

  setTrainrunAsSelected(trainrunId: number, enforceUpdate = true) {
    this.trainrunsStore.trainruns.forEach((tr) => tr.unselect());
    const trainrun = this.getTrainrunFromId(trainrunId);
    if (trainrun !== undefined) {
      trainrun.select();
      if (enforceUpdate) {
        this.trainrunsUpdated();
      }
    }
  }

  unselectAllTrainruns() {
    this.trainrunsStore.trainruns.forEach((trainrun) => trainrun.unselect());
    this.trainrunsUpdated();
  }

  isAnyTrainrunSelected(): boolean {
    const selectedTrainrun = this.trainrunsStore.trainruns.find((trainrun) =>
      trainrun.selected(),
    );
    return selectedTrainrun !== undefined;
  }

  updateTrainrunFrequency(
    trainrun: Trainrun,
    frequency: TrainrunFrequency,
    offset: number,
  ): number {
    const oldFreq = trainrun.getFrequency();
    const newFreq = frequency.frequency;

    const freqOffset = (frequency.offset + offset) % newFreq;
    this.getTrainrunFromId(trainrun.getId()).setTrainrunFrequency(frequency);

    this.trainrunSectionService
      .getAllTrainrunSectionsForTrainrun(trainrun.getId())
      .forEach((ts: TrainrunSection) => {
        const sourceDeparture =
          (60 + ts.getSourceDeparture() + freqOffset) % 60;
        const targetArrival = (60 + ts.getTargetArrival() + freqOffset) % 60;
        this.trainrunSectionService.updateTrainrunSectionTime(
          ts.getId(),
          (60 - sourceDeparture) % 60,
          sourceDeparture,
          targetArrival,
          (60 - targetArrival) % 60,
          ts.getTravelTime(),
        );
      });

    this.nodeService.reorderPortsOnNodesForTrainrun(trainrun);
    this.propagateTrainrunInitialConsecutiveTimes(trainrun);
    this.trainrunSectionService.trainrunSectionsUpdated();

    this.trainrunsUpdated();
    return freqOffset;
  }

  updateTrainrunCategory(trainrun: Trainrun, category: TrainrunCategory) {
    this.getTrainrunFromId(trainrun.getId()).setTrainrunCategory(category);
    this.nodeService.reorderPortsOnNodesForTrainrun(trainrun);
    this.trainrunsUpdated();
  }

  updateTrainrunTimeCategory(
    trainrun: Trainrun,
    timeCategory: TrainrunTimeCategory,
  ) {
    this.getTrainrunFromId(trainrun.getId()).setTrainrunTimeCategory(
      timeCategory,
    );
    this.nodeService.reorderPortsOnNodesForTrainrun(trainrun);
    this.trainrunsUpdated();
  }

  updateTrainrunTitle(trainrun: Trainrun, title: string) {
    this.getTrainrunFromId(trainrun.getId()).setTitle(title);
    this.nodeService.reorderPortsOnNodesForTrainrun(trainrun);
    this.trainrunsUpdated();
  }

  getTrainruns(): Trainrun[] {
    return Object.assign({}, this.trainrunsStore).trainruns;
  }

  getAllTrainrunLabels(): string[] {
    let trainrunLabels = [];
    this.getTrainruns().forEach((t) =>
      this.labelService
        .getTextLabelsFromIds(t.getLabelIds())
        .forEach((label) => trainrunLabels.push(label)),
    );
    trainrunLabels = trainrunLabels.filter((v, i, a) => a.indexOf(v) === i);
    trainrunLabels.sort();
    return trainrunLabels;
  }

  visibleTrainrunsDeleteLabel(labelRef: string) {
    const labelObject = this.labelService.getLabelFromLabelAndLabelRef(
      labelRef,
      LabelRef.Trainrun,
    );
    if (labelObject === undefined) {
      return;
    }
    this.getTrainruns().forEach((t: Trainrun) => {
      if (this.filterService.filterTrainrun(t)) {
        this.filterService.clearDeletetFilterTrainrunLabel(labelObject.getId());
        t.setLabelIds(
          t
            .getLabelIds()
            .filter((labelId: number) => labelId !== labelObject.getId()),
        );
      }
    });

    const trainruns = this.getTrainruns().find(
      (t: Trainrun) =>
        t
          .getLabelIds()
          .find((labelId: number) => labelId === labelObject.getId()) !==
        undefined,
    );

    if (trainruns === undefined) {
      this.labelService.deleteLabel(labelObject.getId());
    }
    this.trainrunsUpdated();
  }

  visibleTrainrunsSetLabel(labelRef: string) {
    const labelObject = this.labelService.getLabelFromLabelAndLabelRef(
      labelRef,
      LabelRef.Trainrun,
    );
    if (labelObject === undefined) {
      return;
    }
    this.getTrainruns().forEach((t) => {
      if (this.filterService.filterTrainrun(t)) {
        const labelIds: number[] = t.getLabelIds();
        labelIds.push(labelObject.getId());
        t.setLabelIds(labelIds.filter((v, i, a) => a.indexOf(v) === i));
      }
    });
    this.trainrunsUpdated();
  }

  getConnectedTrainrunIdsFirstOrder(trainrunId: number): number[] {
    const trainrunSections =
      this.trainrunSectionService.getAllTrainrunSectionsForTrainrun(trainrunId);
    let connectedTrainrunIds: number[] = [];
    for (const trainsection of trainrunSections) {
      connectedTrainrunIds = connectedTrainrunIds.concat(
        trainsection.getSourceNode().getAllConnectedTrainruns(trainsection),
      );
      connectedTrainrunIds = connectedTrainrunIds.concat(
        trainsection.getTargetNode().getAllConnectedTrainruns(trainsection),
      );
    }
    return [...new Set(connectedTrainrunIds)];
  }

  getDtos() {
    return this.trainrunsStore.trainruns.map((trainrun) => trainrun.getDto());
  }

  splitTrainrunIntoTwoParts(t: Transition) {
    const trainrun2split = t.getTrainrun();
    const portId1 = t.getPortId1();
    const portId2 = t.getPortId2();

    const node = this.nodeService.getNodeFromTransition(t);
    node.removeTransitionFromId(t);

    const port1 = node.getPort(portId1);
    const port2 = node.getPort(portId2);
    const trainrunSection2 = port2.getTrainrunSection();
    const newTrainrun =
      this.duplicateTrainrun(
        trainrunSection2.getTrainrunId(),
        false,
        "-2");

    trainrunSection2.setTrainrun(newTrainrun);
    const iterator = this.getIterator(node, trainrunSection2);
    while (iterator.hasNext()) {
      iterator.next();
      const trans = iterator.current().node.getTransition(iterator.current().trainrunSection.getId());
      if (trans) {
        trans.setTrainrun(newTrainrun);
      }
      iterator.current().trainrunSection.setTrainrun(newTrainrun);
    }

    this.nodeService.checkAndFixMissingTransitions(
      port1.getTrainrunSection().getSourceNodeId(),
      port1.getTrainrunSection().getTargetNodeId(),
      port1.getTrainrunSection().getId(),
      false,
    );

    trainrun2split.unselect();
    newTrainrun.select();
    this.nodeService.transitionsUpdated();
    this.trainrunsUpdated();
  }

  combineTwoTrainruns(node: Node, port1: Port, port2: Port) {
    const trainrun1 = port1.getTrainrunSection().getTrainrun();
    const trainrun2 = port2.getTrainrunSection().getTrainrun();
    if (trainrun1.getId() === trainrun2.getId()) {
      return;
    }
    const trainrunSection = port2.getTrainrunSection();
    trainrunSection.setTrainrun(trainrun1);
    const iterator = this.getIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      iterator.next();
      const trans = iterator.current().node.getTransition(iterator.current().trainrunSection.getId());
      if (trans) {
        trans.setTrainrun(trainrun1);
      }
      iterator.current().trainrunSection.setTrainrun(trainrun1);
    }

    const trans1 = node.getTransitionFromPortId(port1.getId());
    const trans2 = node.getTransitionFromPortId(port2.getId());
    if (trans1 === undefined && trans2 === undefined) {
      node.addTransitionAndComputeRouting(port1, port2, trainrun1);
    }

    const connections2delete = node.getConnections().filter((c: Connection) => {
      return (c.getPortId1() === port1.getId() && c.getPortId2() === port2.getId()) ||
        (c.getPortId1() === port2.getId() && c.getPortId2() === port1.getId());
    });
    connections2delete.forEach((c: Connection) => {
      node.removeConnection(c.getId());
    });

    trainrun1.unselect();
    trainrun2.unselect();

    this.deleteTrainrun(trainrun2, false);

    trainrun1.select();
    this.nodeService.reorderPortsOnNodesForTrainrun(trainrun1, false);
    this.trainrunsUpdated();
    this.nodeService.nodesUpdated();
    this.nodeService.connectionsUpdated();
    this.nodeService.transitionsUpdated();
  }

  duplicateTrainrun(
    trainrunId: number,
    enforceUpdate = true,
    postfix = " COPY",
  ): Trainrun {
    const trainrun = this.getTrainrunFromId(trainrunId);
    const copiedtrainrun = new Trainrun();
    copiedtrainrun.setTrainrunCategory(trainrun.getTrainrunCategory());
    copiedtrainrun.setTrainrunFrequency(trainrun.getTrainrunFrequency());
    copiedtrainrun.setTrainrunTimeCategory(trainrun.getTrainrunTimeCategory());
    copiedtrainrun.setTitle(trainrun.getTitle() + postfix);
    copiedtrainrun.setLabelIds(trainrun.getLabelIds());
    this.trainrunsStore.trainruns.push(copiedtrainrun);
    return copiedtrainrun;
  }

  duplicateTrainrunAndSections(
    trainrunId: number,
    enforceUpdate = true,
    postfix = " COPY",
  ): Trainrun {
    const copiedtrainrun = this.duplicateTrainrun(trainrunId, enforceUpdate, postfix);
    this.trainrunSectionService.copyAllTrainrunSectionsForTrainrun(
      trainrunId,
      copiedtrainrun.getId(),
    );
    this.setTrainrunAsSelected(copiedtrainrun.getId(), false);
    if (enforceUpdate) {
      this.nodeService.transitionsUpdated();
      this.nodeService.nodesUpdated();
      this.trainrunsUpdated();
    }
    return copiedtrainrun;
  }

  setLabels(trainrunId: number, labels: string[]) {
    const trainrun = this.getTrainrunFromId(trainrunId);
    const labelIds: number[] = [];
    labels.forEach((label) => {
      labelIds.push(
        this.labelService.getOrCreateLabel(label, LabelRef.Trainrun).getId(),
      );
    });
    const deletetLabelIds = this.labelService.clearLabel(
      this.findClearedLabel(trainrun, labelIds),
      this.makeLabelIDCounterMap(this.getTrainruns()),
    );
    this.filterService.clearDeletetFilterTrainrunLabels(deletetLabelIds);
    trainrun.setLabelIds(labelIds);
    this.trainrunsUpdated();
  }

  trainrunsUpdated() {
    this.trainrunsSubject.next(
      Object.assign({}, this.trainrunsStore).trainruns,
    );
  }

  propagateInitialConsecutiveTimes() {
    this.trainrunsStore.trainruns.forEach((trainrun) => {
      this.propagateTrainrunInitialConsecutiveTimes(trainrun);
    });
  }

  propagateTrainrunInitialConsecutiveTimes(trainrun: Trainrun) {
    const startNode = this.getStartNodeWithTrainrunId(trainrun.getId());
    const ts = startNode.getTrainrunSection(trainrun);
    this.propagateConsecutiveTimesForTrainrun(ts.getId());
  }

  propagateConsecutiveTimesForTrainrun(trainrunSectionId: number) {
    const trainrunSection =
      this.trainrunSectionService.getTrainrunSectionFromId(trainrunSectionId);
    if (trainrunSection === undefined) {
      return;
    }
    // propagate Consecutive Times Forward
    const bothEndNodes = this.getBothEndNodesWithTrainrunId(
      trainrunSection.getTrainrunId(),
    );
    const startForwardNode = GeneralViewFunctions.getLeftOrTopNode(
      bothEndNodes.endNode1,
      bothEndNodes.endNode2,
    );
    const startBackwardNode =
      bothEndNodes.endNode1.getId() === startForwardNode.getId()
        ? bothEndNodes.endNode2
        : bothEndNodes.endNode1;
    const arrivalTime = this.propagateConsecutiveTimes(
      startForwardNode,
      startForwardNode.getStartTrainrunSection(trainrunSection.getTrainrunId()),
      trainrunSection.getFrequencyOffset(),
    );
    // propagate Consecutive Times Backward
    const freq = trainrunSection.getTrainrun().getTrainrunFrequency().frequency;
    const restFreqArrivalTime = Math.floor(arrivalTime / freq) * freq;
    const freqDependantArrivalTime = arrivalTime - restFreqArrivalTime;
    let offset = freq - freqDependantArrivalTime;
    offset += restFreqArrivalTime;
    offset = Math.floor(offset / 60) * 60;

    this.propagateConsecutiveTimes(
      startBackwardNode,
      startBackwardNode.getStartTrainrunSection(
        trainrunSection.getTrainrunId(),
      ),
      offset,
    );
  }

  getStartNodeWithTrainrunId(trainrunId: number): Node {
    const bothEndNodes = this.getBothEndNodesWithTrainrunId(trainrunId);
    return GeneralViewFunctions.getLeftOrTopNode(
      bothEndNodes.endNode1,
      bothEndNodes.endNode2,
    );
  }

  getEndNode(node: Node, trainrunSection: TrainrunSection): Node {
    const iterator = this.getIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      iterator.next();
    }
    return iterator.current().node;
  }

  getNodePathToEnd(node: Node, trainrunSection: TrainrunSection): Node[] {
    const path: Node[] = [node];
    const iterator = this.getIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      iterator.next();
      path.push(iterator.current().node);
    }
    return path;
  }

  getLastNonStopNode(node: Node, trainrunSection: TrainrunSection): Node {
    const iterator = this.getNonStopIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      iterator.next();
    }
    return iterator.current().node;
  }

  getBothLastNonStopNodes(trainrunSection: TrainrunSection) {
    const sourceNode = trainrunSection.getSourceNode();
    const targetNode = trainrunSection.getTargetNode();
    return {
      lastNonStopNode1: this.getLastNonStopNode(sourceNode, trainrunSection),
      lastNonStopNode2: this.getLastNonStopNode(targetNode, trainrunSection),
    };
  }

  getLastNonStopTrainrunSection(
    node: Node,
    trainrunSection: TrainrunSection,
  ): TrainrunSection {
    const iterator = this.getNonStopIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      iterator.next();
    }
    return iterator.current().trainrunSection;
  }

  getBothLastNonStopTrainrunSections(trainrunSection: TrainrunSection) {
    const sourceNode = trainrunSection.getSourceNode();
    const targetNode = trainrunSection.getTargetNode();
    return {
      lastNonStopTrainrunSection1: this.getLastNonStopTrainrunSection(
        sourceNode,
        trainrunSection,
      ),
      lastNonStopTrainrunSection2: this.getLastNonStopTrainrunSection(
        targetNode,
        trainrunSection,
      ),
    };
  }

  sumTravelTimeUpToLastNonStopNode(
    node: Node,
    trainrunSection: TrainrunSection,
  ): number {
    let summedTravelTime = 0;
    const iterator = this.getNonStopIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      const nextPair = iterator.next();
      summedTravelTime += nextPair.trainrunSection.getTravelTime();
    }
    return summedTravelTime;
  }

  getCumulativeTravelTime(trainrunSection: TrainrunSection) {
    const iterator = this.getNonStopIterator(
      trainrunSection.getSourceNode(),
      trainrunSection,
    );
    while (iterator.hasNext()) {
      iterator.next();
    }
    return this.sumTravelTimeUpToLastNonStopNode(
      iterator.current().node,
      iterator.current().trainrunSection,
    );
  }

  getCumSumTravelTimeNodePathToLastNonStopNode(n: Node, ts: TrainrunSection) {
    const data = [
      {
        node: n,
        sumTravelTime: 0,
        trainrunSection: ts,
      },
    ];
    let summedTravelTime = 0;
    const iterator = this.getNonStopIterator(n, ts);
    while (iterator.hasNext()) {
      const nextPair = iterator.next();
      summedTravelTime += nextPair.trainrunSection.getTravelTime();
      data.push({
        node: nextPair.node,
        sumTravelTime: summedTravelTime,
        trainrunSection: nextPair.trainrunSection,
      });
    }
    return data;
  }

  getCumulativeTravelTimeAndNodePath(trainrunSection: TrainrunSection) {
    const iterator = this.getNonStopIterator(
      trainrunSection.getSourceNode(),
      trainrunSection,
    );
    while (iterator.hasNext()) {
      iterator.next();
    }
    return this.getCumSumTravelTimeNodePathToLastNonStopNode(
      iterator.current().node,
      iterator.current().trainrunSection,
    );
  }

  isStartEqualsEndNode(trainrunSectionId: number): boolean {
    const trainrunSection =
      this.trainrunSectionService.getTrainrunSectionFromId(trainrunSectionId);
    const startNode = this.getEndNode(
      trainrunSection.getSourceNode(),
      trainrunSection,
    );
    const endNode = this.getEndNode(
      trainrunSection.getTargetNode(),
      trainrunSection,
    );
    return startNode.getId() === endNode.getId();
  }

  public getIterator(node: Node, trainrunSection: TrainrunSection) {
    return new TrainrunIterator(this.logService, node, trainrunSection);
  }

  public getNonStopIterator(node: Node, trainrunSection: TrainrunSection) {
    return new NonStopTrainrunIterator(this.logService, node, trainrunSection);
  }

  getBothEndNodesWithTrainrunId(trainrunId: number) {
    const trainrunSections: TrainrunSection[] =
      this.trainrunSectionService.getTrainrunSections();
    const trainrunSection = trainrunSections.find(
      (trs) => trs.getTrainrunId() === trainrunId,
    );
    const sourceNode = trainrunSection.getSourceNode();
    const targetNode = trainrunSection.getTargetNode();
    const endNode1 = this.getEndNode(sourceNode, trainrunSection);
    const endNode2 = this.getEndNode(targetNode, trainrunSection);
    return {endNode1, endNode2};
  }

  private createNewTrainrunFromDto(trainrun: TrainrunDto): Trainrun {
    const newTrainrun = new Trainrun();
    newTrainrun.setTrainrunCategory(
      this.dataService.getTrainrunCategory(trainrun.categoryId),
    );
    newTrainrun.setTrainrunFrequency(
      this.dataService.getTrainrunFrequency(trainrun.frequencyId),
    );
    newTrainrun.setTrainrunTimeCategory(
      this.dataService.getTrainrunTimeCategory(trainrun.trainrunTimeCategoryId),
    );
    newTrainrun.setTitle(trainrun.name);
    newTrainrun.setLabelIds(trainrun.labelIds);
    this.trainrunsStore.trainruns.push(newTrainrun);
    return newTrainrun;
  }

  private propagateConsecutiveTimes(
    node: Node,
    trainrunSection: TrainrunSection,
    offset: number,
  ): number {
    if (trainrunSection === undefined) {
      return 0;
    }
    let accumulatedTime = node.getDepartureTime(trainrunSection) + offset;
    const iterator = this.getIterator(node, trainrunSection);
    while (iterator.hasNext()) {
      const nextPair = iterator.next();
      nextPair.node
        .getOppositeNode(nextPair.trainrunSection)
        .setDepartureConsecutiveTime(nextPair.trainrunSection, accumulatedTime);

      const oppositeNodeDepartureTime = nextPair.node
        .getOppositeNode(nextPair.trainrunSection)
        .getDepartureTime(nextPair.trainrunSection);
      const arrivalTime = nextPair.node.getArrivalTime(
        nextPair.trainrunSection,
      );
      const travelTime =
        arrivalTime < oppositeNodeDepartureTime
          ? arrivalTime + 60 - oppositeNodeDepartureTime
          : arrivalTime - oppositeNodeDepartureTime;
      accumulatedTime += travelTime;

      const travelTimeOffset =
        nextPair.trainrunSection.getTravelTime() -
        (nextPair.trainrunSection.getTravelTime() % 60);
      accumulatedTime += travelTimeOffset;

      nextPair.node.setArrivalConsecutiveTime(
        nextPair.trainrunSection,
        accumulatedTime,
      );

      let halteZeit = 0;
      if (!nextPair.node.isEndNode(nextPair.trainrunSection)) {
        const oldArrival = nextPair.node.getArrivalTime(
          nextPair.trainrunSection,
        );
        const trs = nextPair.node.getNextTrainrunSection(
          nextPair.trainrunSection,
        );
        const nextDeparture = nextPair.node.getDepartureTime(trs);
        halteZeit =
          nextDeparture < oldArrival
            ? nextDeparture + 60 - oldArrival
            : nextDeparture - oldArrival;
      }
      accumulatedTime += halteZeit;
    }
    return accumulatedTime;
  }

  private findClearedLabel(trainrun: Trainrun, labelIds: number[]) {
    return []
      .concat(trainrun.getLabelIds())
      .filter((oldlabelId) => !labelIds.includes(oldlabelId));
  }

  private makeLabelIDCounterMap(trainruns: Trainrun[]): Map<number, number> {
    const labelIDCauntMap = new Map<number, number>();
    trainruns.forEach((trainrun) => {
      trainrun.getLabelIds().forEach((labelId) => {
        let counter = labelIDCauntMap.get(labelId);
        if (counter === undefined) {
          counter = 0;
        }
        counter++;
        labelIDCauntMap.set(labelId, counter);
      });
    });
    return labelIDCauntMap;
  }
}
