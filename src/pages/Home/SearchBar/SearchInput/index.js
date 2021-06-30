import React from 'react';
import * as S from './styled';

const SearchInput = () => {
  return (
    <S.StyledSearchInput>
      <S.Input type="text" placeholder="Search City" />
      <S.Button primary>Search</S.Button>
    </S.StyledSearchInput>
  );
};

export default SearchInput;
