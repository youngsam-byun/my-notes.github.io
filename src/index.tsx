import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';
import './i18n/i18n';
import { DefaultGlobalStyle } from './styles/GlobalStyle';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <DefaultGlobalStyle />
    <App />
  </>,
);
