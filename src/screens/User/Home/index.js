import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

import { AuthContext } from '@contexts/auth/authContext';

import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';
import { chartsEndpoints } from '@services/eliteShooterApi/endpoints/chartsEndpoints';
import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';

import { alertErrorFromHttpCall } from '@utils/alertErrorFromHttpCall';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  Separator,
  IsLoading,
  ChartSlide,
  ProfileInfo,
  EmptyList
} from '@components';

const HomeScreen = (props) => {
  const { navigation } = props;
  
  const { userId } = useContext(AuthContext);

  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shotsDiference, setShotsDiference] = useState({});
  const [accurateRegions, setAccurateRegions] = useState({});
  const [scoreHistory, setScoreHistory] = useState({});

  useFocusEffect(
    useCallback(() => {
      (async () => {
        Promise.all([
          usersEndpoints.findById({ id: userId }),
          shootingActivitiesEndpoint.findAll({
            limit: 7,
            populate: ['place'],
          }),
          chartsEndpoints.shotsDiference({
            ownerId: userId,
            limit: 7
          }),
          chartsEndpoints.accurateRegions({
            ownerId: userId,
            limit: 7
          }),
          chartsEndpoints.scoreHistory({
            ownerId: userId,
            limit: 1
          }),
        ])
          .then((values) => {
            setUser(values[0].data);
            setUsername(values[0].data.username);
            setActivities(values[1].data);
            setShotsDiference(values[2].data);
            setAccurateRegions(values[3].data);
            setScoreHistory(values[4].data);
            setIsLoading(false);
          })
          .catch(() => setIsLoading(false));
      })();
    }, [])
  );


  const shouldDeleteShootingActivity = async (shootingActivityId) => {
    Alert.alert('Você realmente deseja deletar esta atividade?', '', [
      { text: 'Sim', onPress: () => deleteShootingActivity(shootingActivityId) },
      { text: 'Cancelar' },   
    ]);
  }

  const deleteShootingActivity = async (shootingActivityId) => {
    try {
      await shootingActivitiesEndpoint.deleteById(shootingActivityId)
    } catch (err) {
      alertErrorFromHttpCall(err);
    } finally {
      shootingActivitiesEndpoint.findAll({
        limit: 7,
        populate: ['place'],
      })
      .then(response => setActivities(response.data))
    }
  }

  if (isLoading || !user) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <ProfileInfo username={username} />

      <ChartSlide scoreHistory={scoreHistory} shotsDiference={shotsDiference} accurateRegions={accurateRegions} />

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
            <Title text="Atividades recentes" />
            <Text onPress={() => navigation.navigate('ListAllActivities')}>
              Ver todas
            </Text>
          </View>
        }
        ListEmptyComponent={() => (<EmptyList text="Nenhuma atividade encontrada" />)}
        ItemSeparatorComponent={() => <Separator height={10} />}
        ListFooterComponent={
          <View
            style={{
              width: '100%',
              marginBottom: 20,
            }}
          />
        }
        data={activities}
        keyExtractor={(item) => `${item._id}`}
        renderItem={({ item }) => (
          <ActivityCard
            shootingActivity={item}
            onPress={() =>
              navigation.navigate('ActivityDetail', {
                id: item._id,
              })
            }
            // onLongPress={() => shouldDeleteShootingActivity(item._id)}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { HomeScreen };
