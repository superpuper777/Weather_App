import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const lngs = {
  en: { nativeName: 'English' },
  ru: { nativeName: 'Russian' },
};

const SwitchLanguage = () => {
  const { i18n } = useTranslation();

  return (
    <S.Wrapper>
      {Object.keys(lngs).map((lng) => (
        <S.SwitchButton
          key={lng}
          style={{ fontWeight: i18n.language === lng ? 'bold' : 'normal', padding: '0' }}
          type="submit"
          onClick={() => console.log(i18n.changeLanguage(lng))}>
          {lngs[lng].nativeName.slice(0, 2).toUpperCase()}
        </S.SwitchButton>
      ))}
    </S.Wrapper>
  );
};

export default SwitchLanguage;
