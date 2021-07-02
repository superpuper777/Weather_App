import React from 'react';
import * as S from './styled';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const SearchBar = () => {
  return (
    <S.SearchBarWrapper>
      <SearchInput />
      <SearchFilter />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
