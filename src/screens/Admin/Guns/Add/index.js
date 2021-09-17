import React, { useState } from 'react';
import { Alert } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

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
  InputError
} from '@components';

import { S } from './style';

const GunsAddScreen = (props) => {
  const { navigation, route } = props;
  const { placeId } = route.params;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedType, setSelectedType] = useState('');

  const handleErrorMsg = {
    400: 'Algum campo é invalido',
    409: 'Arma já esta registrada',
    500: 'Desculpe ocorreu um erro',
  }

  const createGun = async (gun) => {
    try {
     await gunsEndpoints.create({ placeId, ...gun });
     Alert.alert('A arma foi cadastrada com sucesso!', '', [{ text: 'OK', onPress: () => navigation.pop(), }]);
    } catch (err) {
      console.log(err)
      const { status } = err.response
      Alert.alert('Desculpe', handleErrorMsg[status],  [{ text: 'OK' }]);
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
        {errors.brand &&  (
          <InputError text={errors.brand.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
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
        {errors.model &&  (
          <InputError text={errors.model.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
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
        {errors.numberOfSerie &&  (
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
                  // value={selectedType}
                  selectedValue={selectedType}
                  onValueChange={(itemValue) => {
                    setSelectedType(itemValue)
                    onChange(itemValue);
                  }}
                  value={value}
                >
                  <Picker.Item label="Selecione um tipo" value="" />
                  <Picker.Item label="Revolver" value="revolver" />
                  <Picker.Item label="Pistola" value="pistol" />
                  <Picker.Item label="Espingarda" value="shotgun" />
                  <Picker.Item label="Fuzil" value="rifle" />
                </Picker>
              </S.SelectContainer>
            </InputGroup>
          )}
          name="type"
        />
        {errors.type &&  (
          <InputError text={errors.type.message} />
        )}
        <Separator height={20} />
        <Button text="Cadastrar" type="success" onPress={handleSubmit(onSubmit)} />
        <Separator height={10} />
        <Button text="Voltar" onPress={() => navigation.pop()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { GunsAddScreen };
