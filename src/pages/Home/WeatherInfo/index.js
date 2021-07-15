import React from 'react';
import PropTypes from 'prop-types';

import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import { upperCase } from 'utils';
import * as S from './styled';

const WeatherInfo = ({ currentWeather, weatherIcon, loading, isError }) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <LoadingError />;
  }
  if (Object.keys(currentWeather).length !== 0) {
    return (
      <S.MainWrapper>
        <S.Date>{new Date().toDateString()} </S.Date>
        <S.Title>
          {currentWeather.name}, {currentWeather.sys.country}
        </S.Title>
        <S.CurrentWeatherWrapper>
          <S.ImageWrapper>
            <img src={weatherIcon} alt="weatherIcon" />
          </S.ImageWrapper>
          <S.Title>{Math.round(currentWeather.main.temp)}&deg;</S.Title>
        </S.CurrentWeatherWrapper>
        <S.Description>
          Feels like {Math.round(currentWeather.main.feels_like)}&deg;.{' '}
          {upperCase(currentWeather.weather[0].description)}.
        </S.Description>
        <S.InfoWrapper>
          <S.Text>{currentWeather.wind.speed}m/s</S.Text>
          <S.Text>{currentWeather.main.pressure} hPa</S.Text>
          <S.Text>Humidity: {currentWeather.main.humidity}%</S.Text>
          <S.Text>Visibility: {(currentWeather.visibility / 1000).toFixed(1)}km</S.Text>
        </S.InfoWrapper>
      </S.MainWrapper>
    );
  }

  return <div>Weather api doesn`&apos;`t work</div>; /* how to do without it? */
};

WeatherInfo.propTypes = {
  currentWeather: PropTypes.shape({
    name: PropTypes.string,
    main: PropTypes.shape({
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({ description: PropTypes.string.isRequired, icon: PropTypes.string }),
    ),
    sys: PropTypes.shape({ country: PropTypes.string.isRequired }),
    visibility: PropTypes.number,
    wind: PropTypes.shape({ speed: PropTypes.number.isRequired }),
  }),
  weatherIcon: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default WeatherInfo;
