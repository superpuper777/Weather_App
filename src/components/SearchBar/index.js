import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputAction } from 'state/action-creators';
import { store } from 'state/store';

import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchBar = ({ query, onSearchChange, onUnitChange }) => {
  const dispatch = useDispatch();

  const query2 = useSelector((state) => state.search.inputValue);

  console.log(store.getState());
  dispatch(changeInputAction(query));

  console.log(query2);
  const clearSearchInput = () => {
    onSearchChange('');
  };

  return (
    <S.SearchBarWrapper>
      <S.SearchInputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search City"
          value={query2}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <S.SearchButton primary onClick={clearSearchInput}>
          Clear
        </S.SearchButton>
        {/* <S.SearchButton primary onCLick={dispatch(changeInputAction(query))}>
          Search
        </S.SearchButton> */}
      </S.SearchInputWrapper>
      <S.UnitSelect
        placeholder="Temperature Unit"
        options={options}
        onChange={onUnitChange}
        styles={S.customStyles}
      />
    </S.SearchBarWrapper>
  );
};

SearchBar.propTypes = {
  query: PropTypes.string,
  onSearchChange: PropTypes.func,
  onUnitChange: PropTypes.func,
};

export default SearchBar;
