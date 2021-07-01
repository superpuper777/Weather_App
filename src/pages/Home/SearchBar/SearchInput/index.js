import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as S from './styled';

const ApiKey = 'b7e2a93dd815c83eb49c60c0960d9732';

const SearchInput = ({ setCurrentWeather }) => {
  const [query, setQuery] = useState('Minsk');
  const [searchTerm, setSearchTerm] = useState('Minsk');
  // const [data, setData] = useState([]);
  const changeLocation = () => {
    setSearchTerm(query);
    setQuery('');
  };
  useEffect(() => {
    const getWeather = async () => {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&appid=${ApiKey}&units=metric`,
      );
      console.log(JSON.stringify(response.data));
      // setData(response.data);
      setCurrentWeather(response.data);
    };
    getWeather();
  }, [searchTerm, setCurrentWeather]);
  return (
    <S.StyledSearchInput>
      <S.Input
        type="text"
        placeholder="Search City"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <S.Button primary onClick={changeLocation}>
        Search
      </S.Button>
    </S.StyledSearchInput>
  );
};

export default SearchInput;
