import {
  rmSpace,
  pascalCase,
  camelCase,
  snakeCase,
  onlyString,
  toHeadUpperCase,
  nl2br,
  escape
} from "../lib/string";

it("toHeadUpperCase changes 'apple' to 'Apple'", () => {
  expect(toHeadUpperCase("apple")).toBe("Apple");
});

it("onlyString return to string without special char", () => {
  expect(onlyString("@tag #hashtag")).toBe("tag hashtag");
});

it("'nl2br' changes \\n to <br/>", () => {
  expect(nl2br("line\nbreak")).toBe("line<br/>break");
});

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

describe("toUpper method is string upper relation function", () => {
  it("default string method toUpperCase is 'parse' to 'PARSE'", () => {
    expect("parse".toUpperCase()).toBe("PARSE");
  });

  it("'pascalCase' is changed 'parscal_case' to 'ParscalCase'", () => {
    expect(pascalCase("parscal_case")).toBe("ParscalCase");
  });

  it("'camelCase' is changed 'camel_case' to 'camelCase'", () => {
    expect(camelCase("camel_case")).toBe("camelCase");
  });

  it("'snakeCase' is changed 'snake case' to 'snake_case'", () => {
    expect(snakeCase("snake case")).toBe("snake_case");
    expect(snakeCase("snake case", true)).toBe("Snake_Case");
  });
});

describe("escape relation funtions", () => {
  it("basic escape change &, <, > to &amp;, &lt;, &gt;", () => {
    expect(escape("patte&matte <ondaa@mpoint.io>")).toBe(
      "patte&amp;matte &lt;ondaa@mpoint.io&gt;"
    );
  });
});
