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
} from '../../components';

import { S } from './style';

const HomeScreen = (props) => {

  const { navigation } = props;

  const [activities, setActivities] = useState([]);
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    Promise.all([
      fetch("/api/activities/lasts").then((res) => res.json()),
      fetch("/api/users").then((res) => res.json())
    ]).then((values) => {
      setActivities(values[0]);
      setUser(values[1]);
      setIsLoading(false);
    })
  }, [])

  return (
    <ScreenContainer paddingHorizontal={10}>
      <IsLoading condition={isLoading}>

        <S.ProfileInfo>
          <ProfilePic source={user.avatar && {uri: user.avatar}} />
          <S.Username>{user.name}</S.Username>
        </S.ProfileInfo>

        <ChartCard height={200}>
          <VerticalBarChart />
        </ChartCard>

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
                justifyContent: 'space-between'
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
          keyExtractor={(item, index) => `${item.id}${index}`}
          renderItem={({ item }) => (
            <ActivityCard
              modality={item.modality}
              date={item.date}
              place={item.place}
            />
          )}
        />

      </IsLoading>
    </ScreenContainer>
  );
}

export { HomeScreen };
