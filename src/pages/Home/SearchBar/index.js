import React from 'react';
import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = ({ setCurrentWeather, setLoading, setIsError }) => {
  return (
    <S.SearchBarWrapper>
      <SearchInput
        setCurrentWeather={setCurrentWeather}
        setLoading={setLoading}
        setIsError={setIsError}
      />
      <SearchFilter />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
