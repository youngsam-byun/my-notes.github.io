export function chunkArray<T>(arr: Array<T>, n: number): Array<Array<T>> {
  const array = arr.slice();
  const chunks = [];
  while (array.length) chunks.push(array.splice(0, n));
  return chunks;
}
