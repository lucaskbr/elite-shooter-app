import React, { useState, useEffect, useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View } from 'react-native';

import { PlacesContext } from '@contexts/places/PlacesContext';
import { ParamsContext } from '@contexts/params/ParamsContext';

import { operations, socket } from '@services/socketio';

import { TopActionButton } from '@containers';

import { socketIoState } from '@services/socketio';

import {
  ScreenContainer,
  Title,
  Separator,
  IsLoading,
  ShootingRangeCard,
} from '@components';

const HomeScreen = (props) => {
  const { route, navigation } = props;
  const { placeId } = route.params;

  const { isLoading, shootingRanges, handleShootingRanges } = useContext(PlacesContext);

  const { setCurrentPlace } = useContext(ParamsContext);

  const [onlineShootingRanges, setOnlineShootingRanges] = useState(new Set());

  useFocusEffect(
    useCallback(() => {
      handleShootingRanges({ placeId });
      setCurrentPlace(placeId);
    }, []),
  );

  useFocusEffect(
    useCallback(() => {
      const shootingRangesIds = shootingRanges.map(shootingRange => shootingRange._id) || [];
      operations.emitDashboardStart(shootingRangesIds);
  
      operations.subscribeShootingRangeActive((err, shootingRangeId) => {
        if (err) {
          console.log(err)
          return;
        }
    
        addOnlineShootingRanges(shootingRangeId);
      });
    
      operations.subscribeDisconnect((err, shootingRangeId) => {
        if (err) {
          console.log(err)
          return;
        }
    
        removeOnlineShootingRanges(shootingRangeId);
      });
  
      return () => {}
    }, []),
  );

  const addOnlineShootingRanges = id =>{
    setOnlineShootingRanges(previousState => new Set([...previousState, id]))
  }

  const removeOnlineShootingRanges = id =>{
    setOnlineShootingRanges(previousState => new Set([...previousState].filter(x => x !== id)))
  }

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
            placeId
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
            showRealtimeStatus={true}
            isOnline={onlineShootingRanges.has(item._id)}
            onPress={() =>
              navigation.navigate('ShootingRangesDetails', {
                id: item._id,
                searchForCurrentShooter: onlineShootingRanges.has(item._id),
              })
            }
          />
        )}
      />
      <Separator height={20} />
    </ScreenContainer>
  );
};

export { HomeScreen };
