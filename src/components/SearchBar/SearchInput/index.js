import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { fetchWeather, fetchForecast, groupByDay } from 'services/weather';
import * as S from './styled';

const SearchInput = ({
  selectedUnit,
  setCurrentWeather,
  setListOfWeather,
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
  setLoading: PropTypes.func.isRequired,
  setIsError: PropTypes.func.isRequired,
};

export default SearchInput;
