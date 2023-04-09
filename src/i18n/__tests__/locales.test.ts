import { Locales, LocalesCode } from '../locales';

describe('locales.test.ts', () => {
  describe('LocalesCode', () => {
    it('should have 5 locales', () => {
      expect(Object.keys(LocalesCode).length).toBe(5);
    });
    it('should have en,ko,jp,cn,tw', () => {
      expect(Object.keys(LocalesCode).includes('en_US')).toBe(true);
      expect(Object.keys(LocalesCode).includes('ko_KR')).toBe(true);
      expect(Object.keys(LocalesCode).includes('ja_JP')).toBe(true);
      expect(Object.keys(LocalesCode).includes('zh_CN')).toBe(true);
      expect(Object.keys(LocalesCode).includes('zh_TW')).toBe(true);
    });
  });

  describe('Code in Locales', () => {
    it('US locales code match locale code', () => {
      expect(Locales.en_US.code).toBe(LocalesCode.en_US);
    });
    it('KO locales code match locale code', () => {
      expect(Locales.ko_KR.code).toBe(LocalesCode.ko_KR);
    });
    it('JP locales code match locale code', () => {
      expect(Locales.ja_JP.code).toBe(LocalesCode.ja_JP);
    });
    it('CN locales code match locale code', () => {
      expect(Locales.zh_CN.code).toBe(LocalesCode.zh_CN);
    });
    it('TW locales code match locale code', () => {
      expect(Locales.zh_TW.code).toBe(LocalesCode.zh_TW);
    });
  });

  describe('Currency in Locales', () => {
    it('en currency is usd', () => {
      expect(Locales.en_US.currency).toBe('USD');
    });
    it('ko currency is krw', () => {
      expect(Locales.ko_KR.currency).toBe('KRW');
    });
    it('ja currency is jpy', () => {
      expect(Locales.ja_JP.currency).toBe('JPY');
    });
    it('cn currency is cny', () => {
      expect(Locales.zh_CN.currency).toBe('CNY');
    });
    it('tw currency is hkd', () => {
      expect(Locales.zh_TW.currency).toBe('HKD');
    });
  });
});
