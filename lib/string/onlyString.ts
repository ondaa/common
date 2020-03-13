/**
 * @method onlyString
 * @param str 값
 * @param replaceText? 대체 단어
 * @description
 * * 특수문자를 제외한 나머지 string을 반환한다.
 *
 * !fixed
 * * v0.0.6 부터 띄어쓰기는 유지시킴
 */

const onlyString = (str: string, replaceText?: string): string =>
  str.replace(
    /[\!\@\#\$\%\^\&\*\(\)\_\-\+\=\.\,\/\[\]\{\}\`\~\\\:\;]/g,
    replaceText || ""
  );

export default onlyString;
