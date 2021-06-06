import * as React from 'react';
import { View, Text } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import {
  AimScreen,
  ListAllActivitiesScreen,
  ListGunsToUseScreen,
  LoginScreen,
  ActivityDetailScreen,
  AddGunScreen,
  ModalityScreen
} from '../../screens';

import { TabNavigation } from '../Tab';
import { Teste } from '../../screens/Teste';

const Stack = createStackNavigator();

const StackNavigation = () => (
  <Stack.Navigator
    headerMode="none"
    mode="card"
    screenOptions={{
      title: '',
    }}
  >
        {/* <Stack.Screen name="Teste" component={Teste} /> */}
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Home" component={TabNavigation} />
    <Stack.Screen name="Aim" component={AimScreen} />
    <Stack.Screen name="ListGunsToUse" component={ListGunsToUseScreen} />
    <Stack.Screen name="AddGun" component={AddGunScreen} />
    <Stack.Screen name="ListAllActivities" component={ListAllActivitiesScreen} />
    <Stack.Screen name="ActivityDetail" component={ActivityDetailScreen} />
    <Stack.Screen name="Modality" component={ModalityScreen} />
  </Stack.Navigator>
);

export { StackNavigation };
