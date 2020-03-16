import { KeyOfString } from "../object/helfer";

/**
 * @method groupBy
 * @param arr
 * @description
 * * overlap 의 object 버전이다.
 */

const groupBy = (arr: Array<KeyOfString>, key: string): Array<KeyOfString> => {
  const groups: Array<KeyOfString> = [];

  arr.forEach(
    item =>
      groups.findIndex(group => group[key] === item[key]) === -1 &&
      groups.push(item)
  );

  return groups;
};

export default groupBy;
