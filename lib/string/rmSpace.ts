import { isEmpty } from "../common";

/**
 * @method rmSpace
 * @param value string
 * @param part left | right | all
 * @description
 * * 공백제거
 */
const rmSpace = (value: string, part?: "left" | "right" | "all"): string => {
  const regex =
    part === "all" || isEmpty(part)
      ? /\s/g
      : part === "left"
      ? /^\s+/g
      : /\s+$/g;

  return value.replace(regex, "");
};

export default rmSpace;
