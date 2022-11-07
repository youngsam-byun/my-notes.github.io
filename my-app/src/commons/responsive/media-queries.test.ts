import {
  desktopOnly,
  desktopUp,
  phoneOnly,
  tabletOnly,
  tabletUp,
  wideDesktopUp,
} from './media-queries';

describe('media-queries.test.ts', () => {
  describe('media queries test', () => {
    it('phone only test', () => {
      const expected = '@media only screen and (max-width: 47.938rem)';
      expect(phoneOnly()).toBe(expected);
    });

    it('tabletUpBounds   test', () => {
      const expected = '@media only screen and (min-width: 48rem)';
      expect(tabletUp()).toBe(expected);
    });

    it('tabletOnly test', () => {
      const expected =
        '@media only screen and (min-width: 48rem) and {max-width: 63.938rem)';
      expect(tabletOnly()).toBe(expected);
    });

    it('desktopUp test', () => {
      const expected = '@media only screen and (min-width: 64rem)';
      expect(desktopUp()).toBe(expected);
    });

    it('desktopOnly test', () => {
      const expected =
        '@media only screen and (min-width: 64rem) and (max-width: 89.938rem)';
      expect(desktopOnly()).toBe(expected);
    });

    it('wideDesktopUp test', () => {
      const expected = '@media only screen and (min-width: 90rem)';
      expect(wideDesktopUp()).toBe(expected);
    });
  });
});
