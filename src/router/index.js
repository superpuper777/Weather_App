import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { WiDayShowers } from 'weather-icons-react';
import * as S from './styled';
import Home from '../pages/Home';

const RouterComponent = () => {
  return (
    <Router>
      <S.Navigation>
        <S.NavigationItem>
          <WiDayShowers size={46} color="palevioletred" />
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavLink to="/">Home</S.NavLink>
        </S.NavigationItem>
      </S.Navigation>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default RouterComponent;
