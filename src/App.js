import React from 'react';

import './App.css';
import RouterComponent from 'router';
import { useSelector } from 'react-redux';

function App() {
  const weather = useSelector((state) => state.weather);

  const forecast = useSelector((state) => state.forecast);

  console.log(weather, forecast);

  return <RouterComponent />;
}

export default App;
