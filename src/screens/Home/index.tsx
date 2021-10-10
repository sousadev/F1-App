import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { colors } from '../../theme/MainTheme/colors';
import { TextF1 } from '../../components/Texts';

export default function Main() {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor={colors.primary} />

      <TextF1 text="FONTE a" color={'red'} fontSize={40} />
      <Text>FONTE a</Text>
    </SafeAreaView>
  );
}
