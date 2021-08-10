import styled from 'styled-components';
import Select from 'react-select';

export const Wrapper = styled.div`
  padding: 0 6rem;
`;

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const Formfield = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: palevioletred;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 100%;
  border-radius: 4px;
  border: 1px solid palevioletred;
  padding: 10px 15px;
  margin-bottom: 10px;
  font-size: 14px;
`;

export const InputSubmit = styled.input.attrs({ type: 'submit' })`
  background: palevioletred;
  color: white;
  width: 100%;
  text-transform: uppercase;
  border: none;
  border-radius: 4px;
  margin-top: 40px;
  padding: 15px;
  font-size: 16px;
  letter-spacing: 10px;
  &:hover,
  &:active {
    background: #8d1e43;
    cursor: pointer;
  }
`;

export const SelectWrapper = styled.div``;

export const FormSelect = styled(Select)`
  width: 200px;
`;

export const customStyles = {
  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? 'white' : 'palevioletred',
    backgroundColor: state.isSelected ? 'palevioletred' : 'white',
  }),
};

export const RadioWrapper = styled.div`
  margin-top: 2rem;
`;

export const RadioInputItems = styled.div``;
