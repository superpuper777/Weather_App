import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import SwitchLanguage from 'components/SwitchLanguage';
import * as S from './styled';

const Header = () => {
  const location = useLocation();

  const { t } = useTranslation();

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
            <S.NavLink to="/">{t('header.homeLink')}</S.NavLink>
          </S.NavigationItem>
          <S.NavigationItem>
            <S.NavLink to="/forecast">{t('header.forecastLink')}</S.NavLink>
          </S.NavigationItem>
        </S.NavWrapper>
        <S.AdditionalWrapper>
          <S.NavigationItem registration>
            <S.NavLink to="/registration">{t('header.registrationLink')}</S.NavLink>
          </S.NavigationItem>
          <SwitchLanguage />
        </S.AdditionalWrapper>
      </S.Navigation>
    </S.Wrapper>
  );
};

export default Header;
