import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

import { Controller, useForm } from 'react-hook-form';

import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';

import { PickerStyle } from '@containers/PickerStyle';

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
import { Alert } from 'react-native';
import { httpErrorMessages } from '@utils/httpErrorMessages';

const AddGunScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedType, setSelectedType] = useState('');

  const createGun = async (gun) => {
    try {
     await gunsEndpoints.create(gun);
     Alert.alert('A arma foi cadastrada com sucesso!', '', [{ text: 'OK', onPress: () => navigation.pop(), }]);
    } catch (err) {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    }
  }

  const onSubmit = (data) => createGun(data);

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddGun>
        <Title text="Cadastrar nova arma" />
        <Separator height={20} />
        <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="Marca:" />
                <TextInput
                  type="text"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </InputGroup>
            )}
            name="brand"
            defaultValue="a"
          />
          {errors.brand && <InputError text="Erro" />}
        <Separator height={10} />
        <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({ field: { onChange, onBlur, value } }) => (
              <InputGroup>
                <Label text="Modelo:" />
                <TextInput
                  type="text"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              </InputGroup>
            )}
            name="model"
            defaultValue="a"
          />
          {errors.model && <InputError text="Erro" />}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup>
              <Label text="Número de serie:" />
              <TextInput
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value}
              />
            </InputGroup>
          )}
          name="numberOfSerie"
          defaultValue="a"
        />
        {errors.numberOfSerie && <InputError text="Erro" />}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
           required: true,
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup>
              <Label text="Tipo:" />
              <S.SelectContainer>
                <Picker
                  style={PickerStyle}
                  onBlur={onBlur}
                  value={selectedType}
                  selectedValue={selectedType}
                  onValueChange={(itemValue) => {
                    setSelectedType(itemValue)
                    onChange(itemValue);
                  }}
                >
                  <Picker.Item key="none" label="Selecione um tipo" value="" />
                  <Picker.Item key="revolver" label="Revolver" value="revolver" />
                  <Picker.Item key="pistol" label="Pistola" value="pistol" />
                  <Picker.Item key="shotgun" label="Espingarda" value="shotgun" />
                  <Picker.Item key="rifle "label="Fuzil" value="rifle" />
                </Picker>
              </S.SelectContainer>
            </InputGroup>
          )}
          name="type"
          defaultValue="a"
        />
        {errors.type && <InputError text="Erro" />}
        <Separator height={20} />
        <Button type="success" text="Cadastrar" onPress={handleSubmit(onSubmit)} />
        <Separator height={5} />
        <Button text="Voltar" onPress={() => goBack()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { AddGunScreen };
