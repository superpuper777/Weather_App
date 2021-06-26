import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import WeatherInfo from './WeatherInfo';
import WeatherList from './WeatherList';

const Wrapper = styled.div`
  padding: 0 6rem;
`;
const Home = () => {
  return (
    <Wrapper>
      <SearchBar />
      <WeatherInfo />
      <WeatherList />
    </Wrapper>
  );
};

export default Home;
