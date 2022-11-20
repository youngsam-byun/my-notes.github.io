export enum LocalesCode {
  // eslint-disable-next-line no-unused-vars
  en_US = 'en-US',
  // eslint-disable-next-line no-unused-vars
  ko_KR = 'ko-KR',
  // eslint-disable-next-line no-unused-vars
  ja_JP = 'ja-JP',
  // eslint-disable-next-line no-unused-vars
  zh_CN = 'zh-CN',
  // eslint-disable-next-line no-unused-vars
  zh_TW = 'zh-TW',
}

export const Locales = {
  en_US: {
    code: LocalesCode.en_US,
    currency: 'USD',
    description: 'US Dollar',
  },
  ko_KR: {
    code: LocalesCode.ko_KR,
    currency: 'KRW',
    description: 'Korean won',
  },
  ja_JP: {
    code: LocalesCode.ja_JP,
    currency: 'JPY',
    description: 'Japanese Yen',
  },
  zh_CN: {
    code: LocalesCode.zh_CN,
    description: 'Chinese Yuan',
    currency: 'CNY',
  },
  zh_TW: {
    code: LocalesCode.zh_TW,
    description: 'HongKong Dollar',
    currency: 'HKD',
  },
};

export const koreanLocales = ['ko-kr', 'ko-us'];
export const japaneseLocales = ['ja', 'ja-jp', 'ja-us'];
export const simplifiedZhLocales = [
  'zh-hans',
  'zh-hans-cn',
  'zh-hans-us',
  'zh-cn',
  'zh',
  'zh-sg',
];
export const traditionalZhLocales = [
  'zh-hant',
  'zh-hant-cn',
  'zh-hant-us',
  'zh-hant-hk',
  'zh-hant-mo',
  'zh-tw',
  'zh-hk',
  'zh-mo',
];

export function getBrowserLocalesCode(): LocalesCode {
  const systemLanguage = navigator.language;
  if (systemLanguage === undefined || systemLanguage === null) {
    return LocalesCode.en_US;
  }

  const lowerCaseLocale = systemLanguage.toLowerCase();

  if (koreanLocales.includes(lowerCaseLocale)) {
    return LocalesCode.en_US;
  }
  if (japaneseLocales.includes(lowerCaseLocale)) {
    return LocalesCode.ja_JP;
  }
  if (simplifiedZhLocales.includes(lowerCaseLocale)) {
    return LocalesCode.zh_CN;
  }
  if (traditionalZhLocales.includes(lowerCaseLocale)) {
    return LocalesCode.zh_TW;
  }
  return LocalesCode.en_US;
}

export function getBrowserLocales() {
  const systemLanguage = navigator.language;
  if (systemLanguage === null) {
    return Locales.en_US;
  }

  const lowerCaseLocale = systemLanguage.toLowerCase();

  if (koreanLocales.includes(lowerCaseLocale)) {
    return Locales.en_US;
  }
  if (japaneseLocales.includes(lowerCaseLocale)) {
    return Locales.ja_JP;
  }
  if (simplifiedZhLocales.includes(lowerCaseLocale)) {
    return Locales.zh_CN;
  }
  if (traditionalZhLocales.includes(lowerCaseLocale)) {
    return Locales.zh_TW;
  }
  return Locales.en_US;
}
