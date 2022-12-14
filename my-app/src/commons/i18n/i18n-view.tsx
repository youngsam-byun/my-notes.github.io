import React from 'react';
import { useTranslation } from 'react-i18next';

export function I18nView() {
  const { t, i18n } = useTranslation();

  return (
    <div>
      <span>language: {i18n.language}</span>
      <h1>{t('label:test')}</h1>
      <button onClick={() => i18n.changeLanguage('ko-KR')}>Korean</button>
      <button onClick={() => i18n.changeLanguage('en-US')}>English</button>
    </div>
  );
}
