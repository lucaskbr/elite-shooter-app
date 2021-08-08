import React, { useState, useEffect } from 'react';
import { FlatList, View, Text } from 'react-native';

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
import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';

import { S } from './style';

const HomeScreen = (props) => {
  const { navigation } = props;

  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      Promise.all([
        shootingActivitiesEndpoint
          .findAll({
            limit: 7,
            populate: ['place'],
          })
          .then((result) => result.data)
          .catch((e) => []),
      ])
        .then((values) => {
          setActivities(values[0]);
          // setUser(values[1]);
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    })();
  }, []);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <S.ProfileInfo>
        <ProfilePic source={user.avatar && { uri: user.avatar }} />
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
