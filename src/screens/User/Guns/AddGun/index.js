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
  InputError,
} from '@components';

import { S } from './style';
import { Alert } from 'react-native';
import { httpErrorMessages } from '@utils/httpErrorMessages';

const AddGunScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
    setFocus,
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
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Marca:" />
              <TextInput
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["brand"]).then(() => setFocus("model"))}
                value={value}
                ref={ref}
              />
            </InputGroup>
          )}
          name="brand"
          defaultValue=""
        />
        {errors.brand && (
          <InputError text={errors.brand.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Modelo:" />
              <TextInput
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                returnKeyType="next"
                blurOnSubmit={false}
                onSubmitEditing={() => trigger(["model"]).then(() => setFocus("numberOfSerie"))}
                value={value}
                ref={ref}
              />
            </InputGroup>
          )}
          name="model"
          defaultValue=""
        />
        {errors.model && (
          <InputError text={errors.model.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputGroup>
              <Label text="Número de serie:" />
              <TextInput
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                onSubmitEditing={() => trigger(["numberOfSerie"])}
                value={value}
                ref={ref}
              />
            </InputGroup>
          )}
          name="numberOfSerie"
          defaultValue=""
        />
        {errors.numberOfSerie && (
          <InputError text={errors.numberOfSerie.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
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
        {errors.type && (
          <InputError text={errors.brand.type} />
        )}
        <Separator height={20} />
        <Button type="success" text="Cadastrar" onPress={handleSubmit(onSubmit)} />
        <Separator height={5} />
        <Button text="Voltar" onPress={() => goBack()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { AddGunScreen };
