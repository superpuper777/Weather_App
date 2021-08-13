import React from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation, Trans } from 'react-i18next';

import { selectImperial, selectMetric } from 'state/unit/reducer';
import { changeInput, clearInput } from 'state/search/reducer';
import { getUnit } from 'state/unit/selectors';
import { getQuery } from 'state/search/selectors';
import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchBar = () => {
  const location = useLocation();

  const { t } = useTranslation();

  const dispatch = useDispatch();

  const query = useSelector(getQuery);

  const unit = useSelector(getUnit);

  const clearSearchInput = () => {
    dispatch(clearInput(''));
  };

  const handleInputChange = (e) => {
    dispatch(changeInput(e.target.value));
  };

  const toggleUnits = () => {
    if (unit === 'metric') {
      dispatch(selectImperial());
    } else dispatch(selectMetric());
  };

  if (location.pathname === '/registration') {
    return null;
  }

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
          {t('searchBar.clearButton')}
        </S.SearchButton>
      </S.SearchInputWrapper>
      <Trans i18nKey="placeholderUnit">
        <S.UnitSelect
          placeholder={t('searchBar.placeholderUnit')}
          options={options}
          onChange={toggleUnits}
          styles={S.customStyles}
        />
      </Trans>
    </S.SearchBarWrapper>
  );
};

export default SearchBar;
