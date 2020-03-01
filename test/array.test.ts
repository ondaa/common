import { findIndexs, isOverlap, unique } from "../lib/array";

describe("Array Test Suit", () => {
  it("should return multiple matches of more then 3", () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 1];

    expect(findIndexs(arr, v => v > 3)).toStrictEqual([3, 4, 5, 6]);
  });

  it("should return multiple matches if the value of key 'a' is '1'", () => {
    const arr = [{ a: "1" }, { a: "2" }, { a: "1" }, { a: "2" }];

    expect(findIndexs(arr, ({ a }) => a === "1")).toStrictEqual([0, 2]);
  });
});

describe("Overlap methods", () => {
  it("'isOverlap' is to check overlap array", () => {
    expect(isOverlap([1, 2, 2])).toEqual(true);
  });

  it("'unique' is to remove overlap item in array and return new array", () => {
    expect(unique([1, 2, 2, "a", 1, "a"])).toEqual([1, 2, "a"]);
  });
});
