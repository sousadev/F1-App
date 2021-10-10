import React from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

import { Text, View } from 'react-native';

interface TextF1Props {
  text: string;
  fontSize?: number;
  color?: any;
}

export function TextF1(props: TextF1Props) {
  let [fontes] = useFonts({
    F1: require('../../../assets/fonts/Formula1-Regular.otf'),
  });
  const { text, fontSize, color } = props;
  if (!fontes) {
    return <AppLoading />;
  }

  return (
    <View>
      <Text
        style={{
          fontFamily: 'F1',
          fontSize: fontSize,
          color: color,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
