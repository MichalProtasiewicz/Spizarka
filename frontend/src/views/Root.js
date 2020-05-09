import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { routes } from 'routes';
import store from 'store';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import ShopListPage from 'views/ShopListPage';

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <MainTemplate>
        <Switch>
          <Route exact path={routes.home} render={() => <Redirect to={routes.products} />} />
          <Route path={routes.products} component={MainPage} />
          <Route path={routes.shopping} component={ShopListPage} />
        </Switch>
      </MainTemplate>
    </BrowserRouter>
  </Provider>
);
export default Root;
