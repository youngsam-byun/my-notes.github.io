export async function getPromise(name: string, ms: number): Promise<string> {
  return new Promise<string>((resolve) => {
    setTimeout(() => {
      return resolve(name);
    }, ms);
  });
}

export function normalFunction(name: string): string {
  return 'normal function (' + name + ')';
}
