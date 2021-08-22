import React, { useState, useEffect, useContext } from 'react';
import { FlatList, View } from 'react-native';

import { AuthContext } from '@contexts/auth/authContext';

import { usersEndpoints } from '@services/eliteShooterApi/endpoints/usersEndpoints';
import { gunsEndpoints } from '@services/eliteShooterApi/endpoints/gunsEndpoints';

import {
  Button,
  GunCard,
  ScreenContainer,
  ProfilePic,
  Separator,
  Title,
  Username,
} from '@components';

import { ProfileModal } from './ProfileModal';

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const { userId } = useContext(AuthContext);

  // console.log(userId)

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});
  const [myGuns, setMyGuns] = useState([]);

  const findUserById = async () => {
    try {
      const { data } = await usersEndpoints.findById({ id: userId });
      return data;
    } catch (err) {
      console.log(err)
      return {};
    }
  }

  const findUserGuns = async () => {
    try {
      const { data } = await gunsEndpoints.findAll({ ownerId: userId });
      return data;
    } catch (err) {
      console.log(err)
      return [];
    }
  }

  useEffect(() => {

    console.log(userId)

    Promise.all([
      findUserById(),
      findUserGuns(),
    ]).then(
      (values) => {
        console.log(values)
        setUser(values[0]);
        setUsername(values[0].username);
        setMyGuns(values[1]);
        setIsLoading(false);
      },
    );
  }, []);


  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
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
          <ProfilePic source={{ uri: `https://robohash.org/${username}?set=set2` }} />
          <Username text={username} />
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
                brandModel={item.brandModel}
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
          user={user}
        />
      </View>
    </ScreenContainer>
  );
};

export { ProfileScreen };
