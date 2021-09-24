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
  Separator,
  Title,
  Username,
  ProfileInfo,
  EmptyList,
} from '@components';

import { ProfileModal } from './ProfileModal';
import Toast from 'react-native-toast-message';

const ProfileScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  const { userId, handleLogout } = useContext(AuthContext);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState({});
  const [myGuns, setMyGuns] = useState([]);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        Promise.all([
          usersEndpoints.findById({ id: userId }),
          gunsEndpoints.findAll({ ownerId: userId }),
        ]).then(
          (values) => {
            console.log(values)
            setUser(values[0].data);
            setUsername(values[0].data.username);
            setMyGuns(values[1].data);
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
        }}
      >
        <ProfileInfo username={username} logout={true} handleLogout={handleLogout} />

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
            ListEmptyComponent={() => (<EmptyList text="Nenhuma arma encontrada" />)}
            ItemSeparatorComponent={() => <Separator height={10} />}
            ListFooterComponent={
              <View
                style={{
                  width: '100%',
                  marginTop: 20,
                }}
              >
                <Button
                  text="Adicionar nova arma"
                  onPress={() => navigate('AddGun')}
                />
              </View>
            }
            data={myGuns}
            keyExtractor={(item, index) => `${item._id}`}
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
