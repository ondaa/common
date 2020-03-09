import { isString } from "../common";

/**
 * @method sumArray
 * @param arr
 * @param join
 * @description
 * * join이 아닌 실제로 값을 더하는 기능이다.
 */

const sumArray = (arr: Array<string | number>, join?: string) => {
  const includeString = arr.findIndex(v => isString(v));

  // check the type
  if (includeString === -1) {
    return (arr as Array<number>).reduce((prev, next) => prev + next, 0);
  } else {
    return arr.join(join || "");
  }
};

export default sumArray;
