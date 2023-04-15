export async function getPromise<T>(name: T, ms: number): Promise<T> {
  return new Promise((resolve) => {
    setTimeout(() => {
      return resolve(name);
    }, ms);
  });
}

export function normalFunction(name: string): string {
  return 'normal function (' + name + ')';
}
