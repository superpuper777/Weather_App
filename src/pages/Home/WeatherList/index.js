import React from 'react';
import * as S from './styled';
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

const WeatherList = () => {
  return (
    <S.WeatherWrapper>
      <S.Title>5-day forecast</S.Title>
      <S.WeatherList>
        {infoItems.map((item) => (
          <S.WeatherListItem key={item.id}>
            <WeatherListItem item={item} />
          </S.WeatherListItem>
        ))}
      </S.WeatherList>
    </S.WeatherWrapper>
  );
};

export default WeatherList;
