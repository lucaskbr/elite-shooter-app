import * as React from 'react';
import { FlatList, View } from 'react-native';

import {
  ScreenContainer,
  ActivityCard,
  Title,
  ProfilePic,
  Separator,
  GunCard,
} from '../../../components';

// import userPicPath from '../../../assets/dash.png';

// import { S } from './style';

const ListGunsToUseScreen = () => (
  // show info about user

  <ScreenContainer paddingVertical={15} paddingHorizontal={10}>
    <View style={{height: '45%', flexGrow: 0 }}>
    <FlatList
      numColumns={2}
      
      contentContainerStyle={{ padding: 1,  flexGrow: 0, margin: 0}}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View
          style={{
            width: '100%',
            marginBottom: 10,
          }}
        >
          <Title text="Minhas armas" />
        </View>
      }
      data={['1', '2', '3', '4', '5', '6', '7', '8']}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ItemSeparatorComponent={() => <Separator height={10} />}
      renderItem={({ item }) => <GunCard style={{ flex: 0.5, margin: 3 }} />}
    />
    </View>
    <Separator height={'5%'} />
    <View style={{height: '45%', flexGrow: 0 }}>
      <FlatList
        numColumns={2}
        contentContainerStyle={{ padding: 1 }}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={
          <View
            style={{
              width: '100%',
              marginBottom: 10,
            }}
          >
            <Title text="Armas do clube" />
          </View>
        }
        data={['1', '2', '3', '4', '5', '6', '7', '8']}
        keyExtractor={(item, index) => `${item.id}${index}`}
        ItemSeparatorComponent={() => <Separator height={10} />}
        renderItem={({ item }) => <GunCard style={{ flex: 0.5, margin: 3 }} />}
      />
    </View>
  </ScreenContainer>
);

export { ListGunsToUseScreen };
