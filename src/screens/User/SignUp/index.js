import * as React from 'react';
import { FlatList, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  InputGroup,
  TextInput,
  Label,
  Button,
} from '@components';

import { S } from './style';

const SignUpScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddGun>
        <Title text="Cadastrar novo usuário" />
        <Separator height={20} />
        <InputGroup>
          <Label text="Nome:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Sobrenome:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Username:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Email:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Senha:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Confirmar senha:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Tipo:" />
          <S.SelectContainer>
            <Picker
              style={{
                width: '100%',
                zIndex: 1,
                flex: 1,
              }}
              selectedValue=""
            >
              <Picker.Item label="Selecione um genero" value="" />
              <Picker.Item label="Masculino" value="Masculino" />
              <Picker.Item label="Feminino" value="Feminino" />
              <Picker.Item label="Outros" value="Outros" />
            </Picker>
          </S.SelectContainer>
        </InputGroup>
        <Separator height={20} />
        <Button text="Cadastrar" onPress={() => goBack()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { SignUpScreen };
