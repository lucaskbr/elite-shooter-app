import React, { useContext, useEffect } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { PlacesProvider, PlacesContext } from '@contexts/places/PlacesContext';

import { Admin } from '@screens/Admin';

import { View, Text } from "react-native";
import { NoPlaceForUser } from '../../components';

const Tab = createMaterialTopTabNavigator();

const HandleScreesToShow = () => {
  const { isLoading, places, handlePlaces } = useContext(PlacesContext);

  useEffect(() => {
    (async () => {
      await handlePlaces({ isActive: true });
    })();
  }, []);

  if (isLoading) {
    return <></>;
  }

  if (!places.length) {
    return <NoPlaceForUser />
  }

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
      {places.map((place) => (
        <Tab.Screen
          key={`${place._id}`}
          name={`${place.name}`}
          component={Admin.HomeScreen}
          initialParams={{ placeId: place._id }}
        />
      ))}
    </Tab.Navigator>
  );
};

const AdminPlacesTab = () => (
  <PlacesProvider>
    <HandleScreesToShow />
  </PlacesProvider>
);

export { AdminPlacesTab };
