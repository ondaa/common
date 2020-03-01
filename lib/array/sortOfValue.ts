import { KeyOfString } from "../object/helfer";

/**
 * @method sortOfValue
 * @param arr
 * @param sortKey
 * @param orderBy
 * @description
 * * object의 value 로
 */

const sortOfValue = (
  arr: Array<KeyOfString>,
  sortKey: string,
  orderBy: "desc" | "asc" = "desc"
) => {
  if (orderBy === "desc") {
    return arr.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return -1;
      if (a[sortKey] < b[sortKey]) return 1;
      return 0;
    });
  }

  if (orderBy === "asc") {
    return arr.sort((a, b) => {
      if (a[sortKey] > b[sortKey]) return 1;
      if (a[sortKey] < b[sortKey]) return -1;
      return 0;
    });
  }
};

export default sortOfValue;
