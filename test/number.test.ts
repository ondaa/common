import { mockRandom, resetMockRandom } from "jest-mock-random";
import { random } from "../lib/number";

describe("random for number case", () => {
  it("default random return toBe float numbers", () => {
    mockRandom([0.1]);
    const actual = random();
    expect(actual).toEqual([0.1]);

    resetMockRandom();
  });
});
