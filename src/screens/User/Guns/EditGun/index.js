import _ from 'lodash';
import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { Picker } from '@react-native-picker/picker';

import { Controller, useForm } from 'react-hook-form';

import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';

import { PickerStyle } from '@containers/PickerStyle';

import { alertErrorFromHttpCall } from '@utils/alertErrorFromHttpCall';

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
  IsLoading,
} from '@components';

import { S } from './style';

const EditGunScreen = (props) => {
  const { route, navigation } = props;

  const { id } = route.params;

  const [isLoading, setIsLoading] = useState(true);
  const [gun, setGun] = useState(null);

  const {
    control,
    trigger,
    handleSubmit,
    formState: { errors },
    setFocus,
  } = useForm();

  const [selectedType, setSelectedType] = useState('');

  const updateGun = async (gun) => {
    try {
      setIsLoading(true);
      await gunsEndpoints.updateById({ id, ...gun });
      Alert.alert('A arma foi editada com sucesso!', '', [{ text: 'OK', onPress: () => navigation.pop(), }]);
    } catch (err) {
      console.log(err)
      alertErrorFromHttpCall(err);
    }
    setIsLoading(false);
  }

  const getGun = async () => {
    try {
      setIsLoading(true);
      const { data } = await gunsEndpoints.findById({ id });
      setGun(data);
      setSelectedType(data.type);
     } catch (err) {
      alertErrorFromHttpCall(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    getGun()
  }, [])

  const onSubmit = (data) => updateGun(data);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddGun>
        <Title text="Editar arma" />
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
          defaultValue={_.get(gun, 'brand', '')}
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
          defaultValue={_.get(gun, 'model', '')}
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
          defaultValue={_.get(gun, 'numberOfSerie', '')}
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
          defaultValue={_.get(gun, 'type', '')}
        />
        {errors.type && (
          <InputError text={errors.type.message} />
        )}
        <Separator height={20} />
        <Button type="success" text="Editar" onPress={handleSubmit(onSubmit)} />
        <Separator height={5} />
        <Button text="Voltar" onPress={() => navigation.pop()} />
      </S.AddGun>
    </ScreenContainer>
  );
};

export { EditGunScreen };
