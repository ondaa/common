import { sleep } from "../../bin/fn";

async function test() {
  console.log("start date", new Date());
  await sleep(3000);
  console.log("end date", new Date());
}

test();
