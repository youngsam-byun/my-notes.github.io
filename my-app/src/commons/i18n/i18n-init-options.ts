import { InitOptions } from 'i18next';
import { getBrowserLocalesCode, LocalesCode } from './locales';
import { format } from './format';

// eslint-disable-next-line
const resourceBundle = require("i18next-resource-store-loader!../../locales/index");

export const initOptions: InitOptions = {
  resources: resourceBundle,
  fallbackLng: getBrowserLocalesCode(),
  supportedLngs: Object.values(LocalesCode),
  interpolation: {
    escapeValue: false,
    formatSeparator: '|',
    format: format,
  },
  react: {
    transSupportBasicHtmlNodes: true,
    transKeepBasicHtmlNodesFor: ['strong', 'br'],
  },
};
