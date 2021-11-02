import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Shared } from '@screens/Shared';

const Tab = createMaterialTopTabNavigator();

const RankingTab = () => (
  <Tab.Navigator
    initialRouteName="Feed"
    tabBarOptions={{
      activeTintColor: '#fff',
      labelStyle: {
        fontSize: 14,
        textTransform: 'capitalize',
        fontFamily: 'Exo2_700Bold',
      },
      indicatorStyle: { backgroundColor: '#FF0066', height: 5 },
      style: { backgroundColor: '#00264D' },
    }}
  >
    <Tab.Screen
      name="RankingAll"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Geral' }}
      initialParams={{ period: 'all' }}
    />
    <Tab.Screen
      name="RankingYearly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Anual' }}
      initialParams={{ period: 'yearly' }}
    />
    <Tab.Screen
      name="RankingMonthly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Mensal' }}
      initialParams={{ period: 'monthly' }}
    />
    <Tab.Screen
      name="RankingWeekly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Semanal' }}
      initialParams={{ period: 'weekly' }}
    />
  </Tab.Navigator>
);

export { RankingTab };
