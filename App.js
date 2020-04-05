import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";

import CartContextProvider from "./contexts/CartContext";
import MenuDrawer from "./routes/MenuDrawer";

const cacheFonts = () =>
  Font.loadAsync({
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf"),
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
