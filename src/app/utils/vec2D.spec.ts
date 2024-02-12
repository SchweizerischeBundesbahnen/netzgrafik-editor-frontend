import {Vec2D} from "./vec2D";

describe("vec2D", () => {
  it("constructor", () => {
    const result: Vec2D = new Vec2D();
    expect(result.getX()).toEqual(0.0);
    expect(result.getY()).toEqual(0.0);
  });

  it("constructor", () => {
    const result: Vec2D = new Vec2D(5, 2);
    expect(result.getX()).toEqual(5.0);
    expect(result.getY()).toEqual(2.0);
  });
});

describe("calculation_Vec2d", () => {
  it("equal", () => {
    const a: Vec2D = new Vec2D(5, 2);
    const b: Vec2D = new Vec2D(5, 2);
    const c: Vec2D = new Vec2D(3, 2);
    const ab: boolean = Vec2D.equal(a, b);
    const ac: boolean = Vec2D.equal(a, c);
    expect(ab && !ac).toEqual(true);
  });

  it("rot90", () => {
    const result: Vec2D = new Vec2D(5, 2);
    const r = Vec2D.rot90(result);
    expect(r.getX()).toEqual(-2.0);
    expect(r.getY()).toEqual(5.0);
    const ir = Vec2D.rot90(result, true);
    expect(ir.getX()).toEqual(2.0);
    expect(ir.getY()).toEqual(-5.0);
  });

  it("add", () => {
    const a: Vec2D = new Vec2D(5, 2);
    const b: Vec2D = new Vec2D(-5, 2);
    const result: Vec2D = Vec2D.add(a, b);
    expect(result.getX()).toEqual(0.0);
    expect(result.getY()).toEqual(4.0);
  });

  it("sub", () => {
    const a: Vec2D = new Vec2D(5, 2);
    const b: Vec2D = new Vec2D(-5, 2);
    const result: Vec2D = Vec2D.sub(a, b);
    expect(result.getX()).toEqual(10.0);
    expect(result.getY()).toEqual(0.0);
  });

  it("scale", () => {
    const a: Vec2D = new Vec2D(5, 2);
    const b = 3.0;
    const result: Vec2D = Vec2D.scale(a, b);
    expect(result.getX()).toEqual(15.0);
    expect(result.getY()).toEqual(6.0);
  });

  it("norm", () => {
    const a: Vec2D = new Vec2D(5, 2);
    const result: number = Vec2D.norm(a);
    expect(result).toEqual(Math.sqrt(5 * 5 + 2 * 2));
  });

  it("normalize", () => {
    const a: Vec2D = new Vec2D(5, -10);
    const result: Vec2D = Vec2D.normalize(a);
    const n: number = 1.0 / Math.sqrt(5 * 5 + 10 * 10);
    expect(result.getX()).toEqual(5.0 * n);
    expect(result.getY()).toEqual(-10.0 * n);
  });

  it("setDataFromString", () => {
    const result: Vec2D = new Vec2D().setDataFromString("5.12345", "-12.2");
    expect(result.getX()).toEqual(5.12345);
    expect(result.getY()).toEqual(-12.2);
  });

  it("setData", () => {
    const result: Vec2D = new Vec2D().setData(5.12345, -12.2);
    expect(result.getX()).toEqual(5.12345);
    expect(result.getY()).toEqual(-12.2);
  });

  it("getX", () => {
    const result: Vec2D = new Vec2D().setX(5.12345);
    expect(result.getX()).toEqual(5.12345);
  });

  it("getY", () => {
    const result: Vec2D = new Vec2D().setY(-12.2);
    expect(result.getY()).toEqual(-12.2);
  });

  it("setX", () => {
    const result: Vec2D = new Vec2D().setX(5.12345);
    expect(result.getX()).toEqual(5.12345);
    expect(result.getY()).toEqual(0.0);
  });

  it("setY", () => {
    const result: Vec2D = new Vec2D().setY(-12.2);
    expect(result.getX()).toEqual(0.0);
    expect(result.getY()).toEqual(-12.2);
  });

  it("copy", () => {
    const result: Vec2D = new Vec2D(25.4, 1978).copy();
    expect(result.getX()).toEqual(25.4);
    expect(result.getY()).toEqual(1978);
  });
});
