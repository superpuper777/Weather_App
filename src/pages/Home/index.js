import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { fetchWeather } from 'services/weather';
import useDebounce from 'use-debounce';
import { weatherAction } from 'state/action-creators';
import * as S from './styled';
import WeatherInfo from './WeatherInfo';

const Home = ({ query, selectedUnit }) => {
  const dispatch = useDispatch();

  const weather = useSelector((state) => state.weather);

  console.log(weather);

  const [currentWeather, setCurrentWeather] = useState({});

  const [loading, setLoading] = useState(false);

  const [isError, setIsError] = useState(false);

  const debounceQuery = useDebounce(query, 1000);

  useEffect(() => {
    if (!debounceQuery) {
      return;
    }
    setLoading(true);
    setIsError(false);
    const getWeather = async () => {
      try {
        const response = await fetchWeather(debounceQuery, selectedUnit.value);

        weatherAction(response.data); // or dispatch(weatherAction(response.data))
        setCurrentWeather(response.data);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getWeather();
  }, [debounceQuery, selectedUnit, setCurrentWeather, setLoading, setIsError, dispatch]);

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
