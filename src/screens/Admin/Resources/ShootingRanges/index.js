import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  ShootingRangeCard
} from '@components';


import { HeaderList, TopActionButton } from '@containers';
import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';


const ResourcesShootingRangesScreen = (props) => {

  const { route, navigation } = props;
  // const { placeId } = route.params;

  // console.log(placeId)

  const [shootingRanges, setShootingRanges] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const { data } = await shootingRangesEndpoints.findAll({ placeId });
      setShootingRanges(data);
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
        title="Cadastrar nova baia"
        buttonText="Cadastrar"
        type="success"
        // onPress={() => navigation.navigate('Resources', { placeId })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Baias de tiro" />}
        data={shootingRanges}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        renderItem={({ item }) => (
          <ShootingRangeCard
           // onPress={() => navigation.navigate('Modality')}
            shootingRange={item}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { ResourcesShootingRangesScreen };
