import React from 'react';
import { WiNightAltShowers } from 'weather-icons-react';
import * as S from './styled';

const upperCase = (str) => {
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
};

const WeatherInfo = ({ currentWeather }) => {
  const { name, main, weather, sys, visibility, wind } = currentWeather;
  return (
    <S.MainWrapper>
      <S.StyledDate>{new Date().toDateString()} </S.StyledDate>
      <S.Title>
        {name}, {sys.country}
      </S.Title>
      <S.CurrentWeatherWrapper>
        <WiNightAltShowers size={46} color="palevioletred" />
        <S.Title>30&#8451;</S.Title>
      </S.CurrentWeatherWrapper>
      <S.Description>Feels like 20°C. Scattered clouds. Light breeze </S.Description>
      <S.InfoWrapper>
        <S.Text>0.18mm</S.Text>
        <S.Text>3.8m/s NNW</S.Text>
        <S.Text>1012 hPa</S.Text>
        <S.Text>Humidity: 80%</S.Text>
        <S.Text>UV: 1</S.Text>
        <S.Text>Dew point: 24&#8451;</S.Text>
        <S.Text>Visibility: 10.0km</S.Text>
      </S.InfoWrapper>
    </S.MainWrapper>
  );
};

export default WeatherInfo;

// {Math.round(main.feels_like)}&#8451;.
// return (
//   <MainWrapper>
//     <StyledDate>{new Date().toDateString()} </StyledDate>
//     <Title>
//       {name}, {sys.country}
//     </Title>
//     <Wrapper>
//       <WiNightAltShowers size={46} color="palevioletred" />
//       <Title>{Math.round(main.temp)}&#8451;</Title>
//     </Wrapper>
//     <Span>
//       Feels like {Math.round(main.feels_like)}&#8451;. {upperCase(weather[0].description)}.
//     </Span>
//     <Div>
//       <Text>0.18mm</Text>
//       <Text>{wind.speed}m/s NNW</Text>
//       <Text>{main.pressure} hPa</Text>
//       <Text>Humidity: {main.humidity}%</Text>
//       <Text>UV: 1</Text>
//       <Text>Dew point: 24&#8451;</Text>
//       <Text>Visibility: {visibility / 1000}km</Text>
//     </Div>
//   </MainWrapper>
// );
