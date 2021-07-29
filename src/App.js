import React from 'react';

import './App.css';
import RouterComponent from 'router';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from 'state';

function App() {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);

  const forecast = useSelector((state) => state.forecast);

  const AC = bindActionCreators(actionCreators, dispatch);

  console.log(AC);

  console.log(weather, forecast);

  return <RouterComponent />;
}

export default App;
