/**
 * @method sort
 * @param arr
 * @param orderBy
 * @description
 * * 간단한 sort 기능
 */

export const desc = (a: any, b: any): -1 | 1 | 0 => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

export const asc = (a: any, b: any): -1 | 1 | 0 => {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
};

const sort = (arr: any[], orderBy: "desc" | "asc" = "desc"): any[] =>
  orderBy === "desc" ? arr.sort(desc) : arr.sort(asc);

export default sort;
