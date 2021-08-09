import React from 'react';
import { useSelector } from 'react-redux';

import { generateId, cleanedArray } from 'utils';
import { getForecast, getIsLoading, getIsError } from 'state/forecast/selectors';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import WeatherListItem from './WeatherListItem';
import * as S from './styled';

const WeatherList = () => {
  const forecast = useSelector(getForecast);

  const isLoading = useSelector(getIsLoading);

  const isError = useSelector(getIsError);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (isError) {
    return <LoadingError />;
  }
  if (!forecast) {
    return null;
  }

  return (
    <S.WeatherWrapper>
      <S.Title>5-day forecast</S.Title>
      <S.WeatherList>
        {cleanedArray(forecast).map((el) => (
          <S.WeatherListItem key={generateId()}>
            <WeatherListItem el={el} />
          </S.WeatherListItem>
        ))}
      </S.WeatherList>
    </S.WeatherWrapper>
  );
};

export default WeatherList;
