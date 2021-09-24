import React, { useState, useEffect, useCallback } from 'react';
import { FlatList, View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';
import { placeGunsEndpoints } from '@services/eliteShooterApi/endpoints/placeGunsEndpoints';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  EmptyList,
  Button,
} from '@components';

const ListGunsToUseScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;

  const [myGuns, setMyGuns] = useState([]);
  const [placeGuns, setPlaceGuns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  useFocusEffect(
    useCallback(() => {
      (async () => {
        Promise.all([
          gunsEndpoints.findAll({}),
          placeGunsEndpoints.findById({ id: params.placeId })
        ])
        .then(((values) => {
          console.log(values[0].data)
          setMyGuns(values[0].data);
          setPlaceGuns(values[1].data);
          setIsLoading(false);
        }))
      })();
    }, [])
  );

  // useEffect(() => {
  //   (async () => {
  //     Promise.all([
  //       gunsEndpoints.findAll({}),
  //       placeGunsEndpoints.findById({ id: params.placeId })
  //     ])
  //     .then(((values) => {
  //       console.log(values[0].data)
  //       setMyGuns(values[0].data);
  //       setPlaceGuns(values[1].data);
  //       setIsLoading(false);
  //     }))
  //   })();
  // }, []);

  // TODO: Loading

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <View style={{ height: '50%', flexGrow: 0 }}>
        <FlatList
          contentContainerStyle={{ padding: 1, flexGrow: 0, margin: 0 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                width: '100%',
                marginBottom: 10,
              }}
            >
              <Title text="Minhas armas" />
            </View>
          }
          data={myGuns}
          keyExtractor={(item, index) => `${item._id}`}
          ListEmptyComponent={(
            <>
              <EmptyList text="Você não tem nenhuma arma cadastrada" />
              <Button
                text="Cadastrar"
                onPress={() => navigation.navigate('AddGun')}
              />
            </>
          )}
          ItemSeparatorComponent={() => <Separator height={10} />}
          renderItem={({ item }) => (
            <GunCard
              onPress={() => navigation.navigate('Modality', { ...params, gunId: item._id })}
              gun={item}
            />
          )}
        />
      </View>
      <Separator height={5} />
      <View style={{ height: '50%', flexGrow: 0 }}>
        <FlatList
          contentContainerStyle={{ padding: 1 }}
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={
            <View
              style={{
                width: '100%',
                marginBottom: 10,
              }}
            >
              <Title text="Armas do clube" />
            </View>
          }
          data={placeGuns}
          keyExtractor={(item, index) => `${item._id}`}
          ListEmptyComponent={(<EmptyList text="O clube não possui nenhuma arma cadastrada" />)}
          ItemSeparatorComponent={() => <Separator height={10} />}
          renderItem={({ item }) => (
            <GunCard
              onPress={() => navigation.navigate('Modality', { ...params, gunId: item._id })}
              gun={item}
            />
          )}
        />
      </View>
    </ScreenContainer>
  );
};

export { ListGunsToUseScreen };
