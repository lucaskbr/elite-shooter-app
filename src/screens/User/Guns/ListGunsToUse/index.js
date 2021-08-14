import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
} from '@components';
import {
  eliteShooterAPI,
  eliteShooterURI,
} from '@services/eliteShooterApi/api';
import { gunsEndpoints } from '../../../../services/eliteShooterApi/endpoints/gunsEndpoints';

const ListGunsToUseScreen = (props) => {
  const { route, navigation } = props;
  const { params } = route;

  const [myGuns, setMyGuns] = useState([]);
  const [placeGuns, setPlaceGuns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);


  const getAllMyWeapons = async () => {
    try {
      const { data } = await gunsEndpoints.findAll({})
      setMyGuns(data)
    } catch (err) {
      console.log(err)
    }
  }

  const getAllClubWeapons = async () => {
    try {

    } catch (err) {
      console.log(err)
    }
  }


  useEffect(() => {
    (async () => {
      await getAllMyWeapons();
      setIsLoading(false);
    })();
  }, []);

  // useEffect(() => {
  //   Promise.all([
  //     eliteShooterAPI.get('/guns', {
  //       params: {
  //         owner: '60e257799e2f55ae6e389793'
  //       }
  //     }).then(({ result } )=> result),
  //     // fetch(`${eliteShooterURI}/guns?owner=60e257799e2f55ae6e389793`).then((res) => res.json()),
  //     fetch("/api/guns/places").then((res) => res.json())
  //   ]).then((values) => {
  //     setMyGuns(values[0]);
  //     setPlaceGuns(values[1]);
  //     setIsLoading(false);
  //   })
  // }, [])

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
      <View style={{ height: '50%', flexGrow: 0 }}>
        <FlatList
          numColumns={2}
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
          keyExtractor={(item, index) => `${item.id}${index}`}
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
          keyExtractor={(item, index) => `${item.id}${index}`}
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
