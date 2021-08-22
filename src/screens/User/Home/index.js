import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View, Text } from 'react-native';

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
} from '@components';

import { S } from './style';

const HomeScreen = (props) => {
  const { navigation } = props;
  
  const { userId } = useContext(AuthContext);

  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [username, setUsername] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const findUserById = async () => {
    try {
      const { data } = await usersEndpoints.findById({ id: userId });
      console.log(data)
      return data;
    } catch (err) {
      console.log(err)
      return {};
    }
  }

  const findLastActivities = async () => {
    try {
      const { data } = await shootingActivitiesEndpoint.findAll({
        limit: 7,
        populate: ['place'],
      });
      return data;
    } catch (err) {
      return [];
    }
  }

  useEffect(() => {
    (async () => {
      Promise.all([
        findUserById(),
        findLastActivities()
      ])
        .then((values) => {
          setUser(values[0]);
          setUsername(values[0].username);
          setActivities(values[1]);

          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    })();
  }, []);

  if (isLoading || !user) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <S.ProfileInfo>
        <ProfilePic source={{ uri: `https://robohash.org/${username}?set=set2` }} />
        <Username text={user.name || ''} />
      </S.ProfileInfo>

      {/* <ChartSlide /> */}

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
                id: item.id,
              })
            }
          />
        )}
      />
    </ScreenContainer>
  );
};

export { HomeScreen };
