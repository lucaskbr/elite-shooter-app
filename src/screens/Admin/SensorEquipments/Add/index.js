import React, { useState, useContext } from 'react';
import { Alert, FlatList, View } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { Picker } from '@react-native-picker/picker';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';

import { PickerStyle } from '@containers/PickerStyle';

import {
  ScreenContainer,
  Title,
  Separator,
  InputGroup,
  TextInput,
  Label,
  Button,
} from '@components';

import { S } from './style';
import { alertErrorFromHttpCall } from '../../../../utils/alertErrorFromHttpCall';

const SensorEquipmentsAddScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { currentPlace } = React.useContext(ParamsContext);

  const [selectedType, setSelectedType] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const createSensorEquipment = async (sensorEquipment) => {
    try {
      await sensorEquipmentsEndpoints.create({
       ...sensorEquipment,
        placeId: currentPlace
      });
      Alert.alert('O equipamento sensor foi cadastrada com sucesso!', '', [{ text: 'OK', onPress: () => navigation.pop() }]);
    } catch (err) {
      alertErrorFromHttpCall(err);
    } finally {
      setIsLoading(false);
    }
  }

  const onSubmit = (data) => createSensorEquipment(data);

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <S.AddSensorEquipments>
        <Title text="Cadastrar novo sensor" />
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
                  <Picker.Item key="none" label="Selecione um tipo" value="" />
                  <Picker.Item key="arduino" label="Arduino" value="arduino" />
                  <Picker.Item key="node mcu" label="Node MCU" value="node mcu" />
                </Picker>
              </S.SelectContainer>
            </InputGroup>
          )}
          name="sensorEquipmentId"
          defaultValue="a"
        />
        <Separator height={20} />
        <Button text="Cadastrar" type="success" onPress={handleSubmit(onSubmit)} />
        <Separator height={10} />
        <Button text="Voltar" onPress={() => goBack()} />
      </S.AddSensorEquipments>
    </ScreenContainer>
  );
};

export { SensorEquipmentsAddScreen };
