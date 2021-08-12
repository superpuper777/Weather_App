import styled from 'styled-components';
import Select from 'react-select';

export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex;
  justify-content: center;
  gap: 6rem;
`;

export const Wrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const InfoWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 2rem;
`;

export const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

export const Title = styled.h2`
  color: palevioletred;
`;

export const Formfield = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 40px;
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

export const InputSubmit = styled.input.attrs({
  type: 'submit',
})`
  background: ${(props) => (props.disabled ? 'gray' : 'palevioletred')};
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
    background: ${(props) => (props.disabled ? 'gray' : '#8d1e43')};
    cursor: pointer;
  }
`;

export const RadioInput = styled.input.attrs({
  type: 'radio',
})`
  margin-right: 10px;
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

export const RadioWrapper = styled.div``;

export const RadioInputItems = styled.div`
  display: flex;
`;

export const Error = styled.p`
  color: #bf1650;
  font-size: 12px;

  ::before {
    display: inline;
    content: '⚠ ';
  }
`;

export const Button = styled.button`
  padding: 2rem;
  align-self: flex-start;
  border: none;
  background: none;
  font-size: 18px;
  cursor: pointer;
  color: palevioletred;
  &:hover {
    color: #8d1e43;
  }
`;
