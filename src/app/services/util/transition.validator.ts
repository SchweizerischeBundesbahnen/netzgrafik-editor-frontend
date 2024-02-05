import {Node} from '../../models/node.model';

export class TransitionValidator {

  static validateTransition(node: Node, transitionId: number) {
    if (!node.getIsNonStop(transitionId)) {
      const trainrunSections = node.getTrainrunSections(transitionId);

      const arrivalTime1 = node.getArrivalTime(trainrunSections.trainrunSection1);
      const departureTime1 = node.getDepartureTime(trainrunSections.trainrunSection1);

      const arrivalTime2 = node.getArrivalTime(trainrunSections.trainrunSection2);
      const departureTime2 = node.getDepartureTime(trainrunSections.trainrunSection2);

      const nodeHaltezeiten = node.getTrainrunCategoryHaltezeit();
      const trainrunHaltezeit = nodeHaltezeiten[
        trainrunSections.trainrunSection1.getTrainrun().getTrainrunCategory().fachCategory].haltezeit;

      const calculatedDepartureTime2 = (arrivalTime1 + trainrunHaltezeit) % 60;
      const calculatedDepartureTime1 = (arrivalTime2 + trainrunHaltezeit) % 60;
      if (calculatedDepartureTime2 !== departureTime2 || calculatedDepartureTime1 !== departureTime1) {
        if (trainrunSections.trainrunSection1.getSourceNodeId() === node.getId()) {
          trainrunSections.trainrunSection1.setSourceArrivalWarning('Source Arrival Warning', 'Time cannot be reached');
          trainrunSections.trainrunSection1.setSourceDepartureWarning('Source Departure Warning', 'Time cannot be reached');
        } else {
          trainrunSections.trainrunSection1.setTargetArrivalWarning('Target Arrival Warning', 'Time cannot be reached');
          trainrunSections.trainrunSection1.setTargetDepartureWarning('Target Departure Warning', 'Time cannot be reached');
        }
        if (trainrunSections.trainrunSection2.getSourceNodeId() === node.getId()) {
          trainrunSections.trainrunSection2.setSourceArrivalWarning('Source Arrival Warning', 'Time cannot be reached');
          trainrunSections.trainrunSection2.setSourceDepartureWarning('Source Departure Warning', 'Time cannot be reached');
        } else {
          trainrunSections.trainrunSection2.setTargetArrivalWarning('Target Arrival Warning', 'Time cannot be reached');
          trainrunSections.trainrunSection2.setTargetDepartureWarning('Target Departure Warning', 'Time cannot be reached');
        }

      } else {
        if (trainrunSections.trainrunSection1.getSourceNodeId() === node.getId()) {
          trainrunSections.trainrunSection1.resetSourceArrivalWarning();
          trainrunSections.trainrunSection1.resetSourceDepartureWarning();
        } else {
          trainrunSections.trainrunSection1.resetTargetArrivalWarning();
          trainrunSections.trainrunSection1.resetTargetDepartureWarning();
        }
        if (trainrunSections.trainrunSection2.getSourceNodeId() === node.getId()) {
          trainrunSections.trainrunSection2.resetSourceArrivalWarning();
          trainrunSections.trainrunSection2.resetSourceDepartureWarning();
        } else {
          trainrunSections.trainrunSection2.resetTargetArrivalWarning();
          trainrunSections.trainrunSection2.resetTargetDepartureWarning();
        }
      }
    }
  }
}
