import {
  rmSpace,
  encodeQuery,
  headToUpperCase,
  snakeHeadToUpperCase
} from "../lib/string";

describe("rmSpace all suit case", () => {
  it("'all' is should return 'blueiscool' with no spaces", () => {
    expect(rmSpace("  blue is cool  ")).toBe("blueiscool");
  });

  it("'left' is should return 'blue is cool' with no spaces on the left", () => {
    expect(rmSpace("  blue is cool", "left")).toBe("blue is cool");
  });

  it("'right' is should return 'blue is cool' with no spaces on the right", () => {
    expect(rmSpace("blue is cool  ", "right")).toBe("blue is cool");
  });
});

describe("encodeQuery make uri query", () => {
  it("The return value is 'Hello=World&js=javascript' and type is string", () => {
    expect(
      encodeQuery({
        Hello: "World",
        js: "javascript"
      })
    ).toBe("Hello=World&js=javascript");
  });
});

describe("toUpper method is string upper relation function", () => {
  it("default string method toUpperCase is 'parse' to 'PARSE'", () => {
    expect("parse".toUpperCase()).toBe("PARSE");
  });

  it("'headToUpperCase' is changed 'parse' to 'Parse'", () => {
    expect(headToUpperCase("head")).toBe("Head");
  });

  it("'snakeHeadToUpperCase' is changed 'parse_to_parse' to 'ParseToParse'", () => {
    expect(snakeHeadToUpperCase("head_snake_tail")).toBe("Head_Snake_Tail");
    expect(snakeHeadToUpperCase("head_snake_tail", false)).toBe(
      "HeadSnakeTail"
    );
  });
});
