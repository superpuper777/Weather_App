import React from 'react';

import * as S from './styled';

const Header = () => {
  return (
    <S.Wrapper>
      <S.Navigation>
        <S.NavWrapper>
          <S.NavigationItem>
            <S.NavLink to="/">
              <S.StyledLogo />
            </S.NavLink>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavLink to="/">Home</S.NavLink>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavLink to="/forecast">Forecast</S.NavLink>
          </S.NavigationItem>
        </S.NavWrapper>
        <S.NavigationItem registration>
          <S.NavLink to="/registration">Registration</S.NavLink>
        </S.NavigationItem>
      </S.Navigation>
    </S.Wrapper>
  );
};

export default Header;
