import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import * as S from './styled';

const Header = () => {
  const location = useLocation();

  useEffect(() => {}, [location]);

  if (location.pathname === '/registration') {
    return null;
  }

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
