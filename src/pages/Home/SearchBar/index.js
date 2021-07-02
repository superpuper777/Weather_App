import React from 'react';
import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = ({ setCurrentWeather, setLoading, setIsError }) => {
  return (
    <S.StyledSearchBar>
      <SearchInput
        setCurrentWeather={setCurrentWeather}
        setLoading={setLoading}
        setIsError={setIsError}
      />
      <SearchFilter />
    </S.StyledSearchBar>
  );
};

export default SearchBar;
