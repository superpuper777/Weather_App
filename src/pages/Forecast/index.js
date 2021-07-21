import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchForecast, groupByDay } from 'services/weather';
import * as S from './styled';
import WeatherList from './WeatherList';

const Forecast = ({ query, selectedUnit }) => {
  const [listOfWeather, setListOfWeather] = useState([]);

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    setIsError(false);
    const getForecast = async () => {
      try {
        const response = await fetchForecast(query, selectedUnit.value);

        setListOfWeather(groupByDay(response.data.list));
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getForecast();
  }, [query, selectedUnit, setListOfWeather, setLoading, setIsError]);

  return (
    <S.Wrapper>
      <WeatherList listOfWeather={listOfWeather} loading={loading} isError={isError} />
    </S.Wrapper>
  );
};

Forecast.propTypes = {
  query: PropTypes.string,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Forecast;
