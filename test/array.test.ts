import { findIndexs, isOverlap, unique, sort, sortOfValue } from "../lib/array";

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
    expect(isOverlap([1, 2, 2])).toEqual(true);
  });

  it("'unique' is to remove overlap item in array and return new array", () => {
    expect(unique([1, 2, 2, "a", 1, "a"])).toEqual([1, 2, "a"]);
  });
});

describe("sort methods", () => {
  it("sort order by default value is desc", () => {
    expect(sort([2, 3, 4, 1])).toEqual([4, 3, 2, 1]);
    expect(sort([2, 3, 4, 1], "asc")).toEqual([1, 2, 3, 4]);
  });

  it("sortOfValue is sort by object value", () => {
    const object = [{ value: 3 }, { value: 1 }, { value: 4 }, { value: 2 }];

    expect(sortOfValue(object, "value")).toEqual([
      { value: 4 },
      { value: 3 },
      { value: 2 },
      { value: 1 }
    ]);
    expect(sortOfValue(object, "value", "asc")).toEqual([
      { value: 1 },
      { value: 2 },
      { value: 3 },
      { value: 4 }
    ]);
  });
});
