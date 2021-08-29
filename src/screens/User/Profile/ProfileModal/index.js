import React from 'react';
import Modal from 'react-native-modal';
import { useForm, Controller } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

import { Button, InputGroup, Label, TextInput, InputError } from '@components';

import { S } from './style';
import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';
import { Text } from 'react-native';

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
    console.log(err)
    onChange && onChange({ status: 'fail' })
   }
  }

  // TODO: fix error msgs

  const onSubmit = (data) => updateUser(data);

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()}>
      <S.ModalContainer>
        <S.Title>Editar dados de perfil</S.Title>
        <S.InputsContainer>
        <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="e-mail:" />
                <TextInput
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </InputGroup>
            )}
            name="email"
            defaultValue={user.email}
          />
          {errors.email && <InputError text="Erro" />}
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
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </InputGroup>
            )}
            name="username"
            defaultValue={user.username}
          />
          <ErrorMessage
            errors={errors}
            name="username"
            render={({ message }) => <InputError text={message} />}
          />
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="nome:" />
                <TextInput 
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value} 
                />
              </InputGroup>
            )}
            name="firstname"
            defaultValue={user.firstname}
          />
          {errors.firstname && <InputError text={errors?.firstname} />}
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="sobrenome:" />
                <TextInput
                  type="text"
                  onChangeText={onChange}
                  onBlur={onBlur}
                  value={value}
                />
              </InputGroup>
            )}
            name="lastname"
            defaultValue={user.lastname}
          />
          {errors.lastname && <InputError text="Erro" />}
        </S.InputsContainer>
        {/* <Button text="Salvar" onPress={() => onChange && onChange()} /> */}
        <Button text="Salvar" onPress={handleSubmit(onSubmit)} />

      </S.ModalContainer>
    </Modal>
  );
};

export { ProfileModal };
