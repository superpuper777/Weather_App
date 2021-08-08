import React from 'react';
import { useSelector } from 'react-redux';

import { generateId, cleanedArray } from 'utils';
import LoadingSpinner from 'components/LoadingSpinner';
import LoadingError from 'components/LoadingError';
import WeatherListItem from './WeatherListItem';
import * as S from './styled';

const WeatherList = () => {
  const forecast = useSelector((state) => state.forecast.forecast);

  const isLoading = useSelector((state) => state.forecast.isLoading);

  const isError = useSelector((state) => state.forecast.isError);

  const sa = useSelector((state) => state.forecast);

  console.log(forecast, sa);

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
      <S.Title> 5 - day forecast </S.Title>
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
