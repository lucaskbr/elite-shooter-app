import React, { useState, useEffect } from 'react';
import { FlatList, View } from 'react-native';
import {
  Button,
  GunCard,
  IsLoading,
  ProfilePic,
  Separator,
  Title,
  Username,
} from '@components';

import { ProfileModal } from './ProfileModal';

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [myGuns, setMyGuns] = useState([]);

  useEffect(() => {
    Promise.all([fetch('/api/guns/users').then((res) => res.json())]).then(
      (values) => {
        setMyGuns(values[0]);
        setIsLoading(false);
      },
    );
  }, []);

  return (
    <IsLoading condition={isLoading}>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          paddingHorizontal: 15,
          paddingVertical: 15,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            paddingHorizontal: 15,
            paddingVertical: 15,
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'flex-start',
            alignItems: 'center',
          }}
        >
          <ProfilePic source={{ uri: `https://robohash.org/?set=set2&170` }} />
          <Username text="username" />
        </View>

        <Button
          text="Ver mais"
          type="invisible"
          onPress={() => setIsModalVisible(true)}
        />

        <View style={{ flex: 1, marginTop: 20, width: '100%' }}>
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
                <Title text="Minhas armas" />
              </View>
            }
            ItemSeparatorComponent={() => <Separator height={10} />}
            ListFooterComponent={
              <View
                style={{
                  width: '100%',
                  marginTop: 20,
                }}
              >
                <Button
                  text="Adicionar mais"
                  onPress={() => navigate('AddGun')}
                />
              </View>
            }
            data={myGuns}
            keyExtractor={(item, index) => `${item.id}${index}`}
            renderItem={({ item }) => (
              <GunCard
                gun={item}
              />
            )}
          />
        </View>

        <ProfileModal
          onChange={(data) => {
            setIsModalVisible(false);
          }}
          isVisible={isModalVisible}
        />
      </View>
    </IsLoading>
  );
};

export { ProfileScreen };
