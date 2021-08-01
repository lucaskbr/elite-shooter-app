import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, Text } from 'react-native';

import { shootingActivitiesEndpoint } from '@services/eliteShooterApi/endpoints/shootingActivities';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  Separator,
  IsLoading,
} from '@components';

import { FilterModal } from './FilterModal';

const ListAllActivitiesScreen = (props) => {
  const { navigation } = props;

  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [queryParams, setQueryParams] = useState({});

  const fetchShootingActivities = async () => {
    setIsLoading(true);
    Promise.all([
      shootingActivitiesEndpoint
        .findAll({
          // owner: '60e25a85a5796eb85aab4229',
          populate: ['place'],
          modality: queryParams.modality,
          month: queryParams.month,
        })
        .then((result) => result.data)
        .catch((e) => []),
    ])
      .then((values) => {
        setActivities(values[0]);
        setIsLoading(false);
      })
      .catch(() => setIsLoading(false));
  };

  useEffect(() => {
    (async () => {
      await fetchShootingActivities();
    })();
  }, []);

  useEffect(() => {
    (async () => {
      await fetchShootingActivities();
    })();
  }, [queryParams]);

  if (isLoading) {
    return <IsLoading />;
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <FilterModal
        onChange={(data) => {
          data && setQueryParams(data);
          setIsModalVisible(false);
        }}
        isVisible={isModalVisible}
      />

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
            <Title text="Todas as atividades" />
            <Text onPress={() => setIsModalVisible(true)}>Filtrar</Text>
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

export { ListAllActivitiesScreen };
