import React from 'react';
import { Button } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';

export function I18View() {
  const { t, i18n } = useTranslation('label');
  return (
    <div>
      <Button primary>hahahah</Button>
      <span>language: {i18n.language}</span>
      <h1>{t('test')}</h1>
    </div>
  );
}
