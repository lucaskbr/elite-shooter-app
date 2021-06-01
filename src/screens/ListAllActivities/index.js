import React, { useState, useEffect, useRef } from 'react';
import { FlatList, View, Text } from 'react-native';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  Separator,
  IsLoading,
} from '../../components';
import { FilterModal } from './FilterModal';


const ListAllActivitiesScreen = () => {

  const [activities, setActivities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    Promise.all([
      fetch("/api/activities").then((res) => res.json()).then(json => {
        setActivities(json);
        setIsLoading(false);
      })
    ]);
  }, [])

  return (
    <ScreenContainer paddingHorizontal={10}>
      <IsLoading condition={isLoading}>
      

      <FilterModal
        onChange={(data) => {
          setIsModalVisible(false)
        }}
        isVisible={isModalVisible}
      /> 

        {/* <ChartCard height={200}>
          <VerticalBarChart />
        </ChartCard> */}



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

export { ListAllActivitiesScreen };
