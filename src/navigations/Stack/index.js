import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import { AimScreen, ListGunsToUseScreen, LoginScreen } from '../../screens';

import { TabNavigation } from '../Tab';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    headerMode="none"
    mode="card"
    screenOptions={{
      title: '',
    }}
  >
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={TabNavigation} />
    <Stack.Screen name="Aim" component={AimScreen} />
    <Stack.Screen name="ListGunsToUse" component={ListGunsToUseScreen} />
  </Stack.Navigator>
);

export { StackNavigation };
