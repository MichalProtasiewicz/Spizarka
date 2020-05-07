import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';
import ShopListPage from 'views/ShopListPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={MainPage} />
        <Route path={routes.shopping} component={ShopListPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
