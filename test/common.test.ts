import { isNull, isEmpty, hasOwnProperty } from "../common";

describe("isNull and isEmpty functions are empty value handlers", () => {
  it("should return true if null", () => {
    expect(isNull(null)).toBe(true);
  });

  it("should return false if ' '", () => {
    expect(isEmpty(" ")).toBe(false);
  });

  it("should return true if undefind", () => {
    expect(isEmpty(undefined)).toBe(true);
  });

  it("should return true if null", () => {
    expect(isEmpty(null)).toBe(true);
  });

  it("should return true if the object has an 'apple' key", () => {
    const color = { apple: "red" };
    expect(hasOwnProperty(color, "apple")).toBe(true);
  });
});
