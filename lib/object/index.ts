import { getKeys } from "./helfer";
import { isEmpty } from "../common";
export type InitialObject = { [key: string]: any };

export const notIncludeNull = (obj: InitialObject) => {
  const result: InitialObject = {};

  getKeys(obj).forEach(key => {
    if (!isEmpty(obj[key])) result[key] = obj[key];
  });

  return result;
};

export * from "./helfer";
