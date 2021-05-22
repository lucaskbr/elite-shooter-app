import * as React from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { LoginScreen } from '../../screens';

import { TabNavigation } from '../Tab';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator headerMode="screen">
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen
      name="Home"
      component={TabNavigation}
      options={{
        title: '',
      }}
    />
  </Stack.Navigator>
);

export { StackNavigation };
