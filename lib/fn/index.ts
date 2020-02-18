/**
 * @method sleep
 * @param duration ms
 * @description
 * * Wait for process for duration
 */
export const sleep = (duration: number): Promise<boolean> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(true);
    }, duration);
  });
};
