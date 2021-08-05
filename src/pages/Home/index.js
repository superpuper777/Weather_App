import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { fetchWeatherAction } from 'state/action-creators';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  const unit = useSelector((state) => state.unit.value);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    const getWeather = async () => {
      await dispatch(fetchWeatherAction(debounceQuery, unit));
    };

    getWeather();
  }, [debounceQuery, unit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherInfo />
    </S.Wrapper>
  );
};

export default Home;
