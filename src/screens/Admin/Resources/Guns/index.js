import React, { useState, useContext } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { FlatList, Alert } from 'react-native';

import { ParamsContext } from '@contexts/params/ParamsContext';

import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';

import { HeaderList, TopActionButton } from '@containers';

import {
  ScreenContainer,
  Title,
  Separator,
  GunCard,
  IsLoading,
  EmptyList
} from '@components';

const ResourcesGunsScreen = (props) => {

  const { navigation } = props; 
  const { currentPlace } = useContext(ParamsContext);

  const [guns, setGuns] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const findAllGuns = async () => {
    try {
      setIsLoading(true);
      const { data } = await gunsEndpoints.findAll({ placeId: currentPlace });
      setGuns(data);
    } catch (err) {
      console.log(err)
    } finally {
      setIsLoading(false);
    }
  }

  const shouldDeleteGun = async (gunId) => {
    console.log('shouldDeleteGun')
    console.log(gunId)
    Alert.alert('Você realmente deseja deletar esta arma?', '', [
      { text: 'Sim', onPress: () => deleteGun(gunId) },
      { text: 'Cancelar' },   
    ]);
  }

  const deleteGun = async (gunId) => {
    try {
      await gunsEndpoints.delete(gunId);
    } catch (err) {
      console.log(err)
    } finally {
      await findAllGuns();
    }
  }

  useFocusEffect(
    React.useCallback(() => {
      currentPlace && findAllGuns();
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
        onPress={() => navigation.navigate('GunsAdd', { placeId: currentPlace })}
      />
      <FlatList
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={<HeaderList title="Armas do local" />}
        data={guns}
        keyExtractor={(item, index) => `${item._id}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListEmptyComponent={(<EmptyList>Nenhuma arma encontrada</EmptyList>)}
        renderItem={({ item }) => (
          <GunCard
            gun={item}
            onLongPress={() => shouldDeleteGun(item._id)}
          />
        )}
      />

    </ScreenContainer>
  );
};

export { ResourcesGunsScreen };
