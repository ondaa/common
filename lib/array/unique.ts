/**
 * @method unique
 * @param arr
 * @description
 * * 중복값을 제외하여 리턴시킨다.
 */

const unique = (arr: Array<string | number>): typeof arr => {
  const result: typeof arr = [];
  arr.forEach(item => result.indexOf(item) === -1 && result.push(item));
  return result;
};

export default unique;
