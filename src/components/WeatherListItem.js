import React from 'react';
import styled from 'styled-components';
import { WiNightAltShowers } from 'weather-icons-react';

const P = styled.p`
  color: ${(props) => (props.desc ? 'gray' : 'palevioletred')};
  font-size: ${(props) => (props.desc ? '12px' : 'normal')};
`;
const Div = styled.div`
  display: flex;
`;
const WeatherListItem = ({ item }) => {
  return (
    <div>
      <P>{item.date}</P>
      <Div>
        <WiNightAltShowers size={46} color="palevioletred" />
        <P>{item.temperature}</P>
      </Div>
      <P desc>{item.description}</P>
    </div>
  );
};

export default WeatherListItem;
