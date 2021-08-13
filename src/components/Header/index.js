import React from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
};

const Header = () => {
  const location = useLocation();

  const { t, i18n } = useTranslation();

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
          {Object.keys(lngs).map((lng) => (
            <S.SwitchButton
              key={lng}
              style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal', padding: '0' }}
              type="submit"
              onClick={() => i18n.changeLanguage(lng)}>
              {lngs[lng].nativeName.slice(0, 2).toUpperCase()}
            </S.SwitchButton>
          ))}
        </S.AdditionalWrapper>
      </S.Navigation>
    </S.Wrapper>
  );
};

export default Header;
