import styled from 'styled-components';
import { WiNightAltShowers } from 'weather-icons-react';

export const Wrapper = styled.div`
  width: 200px;
  height: 250px;
`;

export const InfoText = styled.p`
  color: ${(props) => (props.desc ? 'gray' : 'palevioletred')};
  font-size: ${(props) => (props.desc ? '12px' : 'normal')};
  font-weight: ${(props) => (props.date ? 'bold' : 'normal')};
`;

export const WeatherWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ImageWrapper = styled.div``;

export const MainTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MainInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  border-left: 1px solid #d38ca4;
`;

export const Text = styled.p`
  color: palevioletred;
  font-size: 12px;
  margin: 0 1rem;
`;
