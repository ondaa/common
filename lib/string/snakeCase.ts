import toHeadUpperCase from "./toHeaUpperCase";

/**
 * @method snakeCase
 * @param str 문자열
 * @param capitalize? 제일 앞단어 대문자 처리
 * @description
 * * A-Z or space 를 _ 로 치환하여 snake case를 만든다.
 * * capitalize가 true면 snake body의 단어의 head를
 * * ex1) snake body -> snake_body
 * * ex2) if capitalize -> true -> snake body -> Snake_Body
 */

const snakeCase = (str: string, capitalize?: boolean) =>
  str
    .replace(/[A-Z]/g, capital => " " + capital)
    .split(" ")
    .filter(v => v !== "")
    .map(body => (!capitalize ? body.toLowerCase() : toHeadUpperCase(body)))
    .join("_");

export default snakeCase;
