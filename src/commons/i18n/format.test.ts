import {
  formats,
  formatToFunction,
  getFormatter,
  numberWithCommas,
  parseFnAndArgs,
  stripQuotes,
} from './formats';

describe('formats.test.ts', () => {
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

    it('split map reduce', () => {
      const testString = 'A|B|C';
      const str = testString.split('|');
      console.log(str);
      const strMap = str.map((str) => str);
      console.log(strMap);
      const strMapReduce = strMap.reduce((prev: string, curr: string) => {
        return prev + curr.toLowerCase();
      }, '');
      console.log(strMapReduce);
    });
  });

  describe('numberWithCommas Test', () => {
    it('1000 returns 1,000', () => {
      const res = numberWithCommas(1000);
      expect(res).toBe('1,000');
    });

    it('1999999 returns 1,999,999', () => {
      const res = numberWithCommas(1999999);
      expect(res).toBe('1,999,999');
    });
  });

  describe('formats related test', () => {
    it('numberwithcommas test', () => {
      const funcNumberWithCommas = formatToFunction['numberwithcommas'];
      expect(typeof funcNumberWithCommas).toBe('function');
    });
    it('getFormatter test', () => {
      const funcNumberWithCommas = getFormatter('numberWithCommas');
      expect(typeof funcNumberWithCommas).toBe('function');
    });
    it('stripQuote test', () => {
      const res = stripQuotes('"numberWithCommas"');
      expect(res).toBe('numberWithCommas');
    });
    it('parseFnAndArgs test', () => {
      const res = parseFnAndArgs('functionName:"argument"');
      expect(res[0]).toBe('functionName');
      expect(res[1]).toBe('argument');
    });
    it('formats test', () => {
      const res = formats(1000, 'numberWithCommas');
      expect(res).toBe('1,000');
    });
  });
});
