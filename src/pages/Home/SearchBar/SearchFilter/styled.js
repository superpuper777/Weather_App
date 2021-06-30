import styled from 'styled-components';
import Select from 'react-select';

export const StyledSelect = styled(Select)`
  width: 200px;
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'palevioletred',
    padding: 20,
    backgroundColor: state.isSelected ? 'palevioletred' : 'white',
  }),
};
