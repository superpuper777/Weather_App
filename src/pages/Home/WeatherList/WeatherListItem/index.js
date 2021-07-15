import React from 'react';
import PropTypes from 'prop-types';

import { upperCase, getFormatedDate } from 'utils';
import * as S from './styled';
import { iconUrl } from '../../SearchBar/SearchInput';

const WeatherListItem = ({ item }) => {
  const icon = `${iconUrl}${item.weather[0].icon}.png`;

  return (
    <S.Wrapper>
      <S.InfoText date>{getFormatedDate(item.dt_txt)}</S.InfoText>
      <S.WeatherWrapper>
        <S.MainInfoWrapper>
          <S.ImageWrapper>
            <img src={icon} alt="weatherIcon" />
          </S.ImageWrapper>
          <S.MainTextWrapper>
            <S.InfoText>{upperCase(item.weather[0].description)}</S.InfoText>
            <S.InfoText desc>
              The high will be {Math.round(item.main.temp_max)}&deg;, the low will be{' '}
              {Math.round(item.main.temp_min)}&deg;
            </S.InfoText>
          </S.MainTextWrapper>
        </S.MainInfoWrapper>
        <S.InfoWrapper>
          <S.Text>{item.wind.speed}m/s</S.Text>
          <S.Text>{item.main.pressure} hPa</S.Text>
          <S.Text>Humidity: {item.main.humidity}%</S.Text>
          <S.Text>Visibility: {(item.visibility / 1000).toFixed(1)}km</S.Text>
        </S.InfoWrapper>
      </S.WeatherWrapper>
    </S.Wrapper>
  );
};

WeatherListItem.propTypes = {
  item: PropTypes.shape({
    dt: PropTypes.number.isRequired,
    dt_txt: PropTypes.string.isRequired,
    main: PropTypes.shape({
      feels_like: PropTypes.number.isRequired,
      humidity: PropTypes.number.isRequired,
      pressure: PropTypes.number.isRequired,
      temp: PropTypes.number.isRequired,
      temp_min: PropTypes.number.isRequired,
      temp_max: PropTypes.number.isRequired,
    }),
    weather: PropTypes.arrayOf(
      PropTypes.shape({ description: PropTypes.string.isRequired, icon: PropTypes.string }),
    ),
    visibility: PropTypes.number,
    wind: PropTypes.shape({ speed: PropTypes.number.isRequired }),
  }),
};

export default WeatherListItem;
