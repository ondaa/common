import { isEmpty, isObject } from "../common";

/**
 * @method rmSpace
 * @param value string
 * @param part left | right | all
 * @description
 * * 공백제거
 */
export const rmSpace = (
  value: string,
  part?: "left" | "right" | "all"
): string => {
  const regex =
    part === "all" || isEmpty(part)
      ? /\s/g
      : part === "left"
      ? /^\s+/g
      : /\s+$/g;

  return value.replace(regex, "");
};

/**
 * @method encodeQuery
 * @param obj
 * @param includeNull
 * @description
 * * object를 uri query로 만들어준다.
 * * 특수 문자의 경우 자동 encodeURIComponent로 자동 변환 된다.
 */
export const encodeQuery = (obj: object): string => {
  if (!isObject(obj)) return "";

  let queryStorage = [];
  for (let [key, value] of Object.entries(obj)) {
    if (!isEmpty(value)) {
      queryStorage.push(`${key}=${encodeURIComponent(value)}`);
    }
  }

  return queryStorage.join("&");
};
