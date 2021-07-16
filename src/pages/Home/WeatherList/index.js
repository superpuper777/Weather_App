import React from 'react';
import PropTypes from 'prop-types';

import { generateId } from 'utils';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import WeatherListItem from './WeatherListItem';
import * as S from './styled';

const WeatherList = ({ listOfWeather, loading, isError }) => {
  console.log(listOfWeather);
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
        {listOfWeather.map((el) => (
          <S.WeatherListItem key={generateId()}>
            <WeatherListItem loading={loading} isError={isError} el={el} />
          </S.WeatherListItem>
        ))}
      </S.WeatherList>
    </S.WeatherWrapper>
  );
};

WeatherList.propTypes = {
  listOfWeather: PropTypes.arrayOf(PropTypes.array),
  loading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
};

export default WeatherList;
