/**
 * @method escape
 * @param str 문자열
 * @description
 * *
 */

const escape = (str: string) =>
  str.replace(/(\&|\<|\>)/g, n => {
    switch (n) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      default:
        return "";
    }
  });

export default escape;
