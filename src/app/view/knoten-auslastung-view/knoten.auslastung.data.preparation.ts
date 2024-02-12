import {Transition} from '../../models/transition.model';
import {TrainrunSection} from '../../models/trainrunsection.model';
import {Node} from '../../models/node.model';
import {ResourceService} from '../../services/data/resource.service';
import {TrainrunSectionService} from '../../services/data/trainrunsection.service';
import {TrainrunService} from '../../services/data/trainrun.service';

export class KnotenAuslastungDataPreparation {
  static MAX_NR_MINUTES = 60;
  static MAX_NR_TRACKS = 50;

  private nbrUsedOfTrackFound = -1;
  private nodeDatas = [];
  private resourceDatas = [];
  private matrix: number[][];

  constructor(
    private trainrunService: TrainrunService,
    private resourceService: ResourceService,
    private trainrunSectionService: TrainrunSectionService,
  ) {}

  static getTrainrunLabel(trainrunSection: TrainrunSection): string {
    let trainrunName = trainrunSection.getTrainrun().getCategoryShortName();
    trainrunName += trainrunSection.getTrainrun().getTitle();
    return trainrunName;
  }

  addTrainrunSectionToMatrix(
    trainrunSectionObject: TrainrunSection,
    node: Node,
    isTargetNode: boolean,
  ) {
    for (let directionLoop = 0; directionLoop < 2; directionLoop += 1) {
      const haltezeit = node.getTrainrunCategoryHaltezeit();
      const delta = Math.floor(
        haltezeit[
          trainrunSectionObject.getTrainrun().getTrainrunCategory().fachCategory
        ].haltezeit,
      );
      let arrivalTime = isTargetNode
        ? trainrunSectionObject.getTargetArrivalConsecutiveTime()
        : trainrunSectionObject.getSourceArrivalConsecutiveTime();
      let targetNode = isTargetNode
        ? trainrunSectionObject.getTargetNode()
        : trainrunSectionObject.getSourceNode();
      if (directionLoop === 0) {
        arrivalTime =
          (isTargetNode
            ? trainrunSectionObject.getTargetDepartureConsecutiveTime()
            : trainrunSectionObject.getSourceDepartureConsecutiveTime()) -
          delta +
          60;
        targetNode = isTargetNode
          ? trainrunSectionObject.getSourceNode()
          : trainrunSectionObject.getTargetNode();
      }
      let freq = trainrunSectionObject.getFrequency();
      if (freq === null) {
        freq = 60;
      }
      for (let freqLoop = 0; freqLoop < 60; freqLoop += freq) {
        const freqArrivalTime = Math.round(arrivalTime + freqLoop) % 60;
        const freqDeparturetime = Math.round(freqArrivalTime + delta);
        let freeIdx = 0;
        for (
          let uLoop = freqArrivalTime;
          uLoop <= freqDeparturetime;
          uLoop += 1
        ) {
          while (freeIdx < KnotenAuslastungDataPreparation.MAX_NR_TRACKS - 1) {
            if (this.matrix[uLoop % 60][freeIdx] === undefined) {
              break;
            }
            freeIdx += 1;
          }
        }
        for (
          let uLoop = freqArrivalTime;
          uLoop <= freqDeparturetime;
          uLoop += 1
        ) {
          this.matrix[uLoop % 60][freeIdx] =
            trainrunSectionObject.getTrainrunId();
        }
        this.nbrUsedOfTrackFound = Math.max(this.nbrUsedOfTrackFound, freeIdx);
        this.nodeDatas.push({
          trainrunSection: trainrunSectionObject,
          name: KnotenAuslastungDataPreparation.getTrainrunLabel(
            trainrunSectionObject,
          ),
          tooltip: this.getTrainrunTooltip(trainrunSectionObject, targetNode),
          color: freeIdx,
          startAngle: (freqArrivalTime / 60) * (2 * Math.PI),
          endAngle: (freqDeparturetime / 60) * (2 * Math.PI),
          innerRadius: freeIdx,
          outerRadius: freeIdx,
        });
      }
    }
  }

  getRealStopTime(
    trainrunSection1: TrainrunSection,
    trainrunSection2: TrainrunSection,
    node: Node,
  ): number {
    let stopTime = 0;
    if (trainrunSection1.getSourceNodeId() === node.getId()) {
      if (trainrunSection2.getSourceNodeId() === node.getId()) {
        stopTime =
          trainrunSection2.getSourceDepartureConsecutiveTime() -
          trainrunSection1.getSourceArrivalConsecutiveTime();
      } else {
        stopTime =
          trainrunSection2.getTargetDepartureConsecutiveTime() -
          trainrunSection1.getSourceArrivalConsecutiveTime();
      }
    } else {
      if (trainrunSection2.getSourceNodeId() === node.getId()) {
        stopTime =
          trainrunSection2.getSourceDepartureConsecutiveTime() -
          trainrunSection1.getTargetArrivalConsecutiveTime();
      } else {
        stopTime =
          trainrunSection2.getTargetDepartureConsecutiveTime() -
          trainrunSection1.getTargetArrivalConsecutiveTime();
      }
    }
    return Math.abs(stopTime);
  }

  computeAuslastungsMatrix(node: Node) {
    if (node === undefined) {
      return;
    }
    this.matrix = new Array(KnotenAuslastungDataPreparation.MAX_NR_MINUTES)
      .fill(undefined)
      .map(() =>
        new Array(KnotenAuslastungDataPreparation.MAX_NR_TRACKS).fill(
          undefined,
        ),
      );

    this.nbrUsedOfTrackFound = -1;
    this.nodeDatas = [];
    this.resourceDatas = [];

    const sortedTransitions = Object.assign([], node.getTransitions());
    sortedTransitions.sort(
      (transition1: Transition, transition2: Transition) => {
        const trainrunSection11 = node
          .getPort(transition1.getPortId1())
          .getTrainrunSection();
        const trainrunSection12 = node
          .getPort(transition1.getPortId2())
          .getTrainrunSection();
        const trainrunSection21 = node
          .getPort(transition2.getPortId1())
          .getTrainrunSection();
        const trainrunSection22 = node
          .getPort(transition2.getPortId2())
          .getTrainrunSection();
        const delta1 = this.getRealStopTime(
          trainrunSection11,
          trainrunSection12,
          node,
        );
        const delta2 = this.getRealStopTime(
          trainrunSection21,
          trainrunSection22,
          node,
        );
        return delta2 - delta1; // sort in descending order
      },
    );

    sortedTransitions.forEach((transition: Transition) => {
      const trainrunSection11 = node
        .getPort(transition.getPortId1())
        .getTrainrunSection();
      const trainrunSection12 = node
        .getPort(transition.getPortId2())
        .getTrainrunSection();
      this.addTransitionsToMatrix(
        trainrunSection11,
        trainrunSection12,
        node.getId(),
      );
      const trainrunSection21 = node
        .getPort(transition.getPortId2())
        .getTrainrunSection();
      const trainrunSection22 = node
        .getPort(transition.getPortId1())
        .getTrainrunSection();
      this.addTransitionsToMatrix(
        trainrunSection21,
        trainrunSection22,
        node.getId(),
      );
    });

    this.trainrunSectionService
      .getTrainrunSections()
      .forEach((ts: TrainrunSection) => {
        if (
          ts.getTargetNodeId() === node.getId() &&
          node.getNextTrainrunSection(ts) === undefined
        ) {
          this.addTrainrunSectionToMatrix(ts, node, true);
        }
        if (
          ts.getSourceNodeId() === node.getId() &&
          node.getNextTrainrunSection(ts) === undefined
        ) {
          this.addTrainrunSectionToMatrix(ts, node, false);
        }
      });

    for (
      let trackLoop = 0;
      trackLoop <= Math.max(this.nbrUsedOfTrackFound, 0);
      trackLoop += 1
    ) {
      for (let timeLoop = 0; timeLoop < 60; timeLoop += 5) {
        this.resourceDatas.push({
          startAngle: ((timeLoop + 0.1) / 60) * 2 * Math.PI,
          endAngle: ((timeLoop + 4.9) / 60) * 2 * Math.PI,
          innerRadius: trackLoop,
          outerRadius: trackLoop,
          capacityLimitReached:
            trackLoop >=
            this.resourceService
              .getResource(node.getResourceId())
              .getCapacity(),
        });
      }
    }
  }

  getNrUsedTrackFound() {
    return this.nbrUsedOfTrackFound;
  }

  getNodesData() {
    return this.nodeDatas;
  }

  getResourcesData() {
    return this.resourceDatas;
  }

  private getTrainrunTooltip(
    trainrunSection: TrainrunSection,
    targetNode: Node,
  ): string {
    let trainrunName = trainrunSection.getTrainrun().getCategoryShortName();
    trainrunName += trainrunSection.getTrainrun().getTitle();
    const endNode1 = this.trainrunService.getEndNode(
      targetNode,
      trainrunSection,
    );
    trainrunName += ' &#x2192; ' + endNode1.getBetriebspunktName();
    return trainrunName;
  }

  private addTransitionsToMatrix(
    trainrunSection1: TrainrunSection,
    trainrunSection2: TrainrunSection,
    nodeId: number,
  ) {
    let targetNode = trainrunSection1.getSourceNode();
    let arrivalTime = trainrunSection1.getSourceArrivalConsecutiveTime();
    if (trainrunSection1.getSourceNode().getId() !== nodeId) {
      targetNode = trainrunSection1.getTargetNode();
      arrivalTime = trainrunSection1.getTargetArrivalConsecutiveTime();
    }
    let departureTime = trainrunSection2.getSourceDepartureConsecutiveTime();
    if (trainrunSection2.getSourceNode().getId() !== nodeId) {
      departureTime = trainrunSection2.getTargetDepartureConsecutiveTime();
    }

    const delta = Math.floor(departureTime - arrivalTime);

    let freq = trainrunSection1.getFrequency();
    if (freq === null) {
      freq = 60;
    }
    for (
      let freqLoop = 0;
      freqLoop < KnotenAuslastungDataPreparation.MAX_NR_MINUTES;
      freqLoop += freq
    ) {
      const freqArrivalTime = Math.round(arrivalTime + freqLoop) % 60;
      const freqDeparturetime = Math.round(freqArrivalTime + delta);

      let freeIdx = 0;
      for (
        let uLoop = freqArrivalTime;
        uLoop <= freqDeparturetime;
        uLoop += 1
      ) {
        while (freeIdx < KnotenAuslastungDataPreparation.MAX_NR_TRACKS - 1) {
          if (this.matrix[uLoop % 60][freeIdx] === undefined) {
            break;
          }
          freeIdx += 1;
        }
      }
      for (
        let uLoop = freqArrivalTime;
        uLoop <= freqDeparturetime;
        uLoop += 1
      ) {
        this.matrix[uLoop % 60][freeIdx] = trainrunSection1.getTrainrunId();
      }
      this.nbrUsedOfTrackFound = Math.max(this.nbrUsedOfTrackFound, freeIdx);
      this.nodeDatas.push({
        trainrunSection: trainrunSection1,
        name: KnotenAuslastungDataPreparation.getTrainrunLabel(
          trainrunSection1,
        ),
        tooltip: this.getTrainrunTooltip(trainrunSection1, targetNode),
        color: freeIdx,
        startAngle: (freqArrivalTime / 60) * (2 * Math.PI),
        endAngle: (freqDeparturetime / 60) * (2 * Math.PI),
        innerRadius: freeIdx,
        outerRadius: freeIdx,
      });
    }
  }
}
