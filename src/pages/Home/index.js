import React, { useState } from 'react';

import * as S from './styled';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState({});

  const [selectedUnit, setSelectedUnit] = useState({ value: 'metric' });

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  return (
    <S.Wrapper>
      <SearchBar
        setCurrentWeather={setCurrentWeather}
        selectedUnit={selectedUnit}
        setSelectedUnit={setSelectedUnit}
        setLoading={setLoading}
        setIsError={setIsError}
      />
      <WeatherInfo currentWeather={currentWeather} loading={loading} isError={isError} />
      <WeatherList />
    </S.Wrapper>
  );
};

export default Home;
