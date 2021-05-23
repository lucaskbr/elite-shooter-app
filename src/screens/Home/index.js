import * as React from 'react';
import { FlatList, View } from 'react-native';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  ProfilePic,
  Separator,
} from '../../components';

import userPicPath from '../../../assets/dash.png';

import { S } from './style';

const activityList = [
  {
    key: '1',
    modality: 'treino',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
  {
    key: '2',
    modality: 'competição',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
  {
    key: '3',
    modality: 'competição',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
  {
    key: '4',
    modality: 'treino',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
  {
    key: '5',
    modality: 'treino',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
  {
    key: '6',
    modality: 'competição',
    date: '07/07/2021',
    place: 'Clube XXXXX',
  },
];

const HomeScreen = () => (
  // show info about user

  <ScreenContainer paddingHorizontal={10}>
    <S.ProfileInfo>
      <ProfilePic source={userPicPath} />
      <S.Username>Username</S.Username>
    </S.ProfileInfo>

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
          <Title text="Atividades recentes" />
        </View>
      }
      ItemSeparatorComponent={() => <Separator height={10} />}
      data={activityList}
      keyExtractor={(item, index) => `${item.id}${index}`}
      renderItem={({ item }) => (
        <ActivityCard
          modality={item.modality}
          date={item.date}
          place={item.place}
        />
      )}
    />
  </ScreenContainer>
);

export { HomeScreen };
