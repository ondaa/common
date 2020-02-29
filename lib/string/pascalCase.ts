import toHeadUpperCase from "./toHeaUpperCase";
import onlyString from "./onlyString";
import rmSpace from "./rmSpace";

/**
 * @method pascalCase
 * @param str 문자열
 * @description
 * * 파스칼 문법 ex) BigRabbit
 */

const pascalCase = (str: string) =>
  onlyString(str, " ")
    .split(" ")
    .map(v => toHeadUpperCase(rmSpace(v, "all")))
    .join("");

export default pascalCase;
