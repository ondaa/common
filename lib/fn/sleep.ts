/**
 * @method sleep
 * @param duration ms
 * @description
 * * The process waits for a duration.
 */

const sleep = (duration: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

export default sleep;
