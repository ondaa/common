import { count, sortOfValue, sort } from "../lib/collection";

describe("count methods", () => {
  it("count duplicate items in array", () => {
    const arr = ["a", "a", "b", "c", "c"];
    expect(count(arr)).toEqual({
      a: 2,
      b: 1,
      c: 2
    });
  });

  it("count can search for one item duplicate items in array", () => {
    const arr = ["a", "a", "b", "c", "c"];
    expect(count(arr, "a")).toEqual({
      a: 2
    });
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
