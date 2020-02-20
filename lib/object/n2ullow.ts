import { getKeys } from "./helfer";
import { isEmpty } from "../common";

/**
 * @method n2ullow
 * @param obj
 * @description
 * * object안에 value가 null인건 자동으로 제거하고 새로운 object를 반환한다.
 *
 * @fixed
 */

export type InitialObject = { [key: string]: any };

export const n2ullow = (obj: InitialObject) => {
  const result: InitialObject = {};

  getKeys(obj).forEach(key => {
    if (!isEmpty(obj[key])) result[key] = obj[key];
  });

  return result;
};

export default n2ullow;
