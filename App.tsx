import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import Main from './src/screens/Home';
import AppNavigation from './src';

const Stack = createNativeStackNavigator();

function App() {
  return <AppNavigation />;
}

export default App;
