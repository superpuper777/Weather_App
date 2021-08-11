import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import * as S from './styled';

const options = [
  { value: 'admin', label: 'admin' },
  { value: 'user', label: 'user' },
  { value: 'superadmin', label: 'superadmin' },
];

const Registration = () => {
  const [active, setActive] = useState(0);

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <S.Wrapper>
      <S.Form onSubmit={handleSubmit(onSubmit)}>
        <S.Formfield>
          <S.Label htmlFor="username">
            Username
            <S.Input {...register('username')} />
            {errors.exampleRequired && <span>This field is required</span>}
          </S.Label>
        </S.Formfield>
        <S.Formfield>
          <S.Label htmlFor="firstname">
            First Name
            <S.Input {...register('firstname')} />
          </S.Label>
        </S.Formfield>
        <S.Formfield>
          <S.Label htmlFor="lastname">
            Last Name
            <S.Input {...register('lastname')} />
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
        <S.InputSubmit value="Submit" type="submit" />
      </S.Form>
    </S.Wrapper>
  );
};

export default Registration;
