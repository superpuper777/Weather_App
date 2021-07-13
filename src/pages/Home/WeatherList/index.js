import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';
import WeatherListItem from './WeatherListItem';
import LoadingSpinner from '../../../components/LoadingSpinner';
import LoadingError from '../../../components/LoadingError';

const WeatherList = ({ listOfWeather, weatherIcon, loading, isError }) => {
  if (loading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <LoadingError />;
  }
  if (!listOfWeather) {
    return;
  }

  return (
    <S.WeatherWrapper>
      <S.Title>5-day forecast</S.Title>
      <S.WeatherList>
        {listOfWeather.map((item) => (
          <S.WeatherListItem key={item.dt}>
            <WeatherListItem
              weatherIcon={weatherIcon}
              loading={loading}
              isError={isError}
              item={item}
            />
          </S.WeatherListItem>
        ))}
      </S.WeatherList>
    </S.WeatherWrapper>
  );
};

WeatherList.propTypes = {
  listOfWeather: PropTypes.arrayOf(PropTypes.object).isRequired,
  weatherIcon: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default WeatherList;
