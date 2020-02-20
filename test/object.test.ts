import { notIncludeNull } from "../lib/object";

describe("Object Test Suit", () => {
  it("should return value of not include null", () => {
    const obj = {
      a: 1,
      b: null,
      c: 2
    };

    expect(notIncludeNull(obj)).toStrictEqual({
      a: 1,
      c: 2
    });
  });
});
