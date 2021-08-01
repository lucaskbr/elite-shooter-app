import React from 'react';
import { View } from 'react-native';

import {
  Title,
} from '@components';


const HeaderList = (props) => {

  const { title } = props

  return (
    <View style={{
        width: '100%',
        marginBottom: 10,
      }}
    >
      <Title text={title} />
    </View>
  );
};

export { HeaderList };
