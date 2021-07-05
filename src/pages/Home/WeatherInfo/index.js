import React from 'react';
import { WiNightAltShowers } from 'weather-icons-react';
import * as S from './styled';
import LoadingSpinner from '../../../components/LoadingSpinner';
import LoadingError from '../../../components/LoadingError';

const upperCase = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

const WeatherInfo = ({ currentWeather, loading, isError }) => {
  const { name, main, weather, sys, visibility, wind } = currentWeather;

  if (loading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <LoadingError />;
  }
  if (Object.keys(currentWeather).length !== 0) {
    return (
      <S.MainWrapper>
        <S.StyledDate>{new Date().toDateString()} </S.StyledDate>
        <S.Title>
          {name}, {sys.country}
        </S.Title>
        <S.CurrentWeatherWrapper>
          <WiNightAltShowers size={46} color="palevioletred" />
          <S.Title>{Math.round(main.temp)}&#8451;</S.Title>
        </S.CurrentWeatherWrapper>
        <S.Description>
          Feels like {Math.round(main.feels_like)}&#8451;. {upperCase(weather[0].description)}.
        </S.Description>
        <S.InfoWrapper>
          <S.Text>0.18mm</S.Text>
          <S.Text>{wind.speed}m/s NNW</S.Text>
          <S.Text>{main.pressure} hPa</S.Text>
          <S.Text>Humidity: {main.humidity}%</S.Text>
          <S.Text>UV: 1</S.Text>
          <S.Text>Dew point: 24&#8451;</S.Text>
          <S.Text>Visibility: {(visibility / 1000).toFixed(1)}km</S.Text>
        </S.InfoWrapper>
      </S.MainWrapper>
    );
  }

  return <div>Weather api doesn`&apos;`t work</div>; /* how to do without it? */
};

export default WeatherInfo;
