import React, { useState, useEffect } from 'react';

import { fetchWeather } from 'services/weather';
import * as S from './styled';
// import SearchBar from '../../components/SearchBar';
import WeatherInfo from './WeatherInfo';

const Home = ({ query, selectedUnit }) => {
  const [currentWeather, setCurrentWeather] = useState({});

  // const [listOfWeather, setListOfWeather] = useState([]);

  // const [selectedUnit, setSelectedUnit] = useState({
  //   value: 'metric',
  // });

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

export default Home;
