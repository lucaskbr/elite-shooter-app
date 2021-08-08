import React, { useState, useContext } from 'react';
import { Alert, FlatList, View } from 'react-native';

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

import { ParamsContext } from '@contexts/params/ParamsContext';

import { S } from './style';
import { PickerStyle } from '@containers/PickerStyle';
import { useForm, Controller } from 'react-hook-form';
import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';

const SensorEquipmentsAddScreen = (props) => {
  const { navigation } = props;
  const { goBack } = navigation;

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // TODO: better errrr msgs

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
      console.log(err);
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
              required: true,
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
            required: true,
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
                  <Picker.Item label="Arduino" value="arduino" />
                  <Picker.Item label="Node MCU" value="node mcu" />
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
