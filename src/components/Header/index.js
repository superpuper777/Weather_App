import React from 'react';
import * as S from './styled';
import RouterComponent from '../../router';

const Header = () => {
  return (
    <S.StyledHeader>
      <RouterComponent />
    </S.StyledHeader>
  );
};

export default Header;
