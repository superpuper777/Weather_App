import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import * as S from './styled';
import Header from '../components/Header';
import Home from '../pages/Home';

const RouterComponent = () => {
  return (
    <S.RouterWrapper>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </S.RouterWrapper>
  );
};

export default RouterComponent;
