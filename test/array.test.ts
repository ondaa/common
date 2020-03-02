import { findIndexs, isOverlap, unique, finds } from "../lib/array";

it("'finds' return to match value", () => {
  expect(finds([1, 2, 2], v => v === 2)).toStrictEqual([2, 2]);
});

describe("findIndexs is return multiple array.findIndex", () => {
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
  it("'isOverlap' is to check overlap array and return boolean", () => {
    expect(isOverlap([1, 2, 2])).toStrictEqual(true);
  });

  it("'unique' is to remove overlap item in array and return new array", () => {
    expect(unique([1, 2, 2, "a", 1, "a"])).toStrictEqual([1, 2, "a"]);
  });
});
