type Chunk = <T>(arr: T[], chunkSize?: number) => T[][];

export const chunk: Chunk = (arr, chunkSize = 1) => {
  const tmp = [...arr];
  const result = [];
  while (tmp.length) {
    result.push(tmp.splice(0, chunkSize));
  }
  return result;
};

export const repeat = (times: number, fn: (key: number) => void) =>
  Array.from({ length: times }).map((_, val: number) => fn(val));

export const dropFalsyItems = <T>(arr: T[]): T[] => arr.filter((x) => !!x);
