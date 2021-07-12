import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

export const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Spinner = styled(ClipLoader).attrs(() => ({
  size: 70,
  color: 'palevioletred',
}))``;
