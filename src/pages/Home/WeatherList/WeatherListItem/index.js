import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

const WeatherListItem = ({ item }) => {
  return (
    <S.Wrapper>
      <S.InfoText>{item.date}</S.InfoText>
      <S.WeatherWrapper>
        <S.Icon />
        <S.InfoText>{item.temperature}</S.InfoText>
      </S.WeatherWrapper>
      <S.InfoText desc>{item.description}</S.InfoText>
    </S.Wrapper>
  );
};

WeatherListItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    date: PropTypes.string.isRequired,
    temperature: PropTypes.isRequired,
    description: PropTypes.isRequired,
  }),
};

export default WeatherListItem;
