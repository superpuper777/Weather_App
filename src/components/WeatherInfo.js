import React from 'react';
import styled from 'styled-components';
import { WiNightAltShowers } from 'weather-icons-react';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

const MainWrapper = styled.section`
  width: 40%;
  padding: 4em;
  background: papayawhip;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

const StyledDate = styled.span`
  color: palevioletred;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Span = styled.span`
  color: gray;
  font-size: 18px;
  margin-bottom: 1rem;
`;

const Text = styled.p`
  width: 150px;
  color: palevioletred;
  font-size: 16px;
  margin: 0 2rem;
`;

const Div = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  border-left: 1px solid #d38ca4;
`;
const upperCase = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

const WeatherInfo = ({ currentWeather }) => {
  const { name, main, weather, sys, visibility, wind } = currentWeather;

  return (
    <MainWrapper>
      <StyledDate>{new Date().toDateString()} </StyledDate>
      <Title>
        {name}, {sys.country}
      </Title>
      <Wrapper>
        <WiNightAltShowers size={46} color="palevioletred" />
        <Title>{Math.round(main.temp)}&#8451;</Title>
      </Wrapper>
      <Span>
        Feels like {Math.round(main.feels_like)}&#8451;. {upperCase(weather[0].description)}.
      </Span>
      <Div>
        <Text>0.18mm</Text>
        <Text>{wind.speed}m/s NNW</Text>
        <Text>{main.pressure} hPa</Text>
        <Text>Humidity: {main.humidity}%</Text>
        <Text>UV: 1</Text>
        <Text>Dew point: 24&#8451;</Text>
        <Text>Visibility: {visibility / 1000}km</Text>
      </Div>
    </MainWrapper>
  );
};

export default WeatherInfo;
