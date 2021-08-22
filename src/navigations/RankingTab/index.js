import * as React from 'react';
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
      initialParams={{ id: 'all' }}
    />
    <Tab.Screen
      name="RankingYearly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Anual' }}
      initialParams={{ id: 'yearly' }}
    />
    <Tab.Screen
      name="RankingMonthly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Mensal' }}
      initialParams={{ id: 'monthly' }}
    />
    <Tab.Screen
      name="RankingWeekly"
      component={Shared.RankingScreen}
      options={{ tabBarLabel: 'Semanal' }}
      initialParams={{ id: 'weekly' }}
    />
  </Tab.Navigator>
);

export { RankingTab };