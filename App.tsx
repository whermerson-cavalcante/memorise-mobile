import React from "react";
import { ThemeProvider } from "styled-components";

import AppLoading from "expo-app-loading";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold,
} from "@expo-google-fonts/inter";

import { Register } from "./src/screens/Register";

import theme from "./src/global/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold,
  });

  if (fontsLoaded) {
    return (
      <ThemeProvider theme={theme}>
        <Register />
      </ThemeProvider>
    );
  } else {
    return <AppLoading />
  }
}
