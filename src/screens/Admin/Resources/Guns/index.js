import React, { useState, useEffect, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, View, Text } from 'react-native';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
} from '@components';

import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';

import { HeaderList, TopActionButton } from '@containers';


const ResourcesGunsScreen = (props) => {

  const { route, navigation } = props;
  console.log(route)
  // const { placeId } = route.params;

  const [guns, setGuns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchApi = async () => {
    try {
      setIsLoading(true);
      const { data } = await gunsEndpoints.findAll();
      setGuns(data);
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
        title="Cadastrar nova arma"
        buttonText="Cadastrar"
        type="success"
        // onPress={() => navigation.navigate('Resources', { placeId })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Armas do local" />}
        data={guns}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        renderItem={({ item }) => (
          <GunCard
           // onPress={() => navigation.navigate('Modality')}
            gun={item}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { ResourcesGunsScreen };
