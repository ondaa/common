/**
 * @method isPossiblePassword
 * @param
 * @description
 * *
 */

type IsPossiblePasswordOption = {
  special?: number;
  capital?: number;
  max?: number;
  min?: number;
  number?: number;
};

const isPossiblePassword = (
  value: string,
  options: IsPossiblePasswordOption = {}
): boolean => {
  return false;
};

export default isPossiblePassword;
