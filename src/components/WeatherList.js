import React from 'react';
import styled from 'styled-components';
import WeatherListItem from './WeatherListItem';

const infoItems = [
  {
    id: 1,
    date: 'Sat, Jun 26',
    temperature: '26 / 17°C',
    description: 'Light rain. Moderate breeze.',
  },
  {
    id: 2,
    date: 'Sat, Jun 26',
    temperature: '26 / 17°C',
    description: 'Light rain. Moderate breeze.',
  },
  {
    id: 3,
    date: 'Sat, Jun 26',
    temperature: '26 / 17°C',
    description: 'Light rain. Moderate breeze.',
  },
];
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;
const WeatherList = () => {
  return (
    <div>
      <Title>5-day forecast</Title>
      <ul>
        {infoItems.map((item) => (
          <li key={item.id}>
            <WeatherListItem item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WeatherList;
