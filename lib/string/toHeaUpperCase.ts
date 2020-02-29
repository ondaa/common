/**
 * @method toHeadUpperCase
 * @param str 문자열
 * @description
 * * 단어의 head를 대문자로
 */

const toHeadUpperCase = (str: string): string => {
  const lower = str.toLowerCase().split("");
  lower[0] = lower[0].toUpperCase();
  return lower.join("");
};

export default toHeadUpperCase;
