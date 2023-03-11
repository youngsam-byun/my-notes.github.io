import {
  BreakpointsKey,
  pxToRemRaw,
  widthsPx,
  widthsRem,
} from '../breakpoint-widths';

describe('breakpoint.test.ts', () => {
  describe('keyof test', () => {
    it('keyof returns type', () => {
      const breakpointsKey: BreakpointsKey = 'wideDesktop';
      expect(breakpointsKey).toBe('laptop');
    });
  });

  describe('breakpoint-width function test', () => {
    it('pxToRemRaw test', () => {
      const rem = pxToRemRaw(1000);
      expect(rem).toBe(62.5);
    });
    it('widthsPx test', () => {
      expect(JSON.stringify(widthsPx)).toBe(
        '{"min":{"mobile":375,"tablet":768,"desktop":1024,"wideDesktop":1440},"max":{"mobile":767,"tablet":1023,"desktop":1439,"wideDesktop":1920}}',
      );
    });
    it('widthsRem test', () => {
      expect(JSON.stringify(widthsRem)).toBe(
        '{"min":{"mobile":23.438,"tablet":48,"desktop":64,"wideDesktop":90},"max":{"mobile":47.938,"tablet":63.938,"desktop":89.938,"wideDesktop":120}}',
      );
    });
  });
});
