import { rmSpace, encodeQuery } from "../lib/string";

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
