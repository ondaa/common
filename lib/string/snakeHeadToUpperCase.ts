import { bodyAssemblyHeadToUpperCase } from "./helper";
import { isEmpty } from "../common";

/**
 * @method snakeHeadToUpperCase
 * @param value 값
 * @param includeSpecial _ 포함 여부 default true
 * @description
 * * snake 문법의 _ 를 제거한 단어들의 첫번째 글자를 uppercase 해준다.
 * * includeSpecial을 통해 _ 를 넣을건지 말건지 결정가능하다.
 *
 * @fixed
 */

const snakeHeadToUpperCase = (value: string, includeSpecial?: boolean) => {
  if (isEmpty(includeSpecial) || typeof includeSpecial !== "boolean") {
    includeSpecial = true;
  }

  return value
    .split("_")
    .map(snakePart => bodyAssemblyHeadToUpperCase(snakePart))
    .join(includeSpecial ? "_" : "");
};

export default snakeHeadToUpperCase;
