import 'react-native-gesture-handler';
import React from 'react';
import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';
import { useFonts, Roboto_400Regular, Roboto_300Light } from '@expo-google-fonts/roboto';

import Navigation from './src/navigation';
import { lightTheme } from './src/constants/theme/styleGuide';

// if.. light else dark
EStyleSheet.build(lightTheme);

export default function App() {
  const colorScheme = 'light';

  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_300Light,
  });

  if (!fontsLoaded)
    return <AppLoading />;

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar backgroundColor="white" translucent={false} />
    </>
  );

}
