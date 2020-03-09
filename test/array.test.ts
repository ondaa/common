import {
  findIndexs,
  isOverlap,
  unique,
  finds,
  toArray,
  sumArray
} from "../lib/array";

it("'finds' return to match value", () => {
  expect(finds([1, 2, 2], v => v === 2)).toStrictEqual([2, 2]);
});

it("toArray is to split string. Reference point can be set", () => {
  // ignore space
  expect(toArray("a, b, c")).toStrictEqual(["a", "b", "c"]);
  expect(toArray("1, 2, 3")).toStrictEqual(["1", "2", "3"]);
});

describe("sumArray is to add all values", () => {
  it("value type is number", () => {
    expect(sumArray([1, 2, 3, 4])).toBe(10);
    expect(sumArray([1, -2, 3, 4])).toBe(6);
  });

  it("value type is string", () => {
    expect(sumArray(["a", "b", "c"])).toBe("abc");
    expect(sumArray(["a", "b", "c"], "|")).toBe("a|b|c");
  });
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
