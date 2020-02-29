/**
 * @method onlyString
 * @param str 값
 * @param replaceText? 대체 단어
 * @description
 * * 특수문자를 제외한 나머지 string을 반환한다.
 */

const onlyString = (str: string, replaceText?: string): string =>
  str.replace(/([^\w]|\_)/g, replaceText || "");

export default onlyString;
