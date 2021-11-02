import React from 'react';
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

const ShootingRangesEditScreen = (props) => {
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
            <Picker.Item key="none" label="Selecione um tipo" value="" />
            <Picker.Item key="revolver" label="Revolver" value="revolver" />
            <Picker.Item key="pistol" label="Pistola" value="pistol" />
            <Picker.Item key="shotgun" label="Espingarda" value="shotgun" />
            <Picker.Item key="rifle "label="Fuzil" value="rifle" />
            </Picker>
          </S.SelectContainer>
        </InputGroup>
        <Separator height={20} />
        <Button text="Cadastrar" onPress={() => goBack()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { ShootingRangesEditScreen };
