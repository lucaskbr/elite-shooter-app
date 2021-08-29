import React, { useContext } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { AuthContext } from '@contexts/auth/authContext';

import logoPath from '@assets/logo.png';

import {
  ScreenContainer,
  Button,
  TextInput,
  InputGroup,
  Label,
  Separator,
  InputError,
} from '@components';

import { S } from './style';

const LoginScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  // call the route to get user info and set in state

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { handleLogin } = useContext(AuthContext);

  const onSubmit = (data) => handleLogin(data);

  // TODO: Remove default value from inputs

  return (
    <ScreenContainer paddingHorizontal={15}>
      <S.Login>
        <S.SignIn>
          <S.Logo source={logoPath} />

          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="username:" />
                <TextInput
                  type="text"
                  placeholder="galaxyus123"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </InputGroup>
            )}
            name="username"
            defaultValue="xbeggar"
          />
          {errors.username && (
            <InputError text="O campo username é obrigatório" />
          )}
          <Separator height={10} />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="senha:" />
                <TextInput
                  type="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </InputGroup>
            )}
            name="password"
            defaultValue="123456"
          />
          {errors.password && <InputError text="O campo senha é obrigatório" />}
          <Separator height={20} />
          <Button text="Login" onPress={handleSubmit(onSubmit)} />
        </S.SignIn>
        <S.SingUp>
          <S.SingUpLink onPress={() => navigate('SingUp')}>
            Registre-se
          </S.SingUpLink>
        </S.SingUp>
      </S.Login>
    </ScreenContainer>
  );
};

export { LoginScreen };
