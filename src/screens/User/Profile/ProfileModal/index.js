import React, { useEffect, useState } from 'react';

import Modal from 'react-native-modal';

import { Button, InputGroup, Label, TextInput } from '@components';

import { S } from './style';

const ProfileModal = (props) => {
  const { user, isVisible, onChange } = props;

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()}>
      <S.ModalContainer>
        <S.Title>Editar dados de perfil</S.Title>
        <S.InputsContainer>
          <InputGroup>
            <Label text="e-mail:" />
            <TextInput value={user.email} />
          </InputGroup>
          <InputGroup>
            <Label text="username:" />
            <TextInput value={user.username} />
          </InputGroup>
          <InputGroup>
            <Label text="nome:" />
            <TextInput value={user.firstname} />
          </InputGroup>
          <InputGroup>
            <Label text="sobrenome:" />
            <TextInput value={user.lastname} />
          </InputGroup>
        </S.InputsContainer>
        <Button text="Salvar" onPress={() => onChange && onChange()} />
      </S.ModalContainer>
    </Modal>
  );
};

export { ProfileModal };
