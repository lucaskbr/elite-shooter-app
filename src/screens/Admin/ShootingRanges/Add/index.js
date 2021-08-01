import * as React from 'react';
import { FlatList, View } from 'react-native';

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

import { Picker } from '@react-native-picker/picker';

// import userPicPath from '../../../assets/dash.png';

import { S } from './style';

const ShootingRangesAddScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddGun>
        <Title text="Cadastrar nova arma" />
        <Separator height={20} />
        <InputGroup>
          <Label text="Marca:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Modelo:" />
          <TextInput type="text" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="Número de serie:" />
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
              selectedValue="2021"
            >
              <Picker.Item label="Selecione um tipo" value="" />
              <Picker.Item label="Revolver" value="Revolver" />
              <Picker.Item label="Pistola" value="Pistola" />
              <Picker.Item label="Espingarda" value="Espingarda" />
              <Picker.Item label="Fuzil" value="Fuzil" />
            </Picker>
          </S.SelectContainer>
        </InputGroup>
        <Separator height={20} />
        <Button text="Cadastrar" onPress={() => goBack()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { ShootingRangesAddScreen };
