/**
 * @method findIndexs
 * @param arr
 * @param callback
 * @description
 * * findIndex는 하나만 return 시키기 때문에 여러게 리터할 수 있는 기능 만듬
 * * [...index]를 return 함
 *
 * @fixed
 */
const findIndexs = <T = any>(
  arr: any[],
  callback: (keyword: T, index: number) => any
): number[] =>
  arr
    .map((item, index) => callback(item, index) && index)
    .filter(v => typeof v === "number");

// callback은 true,false를 반환한다

export default findIndexs;
