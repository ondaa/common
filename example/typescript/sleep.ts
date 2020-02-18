import { sleep } from "../../bin/fn";

async function test() {
  console.log("start");
  await sleep(3000);
  console.log("finish");
}

test();
