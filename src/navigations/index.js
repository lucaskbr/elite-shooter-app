import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './Stack';

const Navigations = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export { Navigations };
