import React from 'react';
import PropTypes from 'prop-types';

import { upperCase, getFormatedDate, getTime } from 'utils';
import { iconUrl } from 'services/weather';
import * as S from './styled';

const WeatherListItem = ({ el }) => {
  return (
    <S.Wrapper>
      <S.InfoText date>{getFormatedDate(el[0].dt_txt)}</S.InfoText>
      {el.map((item) => (
        <S.CardWrapper>
          <S.WeatherCard>
            <S.InfoText desc>{getTime(item.dt_txt)}</S.InfoText>
            <S.ImageWrapper>
              <img src={`${iconUrl}${item.weather[0].icon}.png`} alt="weatherIcon" />
            </S.ImageWrapper>
            <S.MainTextWrapper>
              <S.InfoText>{upperCase(item.weather[0].description)}</S.InfoText>
              <S.InfoText desc>
                The high will be {Math.round(item.main.temp_max)}&deg;, the low will be{' '}
                {Math.round(item.main.temp_min)}&deg;
              </S.InfoText>
            </S.MainTextWrapper>
            <S.InfoWrapper>
              <S.Text>{item.wind.speed}m/s</S.Text>
              <S.Text>{item.main.pressure} hPa</S.Text>
              <S.Text>Humidity: {item.main.humidity}%</S.Text>
              <S.Text>Visibility: {(item.visibility / 1000).toFixed(1)}km</S.Text>
            </S.InfoWrapper>
          </S.WeatherCard>
        </S.CardWrapper>
      ))}
    </S.Wrapper>
  );
};

WeatherListItem.propTypes = {
  el: PropTypes.arrayOf(PropTypes.object),
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
