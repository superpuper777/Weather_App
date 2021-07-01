import React from 'react';
import PropTypes from 'prop-types';
import * as S from './styled';

const WeatherListItem = ({ item }) => {
  return (
    <div>
      <S.InfoText>{item.date}</S.InfoText>
      <S.WeatherWrapper>
        <S.Icon />
        <S.InfoText>{item.temperature}</S.InfoText>
      </S.WeatherWrapper>
      <S.InfoText desc>{item.description}</S.InfoText>
    </div>
  );
};

WeatherListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    date: PropTypes.string,
    temperature: PropTypes.string,
    description: PropTypes.string,
  }),
};

export default WeatherListItem;
