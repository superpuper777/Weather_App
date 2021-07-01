import React from 'react';
import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = ({ setCurrentWeather }) => {
  return (
    <S.StyledSearchBar>
      <SearchInput setCurrentWeather={setCurrentWeather} />
      <SearchFilter />
    </S.StyledSearchBar>
  );
};

export default SearchBar;
