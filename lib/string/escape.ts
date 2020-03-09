/**
 * @method escape
 * @param str 문자열
 * @description
 * * &, <, > 탈출 함수
 * * DB에 특수문자를 넣을 때 용이함
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
