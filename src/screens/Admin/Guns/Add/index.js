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
import { httpErrorMessages } from '@utils/httpErrorMessages';

const GunsAddScreen = (props) => {
  const { navigation, route } = props;
  const { placeId } = route.params;

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const [selectedType, setSelectedType] = useState('');

  const createGun = async (gun) => {
    gunsEndpoints.create({ placeId, ...gun })
    .then(() => {
      Alert.alert('A arma foi cadastrada com sucesso!', '', [{
        text: 'OK',
        onPress: () => navigation.pop(),
      }])
    })
    .catch((err) => {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    })
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
        {errors.brand &&  (
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
        {errors.model &&  (
          <InputError text={errors.model.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: false,
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
                  selectedValue={selectedType}
                  onValueChange={(itemValue) => {
                    setSelectedType(itemValue)
                    onChange(itemValue);
                  }}
                  value={value}
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
