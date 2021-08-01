import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  ProfilePic,
  Separator,
  IsLoading,
  ChartCard,
  VerticalBarChart,
  ChartSlide,
  ShootingRangeCard,
  Username,
} from '@components';

import { PlacesProvider, PlacesContext } from '@contexts/places/PlacesContext';

import { shootingRangesEndpoints } from '@services/eliteShooterApi/endpoints/shootingRanges';
import { placesEndpoint } from '@services/eliteShooterApi/endpoints/placesEndpoint';
import { S } from './style';
import { Button } from '../../../components';
import { TopActionButton } from '@containers';

const HomeScreen = (props) => {
  const { route, navigation } = props;
  const { placeId } = route.params;

  const { isLoading, shootingRanges, handleShootingRanges } =
    useContext(PlacesContext);

  useFocusEffect(
    React.useCallback(() => {
      handleShootingRanges({ placeId });
    }, []),
  );

  if (isLoading || !shootingRanges) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <TopActionButton
        title="Gerenciar recursos"
        buttonText="Gerenciar"
        type="success"
        onPress={() => 
          navigation.navigate('Resources',
          {
            screen: 'ResourceGuns',
            params: { placeId }
          }
        )}
      />

      <Separator height={20} />

      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              width: '100%',
              marginBottom: 10,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Title text="Baias de tiro" />
          </View>
        }
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListFooterComponent={
          <View
            style={{
              width: '100%',
              marginBottom: 20,
            }}
          />
        }
        data={shootingRanges}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => (
          <ShootingRangeCard
            shootingRange={item}
            onPress={() =>
              navigation.navigate('ShootingRangeDetails', {
                id: item._id,
              })
            }
          />
        )}
      />
    </ScreenContainer>
  );
};

export { HomeScreen };
