import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import useDebounce from 'use-debounce';
import { fetchWeatherAction } from 'state/action-creators';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = ({ query, selectedUnit }) => {
  const dispatch = useDispatch();

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
  query: PropTypes.string,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Home;
