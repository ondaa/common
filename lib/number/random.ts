import { isEmpty } from "../common";

/**
 * @method random
 * @param options
 * @description
 * * 랜덤
 */

export type RandomOptions = {
  values?: Array<number>;
  weights?: Array<number>;
  max?: number;
  min?: number;
};

const random = (options?: RandomOptions) => {
  if (isEmpty(options)) {
    return Math.random();
  }
};

export default random;
