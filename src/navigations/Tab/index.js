import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { IconOutline } from '@ant-design/icons-react-native';

import { User } from '@screens/User';
import { Admin } from '@screens/Admin';
import { AuthContext } from '@contexts/auth/authContext';
import { RankingTab } from '../RankingTab';

import { AdminPlacesTab } from '../AdminPlacesTab';

const Tab = createBottomTabNavigator();

const iconsForTabs = {
  home: 'home',
  pairdevice: 'aim',
  ranking: 'trophy',
  profile: 'user',
  place: 'user',
  settings: 'setting',
};

const TabNavigation = () => {
  const { isAdmin } = useContext(AuthContext);

  const adminTab = () => (
    <>
      <Tab.Screen name="Home" component={AdminPlacesTab} />
      <Tab.Screen name="Profile" component={Admin.ProfileScreen} />
    </>
  );

  const userTab = () => (
    <>
      <Tab.Screen name="Home" component={User.HomeScreen} />
      <Tab.Screen name="PairDevice" component={User.PairDeviceScreen} />
      <Tab.Screen name="Ranking" component={RankingTab} />
      <Tab.Screen name="Profile" component={User.ProfileScreen} />
    </>
  );
  // TODO: Remove comments


  return (
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
      {isAdmin ? adminTab() : userTab()}
    </Tab.Navigator>
  );
};

export { TabNavigation };
