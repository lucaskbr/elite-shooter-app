import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Admin } from '@screens/Admin';

const Tab = createMaterialTopTabNavigator();

const HandleScreesToShow = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#003366',
        inactiveTintColor: '#CACACA',
        indicatorStyle: {
          backgroundColor: '#FF0066',
        },
        labelStyle: {
          fontFamily: 'Poppins_300Light',
          textTransform: 'capitalize',
        },
      }}
    >
      <Tab.Screen
        name="ResourceGuns"
        options={{
          title: 'Armas'
        }}
        component={Admin.ResourcesGunsScreen}
      />
      <Tab.Screen
        name="ResourceShootingRanges"
        options={{
          title: 'baias de tiro'
        }}
        component={Admin.ResourcesShootingRangesScreen}
      />
      <Tab.Screen
        name="ResourceSensorsEquipments"
        options={{
          title: 'sensores'
        }}
        component={Admin.ResourcesSensorEquipmentsScreen}
      />
    </Tab.Navigator>
  );
};

const ResourcesTab = () => (
  <HandleScreesToShow />
);

export { ResourcesTab };
