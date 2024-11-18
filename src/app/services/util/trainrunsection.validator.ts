import {TrainrunSection} from "../../models/trainrunsection.model";

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

    // check for broken symmetry (times)
    trainrunSection.resetSourceDepartureWarning();
    trainrunSection.resetTargetDepartureWarning();
    const sourceSum = (trainrunSection.getSourceArrival() + trainrunSection.getSourceDeparture());
    const sourceSymmetricCheck = sourceSum % 60 === 0;
    if (!sourceSymmetricCheck) {
      trainrunSection.setSourceArrivalWarning($localize`:@@app.services.util.trainrunsection-validator.broken-symmetry:Broken symmetry`,
        " " + (trainrunSection.getSourceArrival() + " + " + trainrunSection.getSourceDeparture()) + " = " + sourceSum);
      trainrunSection.setSourceDepartureWarning($localize`:@@app.services.util.trainrunsection-validator.broken-symmetry:Broken symmetry`,
        " " + (trainrunSection.getSourceArrival() + " + " + trainrunSection.getSourceDeparture()) + " = " + sourceSum);
    }
    const targetSum = (trainrunSection.getTargetArrival() + trainrunSection.getTargetDeparture());
    const targetSymmetricCheck = targetSum % 60 === 0;
    if (!targetSymmetricCheck) {
      trainrunSection.setTargetArrivalWarning($localize`:@@app.services.util.trainrunsection-validator.broken-symmetry:Broken symmetry`,
        " " + (trainrunSection.getTargetArrival() + " + " + trainrunSection.getTargetDeparture()) + " = " + targetSum);
      trainrunSection.setTargetDepartureWarning($localize`:@@app.services.util.trainrunsection-validator.broken-symmetry:Broken symmetry`,
        " " + (trainrunSection.getTargetArrival() + " + " + trainrunSection.getTargetDeparture()) + " =  " + targetSum);
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
