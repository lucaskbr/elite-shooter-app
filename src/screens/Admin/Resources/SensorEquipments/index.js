import React, { useState, useCallback, useContext } from 'react';
import _ from 'lodash';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList } from 'react-native';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { sensorEquipmentsEndpoints } from '@services/eliteShooterApi/endpoints/sensorEquipments';

import { HeaderList, TopActionButton } from '@containers';

import {
  ScreenContainer,
  Separator,
  SensorEquipmentCard,
  EmptyList,
  IsLoading
} from '@components';

const ResourcesSensorEquipmentsScreen = (props) => {

  const { navigation } = props;

  const { currentPlace } = useContext(ParamsContext);

  const [sensorEquipments, setSensorEquipments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useFocusEffect(
    useCallback(() => {
      if (!currentPlace) return;

      Promise.all([
        sensorEquipmentsEndpoints.findAll({
          placeId: currentPlace
        })
      ])
      .then(values => {
        setSensorEquipments(_.get(values, '[0].data'));
        setIsLoading(false);
      })
      .catch(e => {
        setIsLoading(false);
      })
    }, []),
  );

  if (isLoading) {
    return <IsLoading />;
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
        keyExtractor={(item, index) => `${item._id}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListEmptyComponent={(<EmptyList text="Nenhum sensor encontrado" />)}
        renderItem={({ item }) => (
          <SensorEquipmentCard
            sensorEquipment={item}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { ResourcesSensorEquipmentsScreen };
