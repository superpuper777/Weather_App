import React from 'react';
import styled from 'styled-components';
import SearchInput from './SearchInput';
import SearchFilter from './SearchFilter';

const StyledSearchBar = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;
const SearchBar = () => {
  return (
    <StyledSearchBar>
      <SearchInput />
      <SearchFilter />
    </StyledSearchBar>
  );
};

export default SearchBar;
