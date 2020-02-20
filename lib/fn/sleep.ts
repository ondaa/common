/**
 * @method sleep
 * @param duration ms
 * @description
 * * Wait for process for duration
 */

const sleep = (duration: number): Promise<void> =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });

export default sleep;
