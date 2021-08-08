import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { Admin } from '@screens/Admin';

const Tab = createMaterialTopTabNavigator();

const HandleScreesToShow = () => {

  return (
    <Tab.Navigator
      backBehavior="order"
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
        // initialParams={{
        //   placeId
        // }}
        component={Admin.ResourcesGunsScreen}
      />
      <Tab.Screen
        name="ResourceShootingRanges"
        options={{
          title: 'baias de tiro'
        }}
        // initialParams={{
        //   placeId
        // }}
        component={Admin.ResourcesShootingRangesScreen}
      />
      <Tab.Screen
        name="ResourceSensorsEquipments"
        options={{
          title: 'sensores'
        }}
        // initialParams={{
        //   placeId
        // }}
        component={Admin.ResourcesSensorEquipmentsScreen}
      />
    </Tab.Navigator>
  );
};

const ResourcesTab = (props) => {
  return (
    <HandleScreesToShow props={props} />
  )
};

export { ResourcesTab };
