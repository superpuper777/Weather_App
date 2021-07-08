import React from 'react';

import * as S from './styled';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <S.NavigationItem>
          <S.NavLink to="/">
            <S.StyledLogo />
          </S.NavLink>
        </S.NavigationItem>
        <S.NavigationItem>
          <S.NavLink to="/">Home</S.NavLink>
        </S.NavigationItem>
      </S.Navigation>
    </S.Wrapper>
  );
};

export default Header;
