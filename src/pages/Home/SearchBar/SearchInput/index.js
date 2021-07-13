import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

import * as S from './styled';

const ApiKey = 'b7e2a93dd815c83eb49c60c0960d9732';

const url = 'https://api.openweathermap.org/data/2.5/';

export const iconUrl = 'https://openweathermap.org/img/wn/';

const SearchInput = ({
  selectedUnit,
  setCurrentWeather,
  setListOfWeather,
  setWeatherIcon,
  setLoading,
  setIsError,
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

        const iconApi = await axios.get(`${iconUrl}${response.data.weather[0].icon}.png`);

        setCurrentWeather(response.data);
        setWeatherIcon(iconApi.config.url);
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

        setListOfWeather(response.data.list);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getForecast();

    getWeather();
  }, [
    searchTerm,
    selectedUnit,
    setCurrentWeather,
    setListOfWeather,
    setWeatherIcon,
    setLoading,
    setIsError,
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
};

export default SearchInput;
