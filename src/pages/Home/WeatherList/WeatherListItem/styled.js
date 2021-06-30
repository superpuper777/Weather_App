import styled from 'styled-components';

export const InfoText = styled.p`
  color: ${(props) => (props.desc ? 'gray' : 'palevioletred')};
  font-size: ${(props) => (props.desc ? '12px' : 'normal')};
`;

export const WeatherWrapper = styled.div`
  display: flex;
`;
