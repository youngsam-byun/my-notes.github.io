import React from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
export function I18nView() {
  const { t, i18n } = useTranslation('label');
  function handleChangeLanguage(v: string) {
    i18n.changeLanguage(v);
  }

  return (
    <>
      <div>
        <select
          onChange={(e) => handleChangeLanguage(e.target.value)}
          defaultValue={i18n.language}
        >
          <option value="en-US">English</option>
          <option value="ko-KR">Korean</option>
          <option value="ja-JP">Japanese</option>
        </select>
      </div>
      <div>
        <span>language: {i18n.language}</span>
        <h1>{t('test')}</h1>
      </div>
    </>
  );
}
