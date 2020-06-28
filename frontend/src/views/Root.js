import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import { I18nextProvider } from 'react-i18next';
import i18next from 'i18next';
import Languages from 'lang';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import ShopListPage from 'views/ShopListPage';
import LoginPage from 'views/LoginPage';
import RegisterPage from 'views/RegisterPage';
import SettingsPage from 'views/SettingsPage';

i18next.init({
  interpolation: { escapeValue: false },
  lng: 'pl',
  resources: {
    en: {
      translation: Languages.en,
    },
    pl: {
      translation: Languages.pl,
    },
  },
});

const Root = () => (
  <Provider store={store}>
    <I18nextProvider i18n={i18next}>
      <BrowserRouter>
        <MainTemplate>
          <Switch>
            <Route exact path={routes.home} render={() => <Redirect to={routes.products} />} />
            <Route path={routes.products} component={MainPage} />
            <Route path={routes.shopping} component={ShopListPage} />
            <Route exact path={routes.login} component={LoginPage} />
            <Route exact path={routes.register} component={RegisterPage} />
            <Route path={routes.settings} component={SettingsPage} />
          </Switch>
        </MainTemplate>
      </BrowserRouter>
    </I18nextProvider>
  </Provider>
);
export default Root;
