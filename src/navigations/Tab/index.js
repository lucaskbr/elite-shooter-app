import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconOutline } from '@ant-design/icons-react-native';

import {
  HomeScreen,
  AimScreen,
  RankingScreen,
  ProfileScreen,
  SettingsScreen,
  PairDeviceScreen,
} from '../../screens';

const Tab = createBottomTabNavigator();

const iconsForTabs = {
  home: 'home',
  pairdevice: 'aim',
  ranking: 'trophy',
  profile: 'user',
  settings: 'setting',
};

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused }) => (
        <IconOutline
          name={iconsForTabs[route.name.toLowerCase()]}
          size={20}
          color={focused ? '#FFFFFF' : '#000000'}
        />
      ),
    })}
    tabBarOptions={{
      activeBackgroundColor: '#FF0066',
      inactiveBackgroundColor: '#FFFFFF',
      activeTintColor: '#FFFFFF',
      inactiveTintColor: 'gray',
      showLabel: false,
    }}
  >
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="PairDevice" component={PairDeviceScreen} />
    <Tab.Screen name="Ranking" component={RankingScreen} />
    <Tab.Screen name="Profile" component={ProfileScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export { TabNavigation };
