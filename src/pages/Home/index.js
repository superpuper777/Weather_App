import React, { useState } from 'react';
import * as S from './styled';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';

const Home = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  console.log(currentWeather);
  return (
    <S.Wrapper>
      <SearchBar setCurrentWeather={setCurrentWeather} />
      <WeatherInfo currentWeather={currentWeather} />
      <WeatherList />
    </S.Wrapper>
  );
};

export default Home;
