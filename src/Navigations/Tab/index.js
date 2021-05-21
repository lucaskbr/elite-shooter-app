import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeOutlined, AimOutlined, TrophyOutlined, UserOutlined, SettingOutlined } from '@ant-design/icons';

import { HomeScreen, AimScreen, RankingScreen, ProfileScreen, SettingsScreen } from '../../Screens'

const Tab = createBottomTabNavigator();

const tabIsFocusedStyle = (focused) => focused ? '#FFF' : '#000';

const iconTabStyle = (focused) => ({ fontSize: '16px', color: tabIsFocusedStyle(focused) });

const handleTabBarIcons = (route, { focused, color, size }) => {
  switch (route.name) {
    case 'Home':
      return <HomeOutlined  style={iconTabStyle(focused)} /> 
    case 'Aim':
      return <AimOutlined style={iconTabStyle(focused)} />;
    case 'Ranking':
      return <TrophyOutlined style={iconTabStyle(focused)} />
    case 'Profile':
      return <UserOutlined style={iconTabStyle(focused)} />
    case 'Settings':
      return <SettingOutlined style={iconTabStyle(focused)} />
    default:
      return null;
  }
}

const TabNavigation = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: (props) => handleTabBarIcons(route, props)
            })}
            tabBarOptions={{
                activeBackgroundColor: '#FF0066',
                activeTintColor: '#FFFFFF',
                inactiveTintColor: 'gray',
            }}
            >
            <Tab.Screen name="Home"  component={HomeScreen}  />
            <Tab.Screen name="Aim" component={AimScreen}  />
            <Tab.Screen name="Ranking" component={RankingScreen}  />
            <Tab.Screen name="Profile" component={ProfileScreen}  />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            </Tab.Navigator>
        </NavigationContainer>
  )
}

export { TabNavigation }