import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/GlobalStyle';
import 'semantic-ui-css/semantic.min.css';
import './i18n/i18n';
import { GlobalHeader } from './components/Header/GlobalHeader';
import { App } from './App';
import { Divider } from 'semantic-ui-react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <>
    <GlobalHeader title={'Daily Horoscope'} height={'4em'} />
    <Divider hidden />
    <App />
  </>,
);
