import React from 'react';
import * as S from './styled';

const SearchInput = () => {
  return (
    <S.SearchInputWrapper>
      <S.SearchInput type="text" placeholder="Search City" />
      <S.SearchButton primary>Search</S.SearchButton>
    </S.SearchInputWrapper>
  );
};

export default SearchInput;
