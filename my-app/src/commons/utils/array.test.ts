import { chunk, repeat } from './array';

describe('chunk', () => {
  it('should create chunks of passed number of size', () => {
    const array = [1, 2, 3, 4, 5];
    const result = chunk(array, 3);
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining([1, 2, 3])]),
    );
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining([4, 5])]),
    );
  });

  it('should create chunks of default number of size', () => {
    const array = [1, 2];
    const result = chunk(array);
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining([1])]),
    );
    expect(result).toEqual(
      expect.arrayContaining([expect.arrayContaining([2])]),
    );
  });
});

describe('repeat', () => {
  it('should repeat values n times', () => {
    const times = 5;
    const expected = [0, 1, 2, 3, 4];
    const repeatFn = jest.fn((k) => k);
    expect(repeat(times, repeatFn)).toEqual(expected);
    expect(repeatFn).toHaveBeenCalledTimes(times);
  });
});
