import {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold, useFonts
} from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
// import * as SplashScreen from 'expo-splash-screen';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './global/styles/theme';
import { Dashboard } from './screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });

  if (!fontsLoaded) {
    // SplashScreen.preventAutoHideAsync();
    // SplashScreen.hideAsync();
    // return;
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
        <Dashboard /> 
    </ThemeProvider>
  )
}

