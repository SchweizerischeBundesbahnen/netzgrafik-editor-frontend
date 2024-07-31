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
        $localize`:@@app.services.util.trainrunsection-validator.target-arrival-not-reacheable.title:Target Arrival Warning`,
        $localize`:@@app.services.util.trainrunsection-validator.target-arrival-not-reacheable.description:Target arrival time cannot be reached`,
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
        $localize`:@@app.services.util.trainrunsection-validator.source-arrival-not-reacheable.title:Source Arrival Warning`,
        $localize`:@@app.services.util.trainrunsection-validator.source-arrival-not-reacheable.description:Source arrival time cannot be reached`,
      );
    } else {
      trainrunSection.resetSourceArrivalWarning();
    }
  }

  static validateTravelTime(trainrunSection: TrainrunSection) {
    if (trainrunSection.getTravelTime() < 1) {
      trainrunSection.setTravelTimeWarning(
        $localize`:@@app.services.util.trainrunsection-validator.travel-time-less-than-1.title:Travel Time less than 1`,
        $localize`:@@app.services.util.trainrunsection-validator.travel-time-less-than-1.description:Travel time must be greater than or equal to 1`,
      );
    } else {
      trainrunSection.resetTravelTimeWarning();
    }
  }
}
