import styled, { css } from 'styled-components';
import Select from 'react-select';

export const SearchBarWrapper = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

export const UnitSelect = styled(Select)`
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

export const SearchInputWrapper = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
`;

export const SearchInput = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 2px solid palevioletred;
  border-right: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;

export const SearchButton = styled.button`
  background: transparent;
  font-size: 16px;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  cursor: pointer;
  padding: 10px;
  border-radius: 0 3px 3px 0;
  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `};
  &:hover {
    background: #d38ca4;
    color: #ffffff;
  }
`;
