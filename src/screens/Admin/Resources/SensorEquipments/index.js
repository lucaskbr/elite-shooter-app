import React, { useState, useCallback, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { HeaderList, TopActionButton } from '@containers';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  SensorEquipmentCard,
  EmptyList
} from '@components';

import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';

const ResourcesSensorEquipmentsScreen = (props) => {

  const { navigation } = props;

  const { currentPlace } = useContext(ParamsContext);

  const [sensorEquipments, setSensorEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllSensorEquipments = async () => {
    try {
      setIsLoading(true);
      const { data } = await sensorEquipmentsEndpoints.findAll({
        placeId: currentPlace
      });
      setSensorEquipments(data);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }

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
      <TopActionButton
        title="Cadastrar novo sensor"
        buttonText="Cadastrar"
        type="success"
        onPress={() => navigation.navigate('SensorEquipmentsAdd', { placeId: currentPlace })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Sensores do local" />}
        data={sensorEquipments}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListEmptyComponent={(<EmptyList>Nenhum sensor encontrado</EmptyList>)}
        renderItem={({ item }) => (
          <SensorEquipmentCard
           // onPress={() => navigation.navigate('Modality')}
            sensorEquipment={item}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { ResourcesSensorEquipmentsScreen };
