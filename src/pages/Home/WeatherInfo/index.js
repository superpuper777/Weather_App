import React from 'react';
import { useSelector } from 'react-redux';

import { getWeather, getIsLoading, getIsError } from 'state/weather/selectors';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import { upperCase } from 'utils';
import { iconUrl } from 'services/weather';
import * as S from './styled';

const WeatherInfo = () => {
  const weather = useSelector(getWeather);

  const isLoading = useSelector(getIsLoading);

  const isError = useSelector(getIsError);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <LoadingError />;
  }
  if (!weather) {
    return null;
  }

  return (
    <S.MainWrapper>
      <S.Date>{new Date().toDateString()} </S.Date>
      <S.Title>
        {weather.name}, {weather.sys.country}
      </S.Title>
      <S.CurrentWeatherWrapper>
        <S.ImageWrapper>
          <img src={`${iconUrl}${weather.weather[0].icon}.png`} alt="weatherIcon" />
        </S.ImageWrapper>
        <S.Title>{Math.round(weather.main.temp)}&deg;</S.Title>
      </S.CurrentWeatherWrapper>
      <S.Description>
        Feels like {Math.round(weather.main.feels_like)}&deg;.{' '}
        {upperCase(weather.weather[0].description)}.
      </S.Description>
      <S.InfoWrapper>
        <S.Text>{weather.wind.speed}m/s</S.Text>
        <S.Text>{weather.main.pressure} hPa</S.Text>
        <S.Text>Humidity: {weather.main.humidity}%</S.Text>
        <S.Text>Visibility: {(weather.visibility / 1000).toFixed(1)}km</S.Text>
      </S.InfoWrapper>
    </S.MainWrapper>
  );
};

export default WeatherInfo;
