import * as React from 'react';
import { Image } from 'react-native';
import {
  ScreenContainer,
  Button,
  TextInput,
  InputGroup,
  Label,
} from '../../components';
import logoPath from '../../../assets/logo.svg';

const LoginScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  // call the route to get user info and set in state

  return (
    <ScreenContainer>
      <Image source={logoPath} height={50} />
      <InputGroup>
        <Label text="e-mail:" />
        <TextInput type="text" placeholder="teste@email.com" />
      </InputGroup>
      <InputGroup>
        <Label text="senha:" />
        <TextInput type="password" />
      </InputGroup>
      <Button
        text="Login"
        onPress={() =>
          navigate('Home', { names: ['Brent', 'Satya', 'Michaś'] })
        }
      />
    </ScreenContainer>
  );
};

export { LoginScreen };
