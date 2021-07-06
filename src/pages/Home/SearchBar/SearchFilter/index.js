import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchFilter = ({ setSelectedUnit }) => {
  return (
    <S.UnitSelect
      placeholder="Temperature Unit"
      options={options}
      onChange={setSelectedUnit}
      styles={S.customStyles}
    />
  );
};

SearchFilter.propTypes = {
  setSelectedUnit: PropTypes.func.isRequired,
};

export default SearchFilter;
