export {};
describe('constants.test.ts', () => {
  async function getPromise(name: string, ms: number): Promise<string> {
    return new Promise<string>((resolve) => {
      setTimeout(() => {
        return resolve(name);
      }, ms);
    });
  }

  function normalFunction(name: string): string {
    return 'normal function (' + name + ')';
  }
  it('promise with await test', async () => {
    const startTime = Date.now();
    console.log(normalFunction('one'));
    const a = getPromise('1', 2003).then((res) => {
      console.log(res);
      return res;
    });
    console.log(normalFunction('two'));
    // console.log(a);
    const b = await getPromise('2', 2000);
    console.log(b);
    console.log(normalFunction('three'));
    const finsihTime = Date.now();
    console.log('finished in ' + (finsihTime - startTime));
  });

  it('all await test', async () => {
    const startTime = Date.now();
    console.log(normalFunction('one'));
    const a = await getPromise('1', 2003);
    console.log(a);
    console.log(normalFunction('two'));
    const b = await getPromise('2', 2000);
    console.log(b);
    console.log(normalFunction('three'));
    const finsihTime = Date.now();
    console.log('finished in ' + (finsihTime - startTime));
  });

  it('promise all test', async () => {
    const startTime = Date.now();
    const a = getPromise('1', 2003);
    console.log(a);
    console.log(normalFunction('two'));
    const b = getPromise('2', 2000);
    console.log(b);
    console.log(normalFunction('three'));
    const finsihTime = Date.now();
    const allResult = await Promise.all([a, b]);
    console.log(allResult);
    console.log('finished in ' + (finsihTime - startTime));
  });
});
