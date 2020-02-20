import { sleep } from "../fn";

jest.useFakeTimers();

describe("sleep fn asynchronous", () => {
  test("run and sleep 1's", async () => {
    sleep(1000);
    expect(setTimeout).toHaveBeenCalledTimes(1);
    expect(setTimeout).toHaveBeenLastCalledWith(expect.any(Function), 1000);
  });
});
