import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchWeather, fetchForecast, groupByDay } from 'services/weather';
import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchBar = ({
  setCurrentWeather,
  setListOfWeather,
  selectedUnit,
  setSelectedUnit,
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
        const response = await fetchWeather(searchTerm, selectedUnit.value);

        setCurrentWeather(response.data);
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    const getForecast = async () => {
      try {
        const response = await fetchForecast(searchTerm, selectedUnit.value);

        setListOfWeather(groupByDay(response.data.list));
      } catch (error) {
        setIsError(true);
        console.log('error');
      } finally {
        setLoading(false);
      }
    };

    getForecast();

    getWeather();
  }, [searchTerm, selectedUnit, setCurrentWeather, setListOfWeather, setLoading, setIsError]);

  return (
    <S.SearchBarWrapper>
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
      <S.UnitSelect
        placeholder="Temperature Unit"
        options={options}
        onChange={setSelectedUnit}
        styles={S.customStyles}
      />
    </S.SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  setCurrentWeather: PropTypes.func,
  setListOfWeather: PropTypes.func.isRequired,
  selectedUnit: PropTypes.shape({ value: PropTypes.string }).isRequired,
  setSelectedUnit: PropTypes.func,
  setLoading: PropTypes.func,
  setIsError: PropTypes.func,
};

export default SearchBar;
