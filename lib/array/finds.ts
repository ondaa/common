import { isEmpty } from "../common";

/**
 * @method finds
 * @param arr
 * @description
 * * find multiple 기능
 */

const finds = <T = any>(
  arr: any[],
  callback: (keyword: T, index: number) => any
): any[] =>
  arr
    .map((item, index) => callback(item, index) && item)
    .filter(v => !isEmpty(v) && !!v);

export default finds;
