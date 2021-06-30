import React from 'react';
import * as S from './styled';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';

const Home = () => {
  return (
    <S.Wrapper>
      <SearchBar />
      <WeatherInfo />
      <WeatherList />
    </S.Wrapper>
  );
};

export default Home;
