import React, { useState, useEffect, useContext, useCallback } from 'react';
import { FlatList, View, Text, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { IconOutline } from '@ant-design/icons-react-native';

import { AuthContext } from '@contexts/auth/authContext';

import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';
import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';

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
  Username,
  ProfileInfo,
  EmptyList
} from '@components';

import { chartsEndpoints } from '@services/eliteShooterApi/endpoints/chartsEndpoints';
const HomeScreen = (props) => {
  const { navigation } = props;
  
  const { userId } = useContext(AuthContext);

  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [shotsDiference, setShotsDiference] = useState([]);
  const [accurateRegions, setAccurateRegions] = useState([]);

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
        ])
          .then((values) => {
            setUser(values[0].data);
            setUsername(values[0].data.username);
            setActivities(values[1].data);
            setShotsDiference(values[2].data);
            setAccurateRegions(values[3].data);
            setIsLoading(false);
            // console.log(values[2].data)
          })
          .catch(() => setIsLoading(false));
      })();
    }, [])
  );


  const shouldDeleteShootingActivity = async (shootingActivityId) => {
    console.log('shouldDeleteShootingActivity')
    Alert.alert('Você realmente deseja deletar esta atividade?', '', [
      { text: 'Sim', onPress: () => deleteShootingActivity(shootingActivityId) },
      { text: 'Cancelar' },   
    ]);
  }

  const deleteShootingActivity = async (shootingActivityId) => {
    try {
      await shootingActivitiesEndpoint.deleteById(shootingActivityId)
    } catch (err) {
      console.log(err)
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

  console.log(activities.length )

  // if (activities && activities.length <= 0) {
  //   return (
  //     <ScreenContainer paddingHorizontal={10}>
  //       <ProfileInfo username={username} />
  //       <IconOutline name="file-search" color="#D0D0D0" size={200} />
  //     </ScreenContainer>
  //   )
  // }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <ProfileInfo username={username} />

      <ChartSlide shotsDiference={shotsDiference} accurateRegions={accurateRegions} />

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
        keyExtractor={(item) => `${item.id}`}
        renderItem={({ item }) => (
          <ActivityCard
            shootingActivity={item}
            onPress={() =>
              navigation.navigate('ActivityDetail', {
                id: item._id,
              })
            }
            onLongPress={() => shouldDeleteShootingActivity(item._id)}
          />
        )}
      />
    </ScreenContainer>
  );
};

export { HomeScreen };
