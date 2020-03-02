import { KeyOfString } from "../object/helfer";
import { unique } from "../array";

/**
 * @method groupBy
 * @param arr
 * @description
 * * 같은 값끼리 groupBy 해준다. object[] 형태가 리턴된다.
 */

const groupBy = (arr: Array<KeyOfString>, groupOfKey: string): object[] => {
  const keyArray: (string | number)[] = [];

  arr.forEach(item => {
    keyArray.push(item[groupOfKey]);
  });

  unique(keyArray);

  return [{}];
};

export default groupBy;
