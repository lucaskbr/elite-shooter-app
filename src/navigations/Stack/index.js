import React, { useContext } from 'react';

import { createStackNavigator } from '@react-navigation/stack';

import { User } from '@screens/User';

import { Shared } from '@screens/Shared';

import { IsLoading } from '@components';

import { AuthContext } from '@contexts/auth/authContext';
import { Admin } from '@screens/Admin';
import { TabNavigation } from '../Tab';
import { ResourcesTab } from '../ResourcesTab';

const Stack = createStackNavigator();

const StackNavigation = (props) => {
  const { authenticated, isAdmin, loading } = useContext(AuthContext);

  const authRoutes = () => (isAdmin ? adminRoutes() : userRoutes());

  const userRoutes = () => (
    <>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen name="Aim" component={User.AimScreen} />
      <Stack.Screen name="ListGunsToUse" component={User.ListGunsToUseScreen} />
      <Stack.Screen name="AddGun" component={User.AddGunScreen} />
      <Stack.Screen
        name="ListAllActivities"
        component={User.ListAllActivitiesScreen}
      />
      <Stack.Screen
        name="ActivityDetail"
        component={User.ActivityDetailScreen}
      />
      <Stack.Screen name="Modality" component={User.ModalityScreen} />
    </>
  );

  const adminRoutes = () => (
    <>
      <Stack.Screen name="Home" component={TabNavigation} />
      <Stack.Screen
        name="Resources"
        component={ResourcesTab}
      />
      <Stack.Screen
        name="ShootingRangesDetails"
        component={Admin.ShootingRangesDetailsScreen}
      />
      <Stack.Screen
        name="ShootingRangesAdd"
        component={Admin.ShootingRangesAddScreen}
      />
      <Stack.Screen
        name="SensorEquipmentsAdd"
        component={Admin.SensorEquipmentsAddScreen}
      />
            <Stack.Screen
        name="GunsAdd"
        component={Admin.GunsAddScreen}
      />
    </>
  );

  const loginRoute = () => (
    <>
      <Stack.Screen name="Login" component={Shared.LoginScreen} />
      <Stack.Screen name="SingUp" component={Shared.SignUpScreen} />
    </>
  );

  if (loading) {
    return <IsLoading />;
  }

  return (
    <Stack.Navigator
      headerMode="none"
      mode="card"
      screenOptions={{
        title: '',
      }}
    >
      {authenticated ? authRoutes() : loginRoute()}
    </Stack.Navigator>
  );
};

export { StackNavigation };
