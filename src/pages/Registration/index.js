import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import * as S from './styled';

const options = [
  { value: 'admin', label: 'admin' },
  { value: 'user', label: 'user' },
  { value: 'superadmin', label: 'superadmin' },
];

const Registration = () => {
  const [active, setActive] = useState(0);

  const history = useHistory();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors, isDirty, isValid, touchedFields },
    reset,
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      username: '',
      firstname: '',
      lastname: '',
      type: { value: 'user', label: 'user' },
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
        Go Back
      </S.Button>
      <S.Wrapper>
        <S.Title>Registration</S.Title>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.Formfield>
            <S.Label htmlFor="username">
              Username
              <S.Input {...register('username')} />
            </S.Label>
          </S.Formfield>
          <S.Formfield>
            <S.Label htmlFor="firstname">
              First Name
              <S.Input {...register('firstname', { required: true })} />
              {errors.firstname && touchedFields.firstname && (
                <S.Error>This field is required</S.Error>
              )}
            </S.Label>
          </S.Formfield>
          <S.Formfield>
            <S.Label htmlFor="lastname">
              Last Name
              <S.Input {...register('lastname', { required: true, maxLength: 20 })} />
              {errors.lastname && touchedFields.lastname && <S.Error>maximum length is 20</S.Error>}
            </S.Label>
          </S.Formfield>
          <S.InfoWrapper>
            <S.SelectWrapper>
              <S.Label htmlFor="type">Access Type</S.Label>
              <Controller
                name="type"
                control={control}
                {...register('type')}
                render={({ field }) => (
                  <S.FormSelect
                    placeholder="Choose your type"
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
                  Male
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
                  Female
                </S.Label>
              </S.RadioInputItems>
            </S.RadioWrapper>
          </S.InfoWrapper>
          <S.InputSubmit value="Submit" type="submit" disabled={!isDirty || !isValid} />
        </S.Form>
      </S.Wrapper>
    </S.MainWrapper>
  );
};

export default Registration;
