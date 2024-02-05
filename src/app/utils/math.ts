export class MathUtils {
  static roundAndForceValueGreaterEqualOne(value: number) {
    return Math.max(1, MathUtils.round(value, 1));
  }

  static round(value: number, precision: number): number {
    const multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
  }
}


