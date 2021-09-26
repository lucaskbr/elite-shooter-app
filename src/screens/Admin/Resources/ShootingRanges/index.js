import React, { useState, useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { Alert, FlatList } from 'react-native';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';

import { HeaderList, TopActionButton } from '@containers';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  ShootingRangeCard,
  EmptyList
} from '@components';
import { httpErrorMessages } from '@utils/httpErrorMessages';

const ResourcesShootingRangesScreen = (props) => {

  const { navigation } = props;
  const { currentPlace } = useContext(ParamsContext);

  const [shootingRanges, setShootingRanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getAllShootingRanges = async () => {
    try {
      setIsLoading(true);
      const { data } = await shootingRangesEndpoints.findAll({ placeId: currentPlace });
      setShootingRanges(data);
    } catch (err) {
      const { status } = err.response
      Alert.alert('Desculpe', httpErrorMessages[status],  [{ text: 'OK' }]);
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getAllShootingRanges();
    }, []),
  );

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <TopActionButton
        title="Cadastrar nova baia de tiro"
        buttonText="Cadastrar"
        type="success"
        onPress={() => navigation.navigate('ShootingRangesAdd', { placeId: currentPlace })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Baias de tiro" />}
        data={shootingRanges}
        keyExtractor={(item, index) => `${item._id}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListEmptyComponent={(<EmptyList>Nenhuma baia de tiro encontrada</EmptyList>)}
        renderItem={({ item }) => (
          <ShootingRangeCard
            showRealtimeStatus={false}
            shootingRange={item}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { ResourcesShootingRangesScreen };
