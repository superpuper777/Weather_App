import { css } from '@emotion/react';
import ClipLoader from 'react-spinners/ClipLoader';
import styled from 'styled-components';

export const override = css`
  display: block;
  margin: 0 auto;
`;

export const StyledSpinner = styled(ClipLoader).attrs(() => ({
  size: 70,
  color: 'palevioletred',
}))``;
