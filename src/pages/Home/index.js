import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { fetchWeatherAction } from 'state/action-creators';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = ({ selectedUnit }) => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    const getWeather = async () => {
      await dispatch(fetchWeatherAction(debounceQuery, selectedUnit.value));
    };

    getWeather();
  }, [debounceQuery, selectedUnit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherInfo />
    </S.Wrapper>
  );
};

Home.propTypes = {
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Home;
