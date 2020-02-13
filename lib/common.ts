import { trim } from "./string";

const isEmpty = (value: any): boolean => isNull(value) || trim(value) === "";

const isNull = (value: any): boolean =>
  typeof value === "object" && value === null;

const isString = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object String]";

const isNumber = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object Number]";

const isBoolean = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object Boolean]";

const isObject = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object Object]";

const isArray = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object Array]";

const isFunction = (value: any): boolean =>
  Object.prototype.toString.call(value) === "[object Function]";

export {
  isArray,
  isBoolean,
  isEmpty,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isString
};
