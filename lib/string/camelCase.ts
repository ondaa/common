import toHeadUpperCase from "./toHeaUpperCase";
import onlyString from "./onlyString";
import rmSpace from "./rmSpace";

/**
 * @method camelCase
 * @param str 문자열
 * @description
 * * 낙타 봉우리 문법 ex) smallEgg
 */

const camelCase = (str: string) =>
  onlyString(str, " ")
    .split(" ")
    .map((v, i) =>
      i === 0 ? rmSpace(v, "all") : toHeadUpperCase(rmSpace(v, "all"))
    )
    .join("");

export default camelCase;
