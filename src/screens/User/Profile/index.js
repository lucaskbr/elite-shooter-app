import React, { useState, useContext, useCallback } from 'react';
import { useFocusEffect } from '@react-navigation/native';
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
  ProfileInfo,
} from '@components';

import { ProfileModal } from './ProfileModal';
import Toast from 'react-native-toast-message';

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const { userId } = useContext(AuthContext);

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

  useFocusEffect(
    useCallback(() => {
      (async () => {
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
      })();
    }, [])
  );

  if (isLoading) {
    return <></>
  }

  return (
    <ScreenContainer paddingHorizontal={10}>
      <View
        style={{
          flex: 1,
          // backgroundColor: '#fff',
          // justifyContent: 'center',
          // alignItems: 'center',
        }}
      >
        <ProfileInfo username={username} />

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

            if (data) {
              if (data.status === 'success') {
                Toast.show({
                  text1: 'Perfil atualizado ✅',
                  text2: 'Seus dados agora estão atualizados'
                });
              } else {
                Toast.show({
                  type: 'error',
                  text1: 'Ocorreu um erro ❌',
                  text2: 'Não foi possível atualizar seus dados'
                });
              }
            }

          }}
          isVisible={isModalVisible}
          user={user}
        />
        <Toast ref={(ref) => Toast.setRef(ref)} />
      </View>
    </ScreenContainer>
  );
};

export { ProfileScreen };
