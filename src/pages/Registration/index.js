import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import SwitchLanguage from 'components/SwitchLanguage';
import * as S from './styled';

const schema = yup.object().shape({
  username: yup.string().min(3).required(),
  firstname: yup.string().max(20).required(),
  lastname: yup.string().max(20).required(),
});

const Registration = () => {
  const { t } = useTranslation();

  const options = [
    { value: 'admin', label: t('registration.selectedAdmin') },
    { value: 'user', label: t('registration.selectedUser') },
    { value: 'superadmin', label: t('registration.selectedSuperadmin') },
  ];

  const [active, setActive] = useState(0);

  const history = useHistory();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
    defaultValues: {
      username: '',
      firstname: '',
      lastname: '',
      gender: 'Male',
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  return (
    <S.MainWrapper>
      <S.Button type="button" onClick={history.goBack}>
        {t('registration.goBackBtn')}
      </S.Button>
      <S.Wrapper>
        <S.Title>{t('registration.title')}</S.Title>
        <SwitchLanguage />
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Formfield>
            <S.Label htmlFor="username">
              {t('registration.userNameLabel')}
              <S.Input {...register('username')} required />
              <S.Error>{errors.username?.message}</S.Error>
            </S.Label>
          </S.Formfield>
          <S.Formfield>
            <S.Label htmlFor="firstname">
              {t('registration.firstNameLabel')}
              <S.Input {...register('firstname')} required />
              <S.Error>{errors.firstname?.message}</S.Error>
            </S.Label>
          </S.Formfield>
          <S.Formfield>
            <S.Label htmlFor="lastname">
              {t('registration.lastNameLabel')}
              <S.Input {...register('lastname')} required />
              <S.Error>{errors.lastname?.message}</S.Error>
            </S.Label>
          </S.Formfield>
          <S.InfoWrapper>
            <S.SelectWrapper>
              <S.Label htmlFor="type">{t('registration.typeLabel')}</S.Label>
              <Controller
                name="type"
                control={control}
                {...register('type')}
                render={({ field }) => (
                  <S.FormSelect
                    placeholder={t('registration.typePlaceholder')}
                    styles={S.customStyles}
                    {...field}
                    options={options}
                  />
                )}
              />
            </S.SelectWrapper>
            <S.RadioWrapper>
              <S.RadioInputItems>
                <S.Label htmlFor="male">
                  <S.RadioInput
                    type="radio"
                    value="Male"
                    checked={active === 0}
                    onClick={() => setActive(0)}
                    {...register('gender')}
                  />
                  {t('registration.genderMaleLabel')}
                </S.Label>
              </S.RadioInputItems>
              <S.RadioInputItems>
                <S.Label htmlFor="male">
                  <S.RadioInput
                    type="radio"
                    value="Female"
                    checked={active === 1}
                    onClick={() => setActive(1)}
                    {...register('gender')}
                  />
                  {t('registration.genderFemaleLabel')}
                </S.Label>
              </S.RadioInputItems>
            </S.RadioWrapper>
          </S.InfoWrapper>
          <S.InputSubmit
            value={t('registration.submitBtn')}
            type="submit"
            disabled={!isDirty || !isValid}
          />
        </S.Form>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default Registration;
