import React from 'react';
import { WiNightAltShowers } from 'weather-icons-react';
import * as S from './styled';

const WeatherListItem = ({ item }) => {
  return (
    <div>
      <S.InfoText>{item.date}</S.InfoText>
      <S.WeatherWrapper>
        <WiNightAltShowers size={46} color="palevioletred" />
        <S.InfoText>{item.temperature}</S.InfoText>
      </S.WeatherWrapper>
      <S.InfoText desc>{item.description}</S.InfoText>
    </div>
  );
};

export default WeatherListItem;
