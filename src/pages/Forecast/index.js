import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { fetchForecast, groupByDay } from 'services/weather';
import useDebounce from 'use-debounce';
import { fetchForecastAction } from 'state/action-creators';
import * as S from './styled';
import WeatherList from './WeatherList';

const Forecast = ({ query, selectedUnit }) => {
  const dispatch = useDispatch();

  const [listOfWeather, setListOfWeather] = useState([]);

  const [isLoading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    setLoading(true);
    setIsError(false);
    const getForecast = async () => {
      try {
        const response = await fetchForecast(debounceQuery, selectedUnit.value);

        dispatch(fetchForecastAction(debounceQuery, selectedUnit.value));

        setListOfWeather(groupByDay(response.data.list));
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getForecast();
  }, [debounceQuery, selectedUnit, setListOfWeather, setLoading, setIsError, dispatch]);

  return (
    <S.Wrapper>
      <WeatherList listOfWeather={listOfWeather} isLoading={isLoading} isError={isError} />
    </S.Wrapper>
  );
};

Forecast.propTypes = {
  query: PropTypes.string,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Forecast;
