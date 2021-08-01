import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  SensorEquipmentCard
} from '@components';


import { HeaderList, TopActionButton } from '@containers';
import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';


const ResourcesSensorEquipmentsScreen = (props) => {

  const { route, navigation } = props;
  // const { placeId } = route.params;

  const [sensorEquipments, setSensorEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const { data } = await sensorEquipmentsEndpoints .findAll();
      setSensorEquipments(data);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      fetchApi();
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
        // onPress={() => navigation.navigate('Resources', { placeId })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Armas do local" />}
        data={sensorEquipments}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
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
