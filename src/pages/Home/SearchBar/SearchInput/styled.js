import styled, { css } from 'styled-components';

export const StyledSearchInput = styled.div`
  margin: 1em;
  display: flex;
  justify-content: center;
`;
export const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  border: 2px solid palevioletred;
  border-right: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;
export const Button = styled.button`
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
