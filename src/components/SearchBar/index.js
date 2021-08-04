import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { changeInputAction, clearInputAction } from 'state/action-creators';

import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchBar = ({ onUnitChange }) => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  console.log(query);
  const clearSearchInput = () => {
    dispatch(clearInputAction(''));
  };

  const handleInputChange = (e) => {
    dispatch(changeInputAction(e.target.value));
  };

  return (
    <S.SearchBarWrapper>
      <S.SearchInputWrapper>
        <S.SearchInput
          type="text"
          placeholder="Search City"
          value={query}
          onChange={handleInputChange}
        />
        <S.SearchButton primary onClick={clearSearchInput}>
          Clear
        </S.SearchButton>
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
  onUnitChange: PropTypes.func,
};

export default SearchBar;
