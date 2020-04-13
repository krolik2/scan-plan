import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import CartContextProvider from "./contexts/CartContext";
import MenuDrawer from "./routes/MenuDrawer";

const cacheFonts = () =>
  Font.loadAsync({
    "BalooTamma2-SemiBold": require("./assets/fonts/BalooTamma2-SemiBold.ttf"),
    "BalooTamma2-Regular": require("./assets/fonts/BalooTamma2-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (fontsLoaded) {
    return (
      <CartContextProvider>
        <NavigationContainer>
          <MenuDrawer />
        </NavigationContainer>
      </CartContextProvider>
    );
  } else {
    return (
      <AppLoading
        startAsync={cacheFonts}
        onFinish={() => setFontsLoaded(true)}
      />
    );
  }
}
