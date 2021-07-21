import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Home from 'pages/Home';
import Forecast from 'pages/Forecast';
import * as S from './styled';

const RouterComponent = () => {
  return (
    <S.RouterWrapper>
      <Header />
      <SearchBar />
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/forecast">
            <Forecast />
          </Route>
        </Switch>
      </Router>
    </S.RouterWrapper>
  );
};

export default RouterComponent;
