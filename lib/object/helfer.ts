/**
 * for Object helper
 */
// * key가 string인 object
export type KeyOfString = { [key: string]: any };

// * Object 의 keys 활용
export const getKeys = (obj: object): string[] => Object.keys(obj);

// * Object 의 values 활용
export const getValue = (obj: object): any[] => Object.values(obj);
