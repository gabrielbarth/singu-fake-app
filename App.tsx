import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import EStyleSheet from 'react-native-extended-stylesheet';

import useCachedResources from './src/hooks/useCachedResources';
import Navigation from './src/navigation';
import { lightTheme } from './src/constants/theme/styleGuide';

// if.. light else dark
EStyleSheet.build(lightTheme);

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = 'light';

  if (!isLoadingComplete)
    return null;

  return (
    <>
      <Navigation colorScheme={colorScheme} />
      <StatusBar />
    </>
  );

}
