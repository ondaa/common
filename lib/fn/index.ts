/**
 * @method sleep
 * @param duration ms
 * @description
 * * Wait for process for duration
 */
export const sleep = (duration: number): Promise<void> => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
};
