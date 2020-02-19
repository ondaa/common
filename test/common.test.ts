import { isNull, isEmpty } from "../lib";

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
});
