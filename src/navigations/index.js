import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './Stack';
import { RankingTab } from './RankingTab';

const Navigations = () => (
  <NavigationContainer>
    <StackNavigation />
  </NavigationContainer>
);

export { Navigations };
