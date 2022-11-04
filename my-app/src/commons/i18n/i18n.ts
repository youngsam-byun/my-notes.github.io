import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import { initOptions } from './i18n-init-options';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    ...initOptions,
    load: 'currentOnly',
    debug: process.env.NODE_ENV === 'development',
  });

export const i18n = i18next;
