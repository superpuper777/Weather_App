import styled from 'styled-components';
import { WiNightAltShowers } from 'weather-icons-react';

export const Wrapper = styled.div``;

export const InfoText = styled.p`
  color: ${(props) => (props.desc ? 'gray' : 'palevioletred')};
  font-size: ${(props) => (props.desc ? '12px' : 'normal')};
`;

export const WeatherWrapper = styled.div`
  display: flex;
`;

export const Icon = styled(WiNightAltShowers).attrs(() => ({
  size: 46,
  color: 'palevioletred',
}))``;
