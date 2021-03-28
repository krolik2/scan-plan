import "react-native-gesture-handler";
import React, { useState } from "react";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";

import CartContextProvider from "./contexts/CartContext";
import MenuDrawer from "./routes/MenuDrawer";
import { globalStyles } from "./styles/main";

const cacheFonts = async () =>
  Font.loadAsync({
    "BalooTamma2-SemiBold": require("./assets/fonts/BalooTamma2-SemiBold.ttf"),
    "BalooTamma2-Regular": require("./assets/fonts/BalooTamma2-Regular.ttf"),
  });

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={cacheFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={(err) => console.warn(err)}
      />
    );
  } else {
    return (
      <View style={globalStyles.AndroidSafeArea}>
        <CartContextProvider>
          <NavigationContainer>
            <MenuDrawer />
          </NavigationContainer>
        </CartContextProvider>
      </View>
    );
  }
}
