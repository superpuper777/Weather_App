import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from 'components/Header';
import SearchBar from 'components/SearchBar';
import Home from 'pages/Home';
import Forecast from 'pages/Forecast';
import * as S from './styled';

const RouterComponent = () => {
  const [selectedUnit, setSelectedUnit] = useState({
    value: 'metric',
  });

  return (
    <S.RouterWrapper>
      <Router>
        <Header />
        <SearchBar onUnitChange={setSelectedUnit} />
        <Switch>
          <Route exact path="/">
            <Home selectedUnit={selectedUnit} />
          </Route>
          <Route exact path="/forecast">
            <Forecast selectedUnit={selectedUnit} />
          </Route>
        </Switch>
      </Router>
    </S.RouterWrapper>
  );
};

export default RouterComponent;
