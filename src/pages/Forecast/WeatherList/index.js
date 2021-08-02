import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import { generateId, cleanedArray } from 'utils';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import WeatherListItem from './WeatherListItem';
import * as S from './styled';

const WeatherList = ({ listOfWeather, isLoading, isError }) => {
  const forecast = useSelector((state) => state.forecast.forecast);

  console.log(forecast);
  if (isLoading) {
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
        {cleanedArray(listOfWeather).map((el) => (
          <S.WeatherListItem key={generateId()}>
            <WeatherListItem isLoading={isLoading} isError={isError} el={el} />
          </S.WeatherListItem>
        ))}
      </S.WeatherList>
    </S.WeatherWrapper>
  );
};

WeatherList.propTypes = {
  listOfWeather: PropTypes.arrayOf(PropTypes.array),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default WeatherList;
