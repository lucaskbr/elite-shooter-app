import React from 'react';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';

import { PickerStyle } from '@containers/PickerStyle';

import { httpErrorMessages } from '@utils/httpErrorMessages';
import { authEndpoints } from '@services/eliteShooterApi/endpoints/authEndpoints';


import {
  ScreenContainer,
  Title,
  Separator,
  InputGroup,
  TextInput,
  Label,
  Button,
  InputError,
} from '@components';

import { S } from './style';

const SignUpScreen = (props) => {
  const { navigation } = props;

  const {
    control,
    getValues,
    trigger,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const createUser = async (user) => {
    try {
      await authEndpoints.signup(user);
      navigation.navigate('Login', {
        signupSuccess: true
      })
    } catch (err) {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    }
  }

  const onSubmit = (data) => createUser(data);

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddGun>
        <Title text="Cadastrar novo usuário" />
        <Separator height={20} />
        <Controller
          control={control}
          rules={{
            required:  "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Nome:" />
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["firstname"]).then(() => setFocus("lastname"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="firstname"
          defaultValue="lucas"
        />
        {errors.firstname &&  (
          <InputError text={errors.firstname.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Sobrenome:" />
              <TextInput
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["lastname"]).then(() => setFocus("username"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="lastname"
          defaultValue="lucas"
        />
        {errors.lastname && (
          <InputError text={errors.lastname.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Username:" />
              <TextInput
                autoCapitalize='none'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["username"]).then(() => setFocus("email"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="username"
          defaultValue="lucas"
        />
        {errors.username && (
          <InputError text={errors.username.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required:  "Este campo é obrigatorio",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "O email é invalido"
            },
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Email:" />
              <TextInput
                autoCapitalize='none'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["email"]).then(() => setFocus("confirmEmail"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="email"
          defaultValue="lucas@gmail.com"
        />
        {errors.email && (
          <InputError text={errors.email.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            validate: (value) => {
              if (!value) {
                return "Este campo é obrigatorio";
              }

              const isEmailRegex = /\S+@\S+\.\S+/

              if (!isEmailRegex.test(value)) {
                return "O email é invalido";
              }

              if (value !== getValues("email")) {
                return "O email de confirmação é diferente do email original";
              }
            }
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Confirmar email:" />
              <TextInput
                autoCapitalize='none'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["confirmEmail"]).then(() => setFocus("password"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="confirmEmail"
          defaultValue="lucas@gmail.com"
        />
        {errors.confirmEmail && (
          <InputError text={errors.confirmEmail.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Senha:" />
              <TextInput
                autoCapitalize='none'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["password"]).then(() => setFocus("confirmPassword"))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="password"
          defaultValue="123"
        />
        {errors.password && (
          <InputError text={errors.password.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            validate: (value) => {
              if (!value) {
                return "Este campo é obrigatorio";
              }

              if (value !== getValues("password")) {
                return "A senha de confirmação é diferente da senha original";
              }
            }
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Confirmar senha:" />
              <TextInput
                autoCapitalize='none'
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={()=> trigger(["confirmPassword"]).then(() => setFocus(''))}
                ref={ref}
              />
            </InputGroup>
          )}
          name="confirmPassword"
          defaultValue="123"
        />
        {errors.confirmPassword && (
          <InputError text={errors.confirmPassword.message} />
        )}
        <Separator height={10} />
        <InputGroup>
          <Label text="Gênero:" />
          <S.SelectContainer>
            <Picker
              style={PickerStyle}
              selectedValue=""
            >
              <Picker.Item label="Selecione um genero" value="" />
              <Picker.Item label="Masculino" value="1" />
              <Picker.Item label="Feminino" value="0" />
            </Picker>
          </S.SelectContainer>
        </InputGroup>
        {errors.gender && errors.gender.type === "required" && (
          <InputError text="Este campo é obrigatorio" />
        )}
        <Separator height={20} />
        <Button type="success" text="Cadastrar" onPress={handleSubmit(onSubmit)} />
        <Separator height={10} />
        <Button text="Voltar" onPress={navigation.goBack} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { SignUpScreen };
