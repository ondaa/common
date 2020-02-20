import { isObject, isEmpty } from "../common";

/**
 * @method encodeQuery
 * @param obj
 * @param includeNull
 * @description
 * * object를 uri query로 만들어준다.
 * * 특수 문자의 경우 자동 encodeURIComponent로 자동 변환 된다.
 *
 * @fixed
 */
const encodeQuery = (obj: object): string => {
  if (!isObject(obj)) return "";

  let queryStorage = [];
  for (let [key, value] of Object.entries(obj)) {
    if (!isEmpty(value)) {
      queryStorage.push(`${key}=${encodeURIComponent(value)}`);
    }
  }

  return queryStorage.join("&");
};

export default encodeQuery;
