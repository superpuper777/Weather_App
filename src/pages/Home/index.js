import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { getUnit } from 'state/unit/selectors';
import { getQuery } from 'state/search/selectors';
import { fetchWeatherAction } from 'state/weather/thunks';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector(getQuery);

  const unit = useSelector(getUnit);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    dispatch(fetchWeatherAction(debounceQuery, unit));
  }, [debounceQuery, unit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherInfo />
    </S.Wrapper>
  );
};

export default Home;
