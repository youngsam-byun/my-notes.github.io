import {
  HCardInfo,
  hCardMapById,
} from '../../components/HCard/hcard-constants';
import { chunkArray } from '../array-utils';

describe('array-utils.test.ts', () => {
  it('given Array when chunkArray return result', () => {
    const hCardInfoArray: HCardInfo[] = Array.from(hCardMapById.values());
    const result: Array<Array<HCardInfo>> = chunkArray(hCardInfoArray, 3);
    expect(result.length).toBe(4);
  });
});
