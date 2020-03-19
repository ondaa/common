import { isOverlap } from "./array";
import { isEmail, isPossiblePassword } from "./string";

const isEmpty = (value: any): boolean =>
  isNull(value) || value === "" || value === undefined;

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

const hasOwnProperty = (obj: object, key: string) =>
  Object.prototype.hasOwnProperty.call(obj, key);

export {
  isArray,
  isBoolean,
  isEmail,
  isEmpty,
  isFunction,
  isNull,
  isNumber,
  isObject,
  isOverlap,
  isPossiblePassword,
  isString,
  hasOwnProperty
};
