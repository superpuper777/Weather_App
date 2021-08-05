import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectImperialAction, selectMetricAction } from 'state/unit/action-creators';
import { changeInputAction, clearInputAction } from 'state/search/action-creators';

import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchBar = () => {
  const dispatch = useDispatch();

  const query = useSelector((state) => state.search.inputValue);

  const unit = useSelector((state) => state.unit.value);

  const clearSearchInput = () => {
    dispatch(clearInputAction(''));
  };

  const handleInputChange = (e) => {
    dispatch(changeInputAction(e.target.value));
  };

  const toggleUnits = () => {
    if (unit === 'metric') {
      dispatch(selectImperialAction());
    } else dispatch(selectMetricAction());
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
        onChange={toggleUnits}
        styles={S.customStyles}
      />
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
