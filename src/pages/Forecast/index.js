import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { getUnit } from 'state/unit/selectors';
import { getQuery } from 'state/search/selectors';
import { fetchForecastAction } from 'state/forecast/action-creators';
import * as S from './styled';
import WeatherList from './WeatherList';

const Forecast = () => {
  const dispatch = useDispatch();

  const query = useSelector(getQuery);

  const unit = useSelector(getUnit);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    dispatch(fetchForecastAction(debounceQuery, unit));
  }, [debounceQuery, unit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherList />
    </S.Wrapper>
  );
};

export default Forecast;
