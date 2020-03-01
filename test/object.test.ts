import { n2ullow, encodeQuery } from "../lib/object";

it("should return value of not include null", () => {
  const obj = {
    a: 1,
    b: null,
    c: 2
  };

  expect(n2ullow(obj)).toStrictEqual({
    a: 1,
    c: 2
  });
});

it("The return value is 'Hello=World&js=javascript' and type is string", () => {
  expect(
    encodeQuery({
      Hello: "World",
      js: "javascript"
    })
  ).toBe("Hello=World&js=javascript");
});
