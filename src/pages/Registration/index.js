import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';

import * as S from './styled';

const options = [
  { value: 'admin', label: 'admin' },
  { value: 'user', label: 'user' },
  { value: 'superadmin', label: 'superadmin' },
];

const Registration = () => {
  const [gender, setGender] = useState('male');

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
        <S.SelectWrapper>
          <S.Label htmlFor="type">Access Type</S.Label>
          <Controller
            name="type"
            control={control}
            {...register('type')}
            render={({ field }) => (
              <S.FormSelect
                styles={S.customStyles}
                {...field}
                options={options}
                placeholder="Choose your type"
              />
            )}
          />
        </S.SelectWrapper>
        <S.RadioWrapper>
          <S.RadioInputItems>
            <S.Label htmlFor="male">
              <input
                type="radio"
                value="Male"
                checked={gender === 'Male'}
                // onChange={onValueChange}
                {...register('male')}
              />
              Male
            </S.Label>
          </S.RadioInputItems>
          <S.RadioInputItems>
            <S.Label htmlFor="male">
              <input
                type="radio"
                value="Female"
                checked={gender === 'Female'}
                // onChange={onValueChange}
                {...register('female')}
              />
              Female
            </S.Label>
          </S.RadioInputItems>
          <div>Selected option is : {gender}</div>
        </S.RadioWrapper>
        <S.InputSubmit type="submit" />
      </S.Form>
    </S.Wrapper>
  );
};

export default Registration;
