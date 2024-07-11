import {TrainrunSection} from "../../models/trainrunsection.model";
import {MathUtils} from "../../utils/math";

export class TrainrunsectionValidator {
  static validateOneSection(trainrunSection: TrainrunSection) {
    trainrunSection.resetSourceDepartureWarning();
    trainrunSection.resetTargetDepartureWarning();

    const calculatedTargetArrivalTime =
      (trainrunSection.getSourceDeparture() + trainrunSection.getTravelTime()) %
      60;
    if (Math.abs(calculatedTargetArrivalTime - trainrunSection.getTargetArrival())
       > 1 / 60) {
      trainrunSection.setTargetArrivalWarning(
        "Target Arrival Warning",
        "Target arrival time cannot be reached",
      );
    } else {
      trainrunSection.resetTargetArrivalWarning();
    }

    const calculatedSourceArrivalTime =
      (trainrunSection.getTargetDeparture() + trainrunSection.getTravelTime()) %
      60;
    if (Math.abs(calculatedSourceArrivalTime - trainrunSection.getSourceArrival())
       > 1 / 60) {
      trainrunSection.setSourceArrivalWarning(
        "Source Arrival Warning",
        "Target arrival time cannot be reached",
      );
    } else {
      trainrunSection.resetSourceArrivalWarning();
    }
  }

  static validateTravelTime(trainrunSection: TrainrunSection) {
    if (trainrunSection.getTravelTime() < 1) {
      trainrunSection.setTravelTimeWarning(
        "Travel Time Warning",
        "Travel time must be greater-equal than 1",
      );
    } else {
      trainrunSection.resetTravelTimeWarning();
    }
  }
}
