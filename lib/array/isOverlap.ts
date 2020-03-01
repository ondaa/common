/**
 * @method isOverlap
 * @param arr
 * @description
 * * 배열에 중복된 값이 있는지 검사한다.
 */

const isOverlap = (arr: Array<string | number>): boolean => {
  const temp: typeof arr = [];
  let result = false;

  for (let i = 0; i < arr.length; i++) {
    const value = arr[i];
    if (temp.findIndex(v => v === value) !== -1) {
      result = true;
      break;
    }

    temp.push(value);
  }

  return result;
};

export default isOverlap;
