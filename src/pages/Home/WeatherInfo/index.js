import React from 'react';
import PropTypes from 'prop-types';
import { WiNightAltShowers } from 'weather-icons-react';

import * as S from './styled';
import LoadingSpinner from '../../../components/LoadingSpinner';
import LoadingError from '../../../components/LoadingError';

export const upperCase = (str) => {
  if (!str) return str;

  return str[0].toUpperCase() + str.slice(1);
};

const WeatherInfo = ({ currentWeather, loading, isError }) => {
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
          {currentWeather.name}, {currentWeather.sys.country}
        </S.Title>
        <S.CurrentWeatherWrapper>
          <WiNightAltShowers size={46} color="palevioletred" />
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
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default WeatherInfo;
