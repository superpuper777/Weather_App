import React from 'react';
import * as S from './styled';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const SearchFilter = () => {
  return (
    <S.StyledSelect placeholder="Temperature Unit" options={options} styles={S.customStyles} />
  );
};

export default SearchFilter;
