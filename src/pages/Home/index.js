import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchWeather } from 'services/weather';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = ({ query, selectedUnit }) => {
  const [currentWeather, setCurrentWeather] = useState({});

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (!query) {
      return;
    }
    setLoading(true);
    setIsError(false);
    const getWeather = async () => {
      try {
        const response = await fetchWeather(query, selectedUnit.value);

        setCurrentWeather(response.data);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [query, selectedUnit, setCurrentWeather, setLoading, setIsError]);

  return (
    <S.Wrapper>
      <WeatherInfo currentWeather={currentWeather} loading={loading} isError={isError} />
    </S.Wrapper>
  );
};

Home.propTypes = {
  query: PropTypes.string,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
};

export default Home;
