import { getKeys, KeyOfString } from "./helfer";
import { isEmpty } from "../common";

/**
 * @method n2ullow
 * @param obj
 * @description
 * * object안에 value가 null인건 자동으로 제거하고 새로운 object를 반환한다.
 */

export const n2ullow = (obj: KeyOfString) => {
  const result: KeyOfString = {};

  getKeys(obj).forEach(key => {
    if (!isEmpty(obj[key])) result[key] = obj[key];
  });

  return result;
};

export default n2ullow;
