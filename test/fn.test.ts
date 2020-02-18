import { sleep } from "../lib/fn";

jest.useFakeTimers();

describe("Functional", () => {
  test("sleep 1 second", async () => {
    sleep(1000);

    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
