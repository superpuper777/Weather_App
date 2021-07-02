import React from 'react';
import { WiNightAltShowers } from 'weather-icons-react';
import * as S from './styled';

const WeatherInfo = () => {
  return (
    <S.MainWrapper>
      <S.StyledDate>{new Date().toDateString()} </S.StyledDate>
      <S.Title>Minsk, BY</S.Title>
      <S.CurrentWeatherWrapper>
        <WiNightAltShowers size={46} color="palevioletred" />
        <S.Title>30&#8451;</S.Title>
      </S.CurrentWeatherWrapper>
      <S.Description>Feels like 32&#8451;. Overcast clouds. Light breeze </S.Description>
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
