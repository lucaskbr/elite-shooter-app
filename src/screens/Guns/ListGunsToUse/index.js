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

  <ScreenContainer paddingHorizontal={10}>
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
          <Title text="Meus equipamentos" />
        </View>
      }
      data={['asd', 'dsadasdas', 'dasds', '1111']}
      keyExtractor={(item, index) => `${item.id}${index}`}
      ItemSeparatorComponent={() => <Separator height={10} />}
      renderItem={({ item }) => <GunCard style={{ flex: 0.5, margin: 3 }} />}
    />
  </ScreenContainer>
);

export { ListGunsToUseScreen };
