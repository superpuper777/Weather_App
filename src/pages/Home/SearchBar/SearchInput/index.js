import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styled';

const ApiKey = 'b7e2a93dd815c83eb49c60c0960d9732';

const SearchInput = ({ setCurrentWeather, setLoading, setIsError }) => {
  const [query, setQuery] = useState('Minsk');

  const [searchTerm, setSearchTerm] = useState('Minsk');

  const changeLocation = () => {
    setSearchTerm(query);
    setQuery('');
  };

  useEffect(() => {
    if (searchTerm) {
      setLoading(true);
      setIsError(false);
      const getWeather = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${ApiKey}&units=metric`,
          );

          console.log(response.data);
          setCurrentWeather(response.data);
        } catch (error) {
          setIsError(true);
          console.log('error');
        }
        setLoading(false);
      };

      setLoading(true);
      setIsError(false);
      const getForecast = async () => {
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?q=${searchTerm}&appid=${ApiKey}`,
          );

          console.log(response.data);
        } catch (error) {
          setIsError(true);
          console.log('error');
        }
        setLoading(false);
      };

      getForecast();

      getWeather();
    }
  }, [searchTerm, setCurrentWeather, setLoading, setIsError]);

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

export default SearchInput;
