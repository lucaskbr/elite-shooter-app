import * as React from 'react';

import {
  ScreenContainer,
  Button,
  TextInput,
  InputGroup,
  Label,
  Separator,
} from '../../components';

import logoPath from '../../../assets/logo.png';
import { S } from './style';

const LoginScreen = (props) => {
  const { navigation } = props;
  const { navigate } = navigation;

  // call the route to get user info and set in state

  return (
    <ScreenContainer paddingHorizontal={15}>
      <S.Login>
        <S.Logo source={logoPath} />
        <InputGroup>
          <Label text="e-mail:" />
          <TextInput type="text" placeholder="teste@email.com" />
        </InputGroup>
        <Separator height={10} />
        <InputGroup>
          <Label text="senha:" />
          <TextInput type="password" />
        </InputGroup>
        <Separator height={20} />
        <Button
          text="Login"
          onPress={() =>
            navigate('Home', { names: ['Brent', 'Satya', 'Michaś'] })
          }
        />
      </S.Login>
    </ScreenContainer>
  );
};

export { LoginScreen };
