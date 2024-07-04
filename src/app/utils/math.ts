export class MathUtils {
  static roundAndForceValueGreaterEqualOne(value: number) {
    return Math.max(1, MathUtils.round(value, 1));
  }

  static round(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }

  static fixMachineEpsilonProblem(time : number){
    // The problem in this project is that the modulo (%) operator is frequently used, especially
    // for times. This can lead to machine precision issues, as only powers of 2 can be handled by
    // the modulo operator. The solution could be to replace the modulo operator with other
    // appropriate mathematical operations to avoid machine precision problems and ensure
    // accurate handling of times.
    // To avoid replacing the modulo operators throughout the entire project, we have opted for
    // this global correction, which is certainly not perfect but cost-effective. If any issues
    // arise, we will need to modify this solution. Currently, it resolves all identified problems,
    // eliminating the need to manually implement and replace modulo operators in the entire code.
    // This would also be the case for future adjustments, which would increase code complexity.
    // More info:
    // https://github.com/SchweizerischeBundesbahnen/netzgrafik-editor-frontend/issues/168.

    // time is mostly in minute
    // 60 => seconds
    // 100 => 1/100 second => 60*100 = 60000
    return Math.round(time * 60000)/60000;
  }
}
