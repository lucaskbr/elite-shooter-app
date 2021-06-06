import React from 'react';

import { Button, InputGroup, Label, TextInput } from '../../../components';

import Modal from 'react-native-modal';

import { S } from './style';

const ProfileModal = (props) => {

  const { isVisible, onChange } = props;

  return (
    <Modal isVisible={isVisible} onBackdropPress={() => onChange && onChange()}>
      <S.ModalContainer>
        <S.Title>Editar dados de perfil</S.Title>
        <S.InputsContainer>
            <InputGroup>
              <Label text="e-mail:" />
              <TextInput value="meu_email@email.com"/>
            </InputGroup>
            <InputGroup>
              <Label text="username:" />
              <TextInput value="username"/>
            </InputGroup>
            <InputGroup>
              <Label text="nome:" />
              <TextInput value="Lucas"/>
            </InputGroup>
            <InputGroup>
              <Label text="sobrenome:" />
              <TextInput value="Reis"/>
            </InputGroup>
        </S.InputsContainer>
        <Button text="Salvar" onPress={() => onChange && onChange()} />
      </S.ModalContainer>
    </Modal>
  );
};

export { ProfileModal };
