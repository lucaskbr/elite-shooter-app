import React, { useCallback, useContext, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';

import { AuthContext } from '@contexts/auth/authContext';
import Toast from 'react-native-toast-message';

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
import _ from 'lodash';

const LoginScreen = (props) => {
  const { route, navigation } = props;
  const { navigate } = navigation;

  console.log(route.params)

  const {
    control,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const { handleLogin } = useContext(AuthContext);

  const onSubmit = (data) => handleLogin(data);
  // TODO: Remove default value from inputs

  useEffect(() => {
    (async () => {

      if (_.get(route, 'params.signupSuccess', false)) {
        Toast.show({
          text1: 'Cadastro concluído com sucesso ✅',
          text2: 'Por favor confirme seu cadastro pelo e-mail'
        });
      }
    })()
  }, [route.params]);

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
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputGroup>
                <Label text="username:" />
                <TextInput
                  type="text"
                  autoCapitalize='none'
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  returnKeyType="next"
                  onSubmitEditing={()=> setFocus("password")}
                />
              </InputGroup>
            )}
            name="username"
            defaultValue="admin"
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
            render={({ field: { onChange, onBlur, value, ref } }) => (
              <InputGroup>
                <Label text="senha:" />
                <TextInput
                  autoCapitalize='none'
                  type="password"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                  ref={ref}
                  secureTextEntry={true}
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
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </ScreenContainer>
  );
};

export { LoginScreen };
