import React from 'react';
import { View } from 'react-native';

import {
  Title,
  Button,
  Separator,
} from '@components';


const TopActionButton = (props) => {

  const { title, buttonText, type, onPress, ...rest } = props

  return (
    <View>
      <Separator height={10} />
      <Title text={title} />
      <Separator height={10} />
      <Button text={buttonText} type={type} onPress={onPress} />
      <Separator height={20} />
    </View>
  );
};

export { TopActionButton };
