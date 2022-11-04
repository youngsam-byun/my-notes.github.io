export {};
describe('format.test.ts', () => {
  describe('reduce test', () => {
    it('array of function to map conversion', () => {
      function testFunction(): string {
        return 'test';
      }
      function testFunction2(): string {
        return 'test2';
      }
      console.log(testFunction);
      const entries = Object.entries({ testFunction, testFunction2 });
      console.log(entries);
      const reduced = entries.reduce(
        (accumulator, [key, func]) => ({
          ...accumulator,
          [key.toLowerCase()]: func,
        }),
        //initial value
        {},
      );
      console.log(reduced);
    });
  });
});
