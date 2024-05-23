import { maxArea } from "../src/area";

describe("Max Area tests", () => {
  it("input should be validated for height", () => {
    expect(() => { maxArea([106, 1]) }).toThrow(Error);
  });

  it("input should be validated for numer of buildings", () => {
    expect(() => { maxArea([100]) }).toThrow(Error);
  });

  it("max area between 2 buildings should be correct", () => {
    expect(maxArea([1, 1])).toEqual(1);
  });

  it("max area between multiple buildings should be correct", () => {
    expect(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])).toEqual(49);
  });
});