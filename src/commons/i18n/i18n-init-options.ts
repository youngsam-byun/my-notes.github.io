import { InitOptions } from 'i18next';
import { getBrowserLocalesCode, LocalesCode } from './locales';
import { formats } from './formats';

// eslint-disable-next-line
const resourceBundle = require('i18next-resource-store-loader!../../locales/index');

export const initOptions: InitOptions = {
  resources: resourceBundle,
  fallbackLng: getBrowserLocalesCode(),
  supportedLngs: Object.values(LocalesCode),
  interpolation: {
    escapeValue: false,
    formatSeparator: '|',
    format: formats,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['strong', 'br'],
  },
};
