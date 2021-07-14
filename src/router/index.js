import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import Home from 'pages/Home';
import * as S from './styled';

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
