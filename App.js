import * as React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import {
  Exo2_100Thin,
  Exo2_200ExtraLight,
  Exo2_300Light,
  Exo2_400Regular,
  Exo2_500Medium,
  Exo2_600SemiBold,
  Exo2_700Bold,
  Exo2_800ExtraBold,
  Exo2_900Black,
  Exo2_100Thin_Italic,
  Exo2_200ExtraLight_Italic,
  Exo2_300Light_Italic,
  Exo2_400Regular_Italic,
  Exo2_500Medium_Italic,
  Exo2_600SemiBold_Italic,
  Exo2_700Bold_Italic,
  Exo2_800ExtraBold_Italic,
  Exo2_900Black_Italic,
} from '@expo-google-fonts/exo-2';
import { Navigations } from './src/navigations';

import { SafeAreaView } from 'react-native-safe-area-context';



import { createServer } from "miragejs"
import { homeMock } from './mocks/home';
import { rankingAllMock } from './mocks/rankingAll';
import { rankingYearlyMock } from './mocks/rankingYearly';
import { rankingMonthlyMock } from './mocks/rankingMonthly';
import { rankingWeeklyMock } from './mocks/rankingWeekly';
import { allActivitiesMock } from './mocks/allActivities';
import { listAllGunsToUse } from './mocks/listAllGunsToUse';

if (window.server) {
  server.shutdown()
}

window.server = createServer({
  routes() {
    this.get("/api/activities/lasts", () => homeMock.activities),
    this.get("/api/activities", () => allActivitiesMock, { timing: '1000' })
    this.get("/api/users", () => homeMock.user),
    this.get("/api/ranking/all", () => rankingAllMock, { timing: '200' })
    this.get("/api/ranking/yearly", () => rankingYearlyMock, { timing: '400' })
    this.get("/api/ranking/monthly", () => rankingMonthlyMock, { timing: '800' })
    this.get("/api/ranking/weekly", () => rankingWeeklyMock, { timing: '1000' })
    this.get("/api/guns/users", () => listAllGunsToUse.myGuns, { timing: '1000' })
    this.get("/api/guns/places", () => listAllGunsToUse.placeGuns, { timing: '1000' })
  }
})

// enableScreens();

export default function App() {
  const [fontsLoaded] = useFonts({
    antoutline: require('@ant-design/icons-react-native/fonts/antoutline.ttf'),
    antfill: require('@ant-design/icons-react-native/fonts/antfill.ttf'),
    Exo2_100Thin,
    Exo2_200ExtraLight,
    Exo2_300Light,
    Exo2_400Regular,
    Exo2_500Medium,
    Exo2_600SemiBold,
    Exo2_700Bold,
    Exo2_800ExtraBold,
    Exo2_900Black,
    Exo2_100Thin_Italic,
    Exo2_200ExtraLight_Italic,
    Exo2_300Light_Italic,
    Exo2_400Regular_Italic,
    Exo2_500Medium_Italic,
    Exo2_600SemiBold_Italic,
    Exo2_700Bold_Italic,
    Exo2_800ExtraBold_Italic,
    Exo2_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Navigations />
    </SafeAreaView>
  );
}
