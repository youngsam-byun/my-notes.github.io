import React, { Suspense, useEffect } from "react";
import '../src/i18n/i18n';
import { viewPorts } from '../src/commons/viewports/viewports';
import { i18n } from "../src/i18n/i18n";
import { I18nextProvider } from "react-i18next";
import { Locales } from "../src/i18n/locales";
import { GlobalStyle} from "../src/styles/GlobalStyle";
import 'semantic-ui-css/semantic.min.css'
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../src/styles/default-theme";

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: viewPorts,
    defaultViewport: viewPorts.desktop,
  }
};

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    toolbar: {
      icon: 'globe',
      items: [
        { value: Locales.en_US.code, title: Locales.en_US.description },
        { value: Locales.ko_KR.code, title: Locales.ko_KR.description },
        { value: Locales.zh_TW.code, title: Locales.zh_TW.description },
        { value: Locales.zh_CN.code, title: Locales.zh_CN.description }
      ],
      showName: true,
    },
  },
};

const withI18next = (Story, context) => {
  const { locale } = context.globals;

  useEffect(() => {
    i18n.changeLanguage(locale).then(r =>{});
  }, [locale]);

  return (
    <Suspense fallback={<div>loading translations...</div>}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <I18nextProvider i18n={i18n}>
          <Story />
        </I18nextProvider>
      </ThemeProvider>
    </Suspense>
  );
};

export const decorators = [withI18next];