import React, { useState, useEffect, useContext, useCallback, useMemo } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import { PlacesContext } from '@contexts/places/PlacesContext';
import { ParamsContext } from '@contexts/params/ParamsContext';

import { operations, shootingRangesOnline, socket } from '@services/socketio';

import { TopActionButton } from '@containers';

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
import { socketIoState } from '../../../services/socketio';

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

  useEffect(() => {

    setOnlineShootingRanges(socketIoState.onlineShootingRangesInitial);

    const shootingRangesIds = shootingRanges.map(shootingRange => shootingRange._id) || [];
    operations.emitDashboardStart(shootingRangesIds);

    operations.subscribeShootingRangeActive((err, shootingRangeId) => {
      if (err) return
  
      console.log(shootingRangeId)
      addOnlineShootingRanges(shootingRangeId);
    });
  
  
    operations.subscribeDisconnect((err, shootingRangeId) => {
      if (err) return
  
      removeOnlineShootingRanges(shootingRangeId);
    });
  }, []);

  useEffect(() => {
    const shootingRangesIds = shootingRanges.map(shootingRange => shootingRange._id) || [];
    operations.emitDashboardStart(shootingRangesIds);

    operations.subscribeShootingRangeActive((err, shootingRangeId) => {
      if (err) return
  
      console.log(shootingRangeId)
      addOnlineShootingRanges(shootingRangeId);
    });
  
  
    operations.subscribeDisconnect((err, shootingRangeId) => {
      if (err) return
  
      removeOnlineShootingRanges(shootingRangeId);
    });
  }, [socket]);


  const addOnlineShootingRanges = id =>{
    setOnlineShootingRanges(previousState => new Set([...previousState, id]))
  }

  const removeOnlineShootingRanges = id =>{
    setOnlineShootingRanges(previousState => new Set([...previousState].filter(x => x !== id)))
  }

  if (isLoading || !shootingRanges) {
    return <IsLoading />;
  }

  console.log()
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
