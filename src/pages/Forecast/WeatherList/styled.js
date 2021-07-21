import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

export const WeatherList = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  list-style-type: none;
`;

export const WeatherListItem = styled.li``;

export const WeatherWrapper = styled.div`
  padding: 2rem 0;
  box-shadow: 0px 3px 16px -3px rgba(219, 112, 147, 0.2);
`;
