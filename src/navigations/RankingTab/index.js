import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { RankingAllScreen, RankingMonthlyScreen, RankingWeeklyScreen, RankingYearlyScreen } from '../../screens';

const Tab = createMaterialTopTabNavigator();

const RankingTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#fff',
        labelStyle: { fontSize: 14, textTransform: "capitalize", fontFamily: "Exo2_700Bold" },
        indicatorStyle: { backgroundColor: '#FF0066', height: 5 },
        style: { backgroundColor: '#00264D' },
      }}
    >
      <Tab.Screen
        name="RankingAll"
        component={RankingAllScreen}
        options={{ tabBarLabel: 'Geral' }}
      />
      <Tab.Screen
        name="RankingYearly"
        component={RankingYearlyScreen}
        options={{ tabBarLabel: 'Anual' }}
      />
      <Tab.Screen
        name="RankingMonthly"
        component={RankingMonthlyScreen}
        options={{ tabBarLabel: 'Mensal' }}
      />
      <Tab.Screen
        name="RankingWeekly"
        component={RankingWeeklyScreen}
        options={{ tabBarLabel: 'Semanal' }}
      />
    </Tab.Navigator>
  );
}

export { RankingTab }
