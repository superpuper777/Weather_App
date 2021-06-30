import React from 'react';
import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = () => {
  return (
    <S.StyledSearchBar>
      <SearchInput />
      <SearchFilter />
    </S.StyledSearchBar>
  );
};

export default SearchBar;
