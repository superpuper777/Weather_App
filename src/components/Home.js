import React, { useState } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';

const Wrapper = styled.div`
  padding: 0 6rem;
`;
const Home = () => {
  const [currentWeather, setCurrentWeather] = useState({});
  console.log(currentWeather);
  return (
    <Wrapper>
      <SearchBar setCurrentWeather={setCurrentWeather} />
      <WeatherInfo currentWeather={currentWeather} />
      <WeatherList />
    </Wrapper>
  );
};

export default Home;
