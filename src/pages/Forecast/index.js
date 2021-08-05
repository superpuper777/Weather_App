import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { fetchForecastAction } from 'state/forecast/action-creators';
import * as S from './styled';
import WeatherList from './WeatherList';

const Forecast = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  const unit = useSelector((state) => state.unit.value);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    const getForecast = async () => {
      await dispatch(fetchForecastAction(debounceQuery, unit));
    };

    getForecast();
  }, [debounceQuery, unit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherList />
    </S.Wrapper>
  );
};

export default Forecast;
