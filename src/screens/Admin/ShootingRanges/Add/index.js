import React, { useCallback, useContext, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, FlatList, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useForm, Controller } from 'react-hook-form';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';
import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';

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

const ShootingRangesAddScreen = (props) => {
  const { navigation } = props;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentPlace } = useContext(ParamsContext);

  const [sensorsEquipments, setSensorsEquipments] = useState();
  const [selectedType, setSelectedType] = useState('');
  const [selectedSensor, setSelectedSensor] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const getAllSensorEquipments = async () => {
    try {
      const { data } = await sensorEquipmentsEndpoints.findAll({
        assign: false,
        placeId: currentPlace
      });
      setSensorsEquipments(data);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const createShootingRange = async (shootingRange) => {
    try {
      await shootingRangesEndpoints.create({
       ...shootingRange,
        placeId: currentPlace
      });
      Alert.alert('A baia de tiro foi cadastrada com sucesso!', '', [{ text: 'OK', onPress: () => navigation.pop(), }]);
    } catch (err) {
      console.log(err);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (data) => createShootingRange(data);

  useFocusEffect(
    useCallback(() => {
      currentPlace && getAllSensorEquipments();
    }, []),
  );

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddShootingRange>
        <Title text="Cadastrar nova baia de tiro" />
        <Separator height={20} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputGroup>
              <Label text="Código ou nome:" />
              <TextInput 
                type="text"
                onBlur={onBlur}
                onChangeText={onChange}
                value={value} />
            </InputGroup>
          )}
          name="code"
          defaultValue="a"
        />
        {errors.code &&  (
          <InputError text={errors.code.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur } }) => (
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
                  <Picker.Item label="Selecione um tipo" value="" />
                  <Picker.Item label="Ar livre" value="outdoor" />
                  <Picker.Item label="Ambiente fechado" value="indoor" />
                </Picker>
              </S.SelectContainer>
            </InputGroup>
          )}
          name="type"
          // defaultValue="a"
        />
        {errors.type &&  (
          <InputError text={errors.type.message} />
        )}
        <Separator height={10} />
        <Controller
          control={control}
          rules={{
            required: "Este campo é obrigatorio",
          }}
          render={({ field: { onChange, onBlur } }) => (
            <InputGroup>
              <Label text="Sensor:" />
              <S.SelectContainer>
                <Picker
                  style={PickerStyle}
                  onBlur={onBlur}
                  value={selectedSensor}
                  selectedValue={selectedSensor}
                  onValueChange={(itemValue) => {
                    setSelectedSensor(itemValue)
                    onChange(itemValue);
                  }}
                >
                  <Picker.Item label="Selecione um sensor" value="" />
                  {sensorsEquipments.map(sensor => (
                    <Picker.Item label={sensor.code} value={sensor._id} />
                  ))}
                </Picker>
              </S.SelectContainer>
            </InputGroup>
          )}
          name="sensorEquipmentId"
          // defaultValue="a"
        />
        {errors.sensorEquipmentId &&  (
          <InputError text={errors.sensorEquipmentId.message} />
        )}
        <Separator height={20} />
        <Button text="Cadastrar" type="success" onPress={handleSubmit(onSubmit)} />
        <Separator height={10} />
        <Button text="Voltar" onPress={() => navigation.pop()} />
      </S.AddShootingRange>
    </ScreenContainer>
  );
};

export { ShootingRangesAddScreen };
