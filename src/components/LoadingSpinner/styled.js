import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

export const StyledSpinner = styled(ClipLoader).attrs(() => ({
  size: 70,
  color: 'palevioletred',
}))`
  display: block;
  margin: 0 auto;
`;
