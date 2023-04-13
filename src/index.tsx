import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './i18n/i18n';
import 'semantic-ui-css/semantic.min.css';
import { DefaultGlobalStyle } from './styles/GlobalStyle';
import { GlobalHeader } from './components/Header/GlobalHeader';
import { Divider } from 'semantic-ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <DefaultGlobalStyle />
    <GlobalHeader title={'Daily Horoscope'} height={'4em'} />
    <Divider hidden />
    <App />
  </>,
);
