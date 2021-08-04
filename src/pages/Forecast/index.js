import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';

import useDebounce from 'use-debounce';
import { fetchForecastAction } from 'state/action-creators';
import * as S from './styled';
import WeatherList from './WeatherList';

const Forecast = ({ selectedUnit }) => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    const getForecast = async () => {
      await dispatch(fetchForecastAction(debounceQuery, selectedUnit.value));
    };

    getForecast();
  }, [debounceQuery, selectedUnit, dispatch]);

  return (
    <S.Wrapper>
      <WeatherList />
    </S.Wrapper>
  );
};

Forecast.propTypes = {
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Forecast;
