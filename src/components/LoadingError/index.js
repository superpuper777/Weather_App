import React from 'react';
import { useTranslation } from 'react-i18next';

import * as S from './styled';

const LoadingError = () => {
  const { t } = useTranslation();

  return <S.Error>{t('error')}</S.Error>;
};

export default LoadingError;
