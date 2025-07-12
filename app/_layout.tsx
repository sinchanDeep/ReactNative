import 'react-native-get-random-values';
import { Stack } from "expo-router";
import './globals.css';
import { getRandomValues } from 'expo-crypto';

if (typeof global.crypto === 'undefined') {
  // @ts-ignore
  global.crypto = {
    getRandomValues,
  };
}

export default function RootLayout() {
  return <Stack />;
}
