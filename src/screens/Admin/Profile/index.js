import React, { useCallback, useContext, useState }  from 'react';
import _ from 'lodash';
import { useFocusEffect } from '@react-navigation/native';
import { View, FlatList } from "react-native";

import { AuthContext } from '@contexts/auth/authContext';

import { placesEndpoint } from '@services/eliteShooterApi/endpoints/placesEndpoint';
import { dashboardsEndpoints } from '@services/eliteShooterApi/endpoints/dashboardsEndpoints';

import {
  ScreenContainer,
  Title,
  Separator,
  IsLoading,
  CountCard,
  PlaceCard,
  EmptyList,
  ProfileInfo,
} from '@components';

import { S } from './style';

const ProfileScreen = (props) => {
  const { handleLogout } = useContext(AuthContext);

  const [isLoading, setIsLoading] = useState(true);
  const [places, setPlaces] = useState([]);
  const [dashboard, setDashboard] = useState({});

  const updatePlaceIsActive = async (id, isActive) => {
    await placesEndpoint.updateById(id, { isActive })
    .then(() => {})
    .catch(() => {})
  }

  useFocusEffect(
    useCallback(() => {
      placesEndpoint.findAll()
      .then(response => {
        setPlaces(response.data)
        const placeIds = response.data.map(place => place._id)
        dashboardsEndpoints.findAll({ places: placeIds })
          .then(response => {
            setDashboard(response.data);
            setIsLoading(false);
          })
          .catch(err => setIsLoading(false))
      })
      .catch(err => setIsLoading(false))
    }, []),
  );

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10} paddingVertical={20} >
      <ProfileInfo username="Admin" logout={true} handleLogout={handleLogout} />
      <S.Dashboard>
        <S.DashboardRow>
          <S.DashboardItem>
            <CountCard
              number={_.get(dashboard, 'shotsCount', 0)}
              title="Disparos"
              gradientArray={['#1e8972', '#2ab295', '#36DAB8']}
            />
          </S.DashboardItem>
          <S.DashboardItem>
            <CountCard
              number={_.get(dashboard, 'shootingActivitiesCount', 0)}
              title="Atividades de tiro"
              gradientArray={['#8e405d', '#d1648c', '#FF79AC']}
            />
          </S.DashboardItem>
        </S.DashboardRow>
      </S.Dashboard>
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
            <Title text="Locais" />
          </View>
        }
        ListEmptyComponent={() => (<EmptyList text="Nenhuma atividade encontrada" />)}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListFooterComponent={
          <View
            style={{
              width: '100%',
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 10,
            }}>
              <S.Ps>Ps: Para aplicar as mudanças na interface, deslogue e logue novamente</S.Ps>
            </View>
        }
        data={places}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => (
         <PlaceCard
            place={item}
            switchOnValueChange={updatePlaceIsActive}
         />
        )}
      />
    </ScreenContainer>
  );
};

export { ProfileScreen };
