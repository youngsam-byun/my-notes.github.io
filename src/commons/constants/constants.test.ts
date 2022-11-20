import { HOSTS } from './constants';

describe('constants.test.ts', () => {
  describe('HOSTS test', () => {
    it('return environment host name', () => {
      const sit = HOSTS.sit;
      expect(sit).toBe('sit host');
    });
  });
});
