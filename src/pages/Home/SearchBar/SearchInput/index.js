import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import * as S from './styled';

const ApiKey = 'e460fcebd69acf7030cbeaced98d6e0b';

const url = 'https://api.openweathermap.org/data/2.5/';

const SearchInput = ({
  selectedUnit,
  setCurrentWeather,
  setListOfWeather,
  setWeatherIcon,
  setLoading,
  setIsError,
  weatherIcon,
}) => {
  const [query, setQuery] = useState('Minsk');

  const [searchTerm, setSearchTerm] = useState('Minsk');

  const changeLocation = () => {
    setSearchTerm(query);
    setQuery('');
  };

  useEffect(() => {
    if (!searchTerm) {
      return;
    }
    setLoading(true);
    setIsError(false);
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `${url}weather?q=${searchTerm}&appid=${ApiKey}&units=${selectedUnit.value}`,
        );

        console.log(response.data);
        setCurrentWeather(response.data);
        setWeatherIcon(response.data.weather[0].icon);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    const getForecast = async () => {
      try {
        const response = await axios.get(
          `${url}forecast?q=${searchTerm}&appid=${ApiKey}&units=${selectedUnit.value}`,
        );

        console.log(response.data);
        setListOfWeather(response.data.list);
        setWeatherIcon(response.data.list.weather[0].icon);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    const getWeatherIcon = async () => {
      try {
        const response = await axios.get(`https://openweathermap.org/img/wn/${weatherIcon}@2x.png`);

        console.log(response);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getForecast();

    getWeather();

    getWeatherIcon();
  }, [
    searchTerm,
    selectedUnit,
    setCurrentWeather,
    setListOfWeather,
    setWeatherIcon,
    setLoading,
    setIsError,
    weatherIcon,
  ]);

  return (
    <S.SearchInputWrapper>
      <S.SearchInput
        type="text"
        placeholder="Search City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <S.SearchButton primary onClick={changeLocation}>
        Search
      </S.SearchButton>
    </S.SearchInputWrapper>
  );
};

SearchInput.propTypes = {
  selectedUnit: PropTypes.shape({ value: PropTypes.string, label: PropTypes.string }).isRequired,
  setCurrentWeather: PropTypes.func.isRequired,
  setListOfWeather: PropTypes.func.isRequired,
  setWeatherIcon: PropTypes.func.isRequired,
  setLoading: PropTypes.func.isRequired,
  setIsError: PropTypes.func.isRequired,
  weatherIcon: PropTypes.string.isRequired,
};

export default SearchInput;
