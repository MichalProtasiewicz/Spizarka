import React from 'react';
import ReactDOM from 'react-dom';
import Root from 'views/Root';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import EnglishLang from 'lang/EnglishLang.json';
import PolishLang from 'lang/PolishLang.json';
import * as serviceWorker from './serviceWorker';

i18next.init({
  interpolation: { escapeValue: false }, // React already does escaping
  lng: 'en', // language to use
  resources: {
    en: {
      common: EnglishLang, // 'common' is our custom namespace
    },
    pl: {
      common: PolishLang,
    },
  },
});

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <Root />
  </I18nextProvider>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
