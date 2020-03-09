import { isEmpty } from "../common";
import rmSpace from "../string/rmSpace";

/**
 * @method toArray
 * @param str string
 * @param keyword? string
 * @description
 * * 문자열을 특수문자 또는 지정문자 기준으로 구별하여 배열화 시키기
 * * 공백은 반드시 제거하게 된다.
 */

const toArray = (str: string, keyword: string = ",") =>
  isEmpty(str) ? [] : str.split(keyword).map(v => rmSpace(v));

export default toArray;
