import React, { useEffect } from 'react';
import { Alert, KeyboardAvoidingView } from 'react-native';
import Modal from 'react-native-modal';
import { useForm, Controller } from 'react-hook-form';

import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';

import { httpErrorMessages } from '@utils/httpErrorMessages';

import { Button, Separator, InputGroup, Label, TextInput, InputError } from '@components';

import { S } from './style';

const ProfileModal = (props) => {
  const { user, isVisible, onChange } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const updateUser = async (data) => {
   try {
      await usersEndpoints.updateById({ id: user._id, ...data })
      onChange && onChange({ status: 'success' })
   } catch (err) {
    const { status } = err.response
    Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    onChange && onChange({ status: 'fail' })
   }
  }

  // TODO: fix error msgs

  const onSubmit = (data) => updateUser(data);

  useEffect(() => {}, [isVisible])

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()}>
      <S.ModalContainer>
        <KeyboardAvoidingView behavior="height">
        <S.Title>Editar dados de perfil</S.Title>
        <S.InputsContainer>
        <Controller
            control={control}
            rules={{
              required:  "Este campo é obrigatorio",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "O email é invalido"
              },
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="e-mail:" />
                <TextInput
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  onSubmitEditing={() => trigger(["email"]).then(() => setFocus("username"))}
                  value={value}
                />
              </InputGroup>
            )}
            name="email"
            defaultValue={user.email}
          />
          {errors.email && (
            <InputError text={errors.email.message} />
          )}
          <Controller
            control={control}
            rules={{
              required: "Este campo é obrigatorio",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="username:" />
                <TextInput
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  onSubmitEditing={() => trigger(["username"]).then(() => setFocus("firstname"))}
                  value={value}
                />
              </InputGroup>
            )}
            name="username"
            defaultValue={user.username}
          />
          {errors.username && (
            <InputError text={errors.username.message} />
          )}
          <Controller
            control={control}
            rules={{
              required: "Este campo é obrigatorio",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="nome:" />
                <TextInput 
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  onSubmitEditing={() => trigger(["firstname"]).then(() => setFocus("lastname"))}
                  value={value} 
                />
              </InputGroup>
            )}
            name="firstname"
            defaultValue={user.firstname}
          />
          {errors.firstname && (
            <InputError text={errors.firstname.message} />
          )}
          <Controller
            control={control}
            rules={{
              required: "Este campo é obrigatorio",
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="sobrenome:" />
                <TextInput
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  returnKeyType="next"
                  blurOnSubmit={false}
                  onSubmitEditing={() => trigger(["lastname"])}
                  value={value}
                />
              </InputGroup>
            )}
            name="lastname"
            defaultValue={user.lastname}
          />
          {errors.lastname && (
            <InputError text={errors.lastname.message} />
          )}
        </S.InputsContainer>
        <Separator height={15} />
        <Button text="Salvar" onPress={handleSubmit(onSubmit)} />
        </KeyboardAvoidingView>
      </S.ModalContainer>
    </Modal>
  );
};

export { ProfileModal };
