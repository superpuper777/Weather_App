import React from 'react';
import styled from 'styled-components';
import Select from 'react-select';

const options = [
  { value: 'metric', label: 'Metric: °C, m/s' },
  { value: 'imperial', label: 'Imperial: °F, mph' },
];

const StyledSelect = styled(Select)`
  width: 200px;
`;

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'palevioletred',
    padding: 20,
    backgroundColor: state.isSelected ? 'palevioletred' : 'white',
  }),
};

const SearchFilter = () => {
  return <StyledSelect placeholder="Temperature Unit" options={options} styles={customStyles} />;
};

export default SearchFilter;
