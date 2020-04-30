import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { routes } from 'routes';
import MainTemplate from 'templates/MainTemplate';
import MainPage from 'views/MainPage';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={MainPage} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);
export default Root;
