import {TrainrunSection} from "../../models/trainrunsection.model";
import {Node} from "../../models/node.model";
import {GeneralViewFunctions} from "../../view/util/generalViewFunctions";
import {
  LeftAndRightLockStructure,
  LeftAndRightTimeStructure,
} from "../../view/dialogs/trainrun-and-section-dialog/trainrunsection-tab/trainrun-section-tab.component";
import {MathUtils} from "../../utils/math";
import {TrainrunSectionText} from "../../data-structures/technical.data.structures";
import {TrainrunService} from "../data/trainrun.service";
import {TrainrunSectionService} from "../data/trainrunsection.service";

export enum LeftAndRightElement {
  LeftDeparture,
  LeftArrival,
  RightDeparture,
  RightArrival,
  TravelTime,
  LeftRightTrainrunName,
  RightLeftTrainrunName,
}

export class TrainrunsectionHelper {
  constructor(private trainrunService: TrainrunService) {}

  static getSymmetricTime(time: number) {
    return time === 0 ? 0 : 60 - time;
  }

  static getDefaultTimeStructure(
    timeStructure: LeftAndRightTimeStructure,
    trainSection: TrainrunSection,
  ): LeftAndRightTimeStructure {
    return {
      leftDepartureTime: timeStructure.leftDepartureTime,
      leftArrivalTime: timeStructure.leftArrivalTime,
      rightDepartureTime: trainSection.getIsSymmetric()
        ? 0
        : timeStructure.rightDepartureTime,
      rightArrivalTime: trainSection.getIsSymmetric()
        ? 0
        : timeStructure.rightArrivalTime,
      travelTime: 0,
      returnTravelTime: timeStructure.returnTravelTime, // TODO: not sure of that
    };
  }

  static getTravelTime(
    totalTravelTime: number,
    summedTravelTime: number,
    travelTimeFactor: number,
    trsTravelTime: number,
    isRightNodeNonStopTransit: boolean,
    precision = TrainrunSectionService.TIME_PRECISION,
  ): number {
    if (isRightNodeNonStopTransit) {
      return Math.max(
        MathUtils.round(trsTravelTime * travelTimeFactor, precision),
        1.0 / Math.pow(10, precision),
      );
    } else {
      return Math.max(
        MathUtils.round(totalTravelTime - summedTravelTime, precision),
        1.0 / Math.pow(10, precision),
      );
    }
  }

  static getRightArrivalTime(
    timeStructure: LeftAndRightTimeStructure,
    precision = TrainrunSectionService.TIME_PRECISION,
  ): number {
    return MathUtils.round(
      (timeStructure.leftDepartureTime + (timeStructure.travelTime % 60)) % 60,
      precision,
    );
  }

  static getRightDepartureTime(
    timeStructure: LeftAndRightTimeStructure,
    precision = TrainrunSectionService.TIME_PRECISION,
  ): number {
    return MathUtils.round(
      this.getSymmetricTime(timeStructure.rightArrivalTime),
      precision,
    );
  }

  // TODO: unused
  static getLeftArrivalTime(
    timeStructure: LeftAndRightTimeStructure,
    precision = TrainrunSectionService.TIME_PRECISION,
  ): number {
    return MathUtils.round(
      (timeStructure.rightDepartureTime + (timeStructure.returnTravelTime % 60)) % 60,
      precision,
    );
  }

  // TODO: unused
  static getLeftDepartureTime(
    timeStructure: LeftAndRightTimeStructure,
    precision = TrainrunSectionService.TIME_PRECISION,
  ): number {
    return MathUtils.round(
      this.getSymmetricTime(timeStructure.leftArrivalTime),
      precision,
    );
  }

  getLeftBetriebspunkt(
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
  ): string[] {
    const leftNode = this.getLeftNode(trainrunSection, orderedNodes);
    return [
      leftNode.getBetriebspunktName(),
      "(" + leftNode.getFullName() + ")",
    ];
  }

  getRightBetriebspunkt(
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
  ): string[] {
    const rightNode = this.getRightNode(trainrunSection, orderedNodes);
    return [
      rightNode.getBetriebspunktName(),
      "(" + rightNode.getFullName() + ")",
    ];
  }

  getLeftRightSections(trainrunSection: TrainrunSection) {
    const bothLastNonStopTransitNodes =
      this.trainrunService.getBothLastNonStopNodes(trainrunSection);

    const startForwardBackwardNode =
      GeneralViewFunctions.getStartForwardAndBackwardNode(
        bothLastNonStopTransitNodes.lastNonStopNode1,
        bothLastNonStopTransitNodes.lastNonStopNode2,
      );
    const lastLeftNode = startForwardBackwardNode.startForwardNode;
    const lastRightNode = startForwardBackwardNode.startBackwardNode;

    const towardsSource = this.trainrunService.getLastNonStopTrainrunSection(
      trainrunSection.getSourceNode(),
      trainrunSection,
    );
    const towradsTarget = this.trainrunService.getLastNonStopTrainrunSection(
      trainrunSection.getTargetNode(),
      trainrunSection,
    );

    let leftSection = towradsTarget;
    let rightSection = towardsSource;
    if (
      towardsSource.getSourceNodeId() === lastLeftNode.getId() ||
      towardsSource.getTargetNodeId() === lastLeftNode.getId()
    ) {
      leftSection = towardsSource;
      rightSection = towradsTarget;
    }
    return {
      leftSection: leftSection,
      rightSection: rightSection,
      lastLeftNode: lastLeftNode,
      lastRightNode: lastRightNode,
    };
  }

  getSourceLock(
    lockStructure: LeftAndRightLockStructure,
    trainrunSection: TrainrunSection,
  ): boolean {
    const leftRight = this.getLeftRightSections(trainrunSection);
    if (trainrunSection.getSourceNodeId() === leftRight.lastLeftNode.getId()) {
      return lockStructure.leftLock;
    }
    if (trainrunSection.getSourceNodeId() === leftRight.lastRightNode.getId()) {
      return lockStructure.rightLock;
    }
    return undefined;
  }

  getTargetLock(
    lockStructure: LeftAndRightLockStructure,
    trainrunSection: TrainrunSection,
  ): boolean {
    const leftRight = this.getLeftRightSections(trainrunSection);
    if (trainrunSection.getTargetNodeId() === leftRight.lastLeftNode.getId()) {
      return lockStructure.leftLock;
    }
    if (trainrunSection.getTargetNodeId() === leftRight.lastRightNode.getId()) {
      return lockStructure.rightLock;
    }
    return undefined;
  }

  getLeftAndRightLock(
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
  ): LeftAndRightLockStructure {
    const lastLeftNode = this.getLeftNode(trainrunSection, orderedNodes);
    const lastRightNode = this.getRightNode(trainrunSection, orderedNodes);

    const towardsSource = this.trainrunService.getLastNonStopTrainrunSection(
      trainrunSection.getSourceNode(),
      trainrunSection,
    );
    const towradsTarget = this.trainrunService.getLastNonStopTrainrunSection(
      trainrunSection.getTargetNode(),
      trainrunSection,
    );
    let leftSection = towradsTarget;
    let rightSection = towardsSource;
    if (
      towardsSource.getSourceNodeId() === lastLeftNode.getId() ||
      towardsSource.getTargetNodeId() === lastLeftNode.getId()
    ) {
      leftSection = towardsSource;
      rightSection = towradsTarget;
    }

    return {
      leftLock:
        leftSection.getSourceNodeId() === lastLeftNode.getId()
          ? leftSection.getSourceArrivalLock() ||
            leftSection.getSourceDepartureLock()
          : leftSection.getTargetArrivalLock() ||
            leftSection.getTargetDepartureLock(),
      rightLock:
        rightSection.getSourceNodeId() === lastRightNode.getId()
          ? rightSection.getSourceArrivalLock() ||
            rightSection.getSourceDepartureLock()
          : rightSection.getTargetArrivalLock() ||
            rightSection.getTargetDepartureLock(),
      travelTimeLock: trainrunSection.getTravelTimeLock(),
    };
  }

  mapSelectedTimeElement(
    trainrunSectionSelectedText: TrainrunSectionText,
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
    forward: boolean,
  ): LeftAndRightElement | undefined {
    const leftNode = this.getLeftNode(trainrunSection, orderedNodes);
    const sourceNodeid = trainrunSection.getSourceNode().getId();
    const targetNodeid = trainrunSection.getTargetNode().getId();

    switch (trainrunSectionSelectedText) {
      case TrainrunSectionText.SourceDeparture:
        return sourceNodeid === leftNode.getId()
          ? LeftAndRightElement.LeftDeparture
          : LeftAndRightElement.RightDeparture;

      case TrainrunSectionText.SourceArrival:
        return sourceNodeid === leftNode.getId()
          ? LeftAndRightElement.LeftArrival
          : LeftAndRightElement.RightArrival;

      case TrainrunSectionText.TargetDeparture:
        return targetNodeid === leftNode.getId()
          ? LeftAndRightElement.LeftDeparture
          : LeftAndRightElement.RightDeparture;

      case TrainrunSectionText.TargetArrival:
        return targetNodeid === leftNode.getId()
          ? LeftAndRightElement.LeftArrival
          : LeftAndRightElement.RightArrival;

      case TrainrunSectionText.TrainrunSectionName:
        if (forward === undefined) {
          return leftNode.getId()
            ? LeftAndRightElement.LeftRightTrainrunName
            : LeftAndRightElement.RightLeftTrainrunName;
        }
        return sourceNodeid === leftNode.getId()
          ? forward
            ? LeftAndRightElement.LeftRightTrainrunName
            : LeftAndRightElement.RightLeftTrainrunName
          : forward
            ? LeftAndRightElement.RightLeftTrainrunName
            : LeftAndRightElement.LeftRightTrainrunName;

      case TrainrunSectionText.TrainrunSectionTravelTime:
        return LeftAndRightElement.TravelTime;
    }
    return undefined;
  }

  mapLeftAndRightTimes(
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
    timeStructure: LeftAndRightTimeStructure,
  ): LeftAndRightTimeStructure {
    const bothLastNonStopNodes =
      this.trainrunService.getBothLastNonStopNodes(trainrunSection);
    const leftNode = GeneralViewFunctions.getLeftOrTopNode(
      bothLastNonStopNodes.lastNonStopNode1,
      bothLastNonStopNodes.lastNonStopNode2,
    );
    const localLeftNode = this.getLeftNode(trainrunSection, orderedNodes);
    if (leftNode.getId() !== localLeftNode.getId()) {
      console.log("remap timeStructure", leftNode, localLeftNode);
      const mappedTimeStructure = TrainrunsectionHelper.getDefaultTimeStructure(
        timeStructure,
        trainrunSection,
      );
      mappedTimeStructure.rightArrivalTime = timeStructure.leftArrivalTime;
      mappedTimeStructure.leftArrivalTime = timeStructure.rightArrivalTime;
      mappedTimeStructure.rightDepartureTime = timeStructure.leftDepartureTime;
      mappedTimeStructure.leftDepartureTime = timeStructure.rightDepartureTime;
      mappedTimeStructure.travelTime = timeStructure.travelTime;
      mappedTimeStructure.returnTravelTime = timeStructure.returnTravelTime;
      return mappedTimeStructure;
    }
    return timeStructure;
  }

  getLeftAndRightTimes(
    trainrunSection: TrainrunSection,
    orderedNodes: Node[],
  ): LeftAndRightTimeStructure {
    const bothLastNonStopNodes =
      this.trainrunService.getBothLastNonStopNodes(trainrunSection);
    const bothLastNonStopTrainrunSections =
      this.trainrunService.getBothLastNonStopTrainrunSections(trainrunSection);
    const lastLeftNode = this.getLeftNode(trainrunSection, orderedNodes);
    const lastRightNode = this.getRightNode(trainrunSection, orderedNodes);

    const leftTrainrunSection =
      lastLeftNode.getId() === bothLastNonStopNodes.lastNonStopNode1.getId()
        ? bothLastNonStopTrainrunSections.lastNonStopTrainrunSection1
        : bothLastNonStopTrainrunSections.lastNonStopTrainrunSection2;
    const rightTrainrunSection =
      lastRightNode.getId() === bothLastNonStopNodes.lastNonStopNode1.getId()
        ? bothLastNonStopTrainrunSections.lastNonStopTrainrunSection1
        : bothLastNonStopTrainrunSections.lastNonStopTrainrunSection2;

    return {
      leftDepartureTime: lastLeftNode.getDepartureTime(leftTrainrunSection),
      leftArrivalTime: lastLeftNode.getArrivalTime(leftTrainrunSection),
      rightDepartureTime: lastRightNode.getDepartureTime(rightTrainrunSection),
      rightArrivalTime: lastRightNode.getArrivalTime(rightTrainrunSection),
      travelTime: this.trainrunService.getCumulativeTravelTime(trainrunSection),
      returnTravelTime: this.trainrunService.getCumulativeTravelTime(trainrunSection, true),
    };
  }

  getLeftNode(trainrunSection: TrainrunSection, orderedNodes: Node[]): Node {
    const bothLastNonStopNodes =
      this.trainrunService.getBothLastNonStopNodes(trainrunSection);
    const bothNodesFound =
      orderedNodes.find(
        (n: Node) =>
          n.getId() === bothLastNonStopNodes.lastNonStopNode1.getId(),
      ) !== undefined &&
      orderedNodes.find(
        (n: Node) =>
          n.getId() === bothLastNonStopNodes.lastNonStopNode2.getId(),
      ) !== undefined;
    let leftNode;
    if (!bothNodesFound) {
      leftNode = GeneralViewFunctions.getLeftOrTopNode(
        bothLastNonStopNodes.lastNonStopNode1,
        bothLastNonStopNodes.lastNonStopNode2,
      );
    } else {
      leftNode = GeneralViewFunctions.getLeftNodeAccordingToOrder(
        orderedNodes,
        bothLastNonStopNodes.lastNonStopNode1,
        bothLastNonStopNodes.lastNonStopNode2,
      );
    }
    return leftNode;
  }

  getRightNode(trainrunSection: TrainrunSection, orderedNodes: Node[]): Node {
    const bothLastNonStopNodes =
      this.trainrunService.getBothLastNonStopNodes(trainrunSection);
    const bothNodesFound =
      orderedNodes.find(
        (n: Node) =>
          n.getId() === bothLastNonStopNodes.lastNonStopNode1.getId(),
      ) !== undefined &&
      orderedNodes.find(
        (n: Node) =>
          n.getId() === bothLastNonStopNodes.lastNonStopNode2.getId(),
      ) !== undefined;
    let rightNode;
    if (!bothNodesFound) {
      rightNode = GeneralViewFunctions.getRightOrBottomNode(
        bothLastNonStopNodes.lastNonStopNode1,
        bothLastNonStopNodes.lastNonStopNode2,
      );
    } else {
      rightNode = GeneralViewFunctions.getRightNodeAccordingToOrder(
        orderedNodes,
        bothLastNonStopNodes.lastNonStopNode1,
        bothLastNonStopNodes.lastNonStopNode2,
      );
    }
    return rightNode;
  }

  static getAdjustedTimeBasedOnSymmetry(
    selectedTrainrunSection: TrainrunSection,
    firstNumber: number,
    secondTime: number,
  ): number {
    if (selectedTrainrunSection.getIsSymmetric()) {
      return TrainrunsectionHelper.getSymmetricTime(secondTime);
    }
    return firstNumber;
  }
}
