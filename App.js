import * as React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { AuthProvider } from '@contexts/auth/authContext';
import { ParamsProvider } from '@contexts/params/ParamsContext';

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


import {
  Poppins_100Thin,
  Poppins_100Thin_Italic,
  Poppins_200ExtraLight,
  Poppins_200ExtraLight_Italic,
  Poppins_300Light,
  Poppins_300Light_Italic,
  Poppins_400Regular,
  Poppins_400Regular_Italic,
  Poppins_500Medium,
  Poppins_500Medium_Italic,
  Poppins_600SemiBold,
  Poppins_600SemiBold_Italic,
  Poppins_700Bold,
  Poppins_700Bold_Italic,
  Poppins_800ExtraBold,
  Poppins_800ExtraBold_Italic,
  Poppins_900Black,
  Poppins_900Black_Italic,
} from '@expo-google-fonts/poppins';

import { SafeAreaView } from 'react-native-safe-area-context';

import { KeyboardAvoidingView, LogBox } from 'react-native';

import { Navigations } from './src/navigations';

import { socket } from './src/services/socketio'


LogBox.ignoreAllLogs(); // Ignore all log notifications




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
    Poppins_100Thin,
    Poppins_100Thin_Italic,
    Poppins_200ExtraLight,
    Poppins_200ExtraLight_Italic,
    Poppins_300Light,
    Poppins_300Light_Italic,
    Poppins_400Regular,
    Poppins_400Regular_Italic,
    Poppins_500Medium,
    Poppins_500Medium_Italic,
    Poppins_600SemiBold,
    Poppins_600SemiBold_Italic,
    Poppins_700Bold,
    Poppins_700Bold_Italic,
    Poppins_800ExtraBold,
    Poppins_800ExtraBold_Italic,
    Poppins_900Black,
    Poppins_900Black_Italic,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
        <AuthProvider>
          <ParamsProvider>
            <Navigations />
          </ParamsProvider>
        </AuthProvider>
    </SafeAreaView>
  );
}
