import { isEmpty } from "../common";
import { KeyOfString } from "../object/helfer";
import { unique } from "../array";

/**
 * @method count
 * @param arr
 * @description
 * * 배열 속 item 개수를 리턴한다.
 * * 특정 아이템 검색 가능하다.
 */

const count = (arr: Array<string | number>, search?: any): KeyOfString => {
  if (!isEmpty(search)) {
    const count = arr.filter(v => v === search).length;
    return { [search]: count };
  }

  const result: KeyOfString = {};

  unique(arr).forEach(key => {
    result[key] = arr.filter(v => v === key).length;
  });

  return result;
};

export default count;
