import { initReactI18next } from 'react-i18next';
import i18next from 'i18next';

export const resources = {
  en: {
    translation: {
      welcome: 'Good morning.',
    },
  },
  ko: {
    translation: {
      welcome: '좋은 아침 입니다.',
    },
  },
};
i18next.use(initReactI18next).init({
  resources,
  lng: 'en',
});

export const i18n = i18next;
