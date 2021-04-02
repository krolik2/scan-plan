import "react-native-gesture-handler";
import React from "react";
import AppLoading from "expo-app-loading";
import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useFonts } from "expo-font";

import CartContextProvider from "./contexts/CartContext";
import MenuDrawer from "./routes/MenuDrawer";
import { globalStyles } from "./styles/main";

export default function App() {
  let [fontsLoaded] = useFonts({
    "BalooTamma2-SemiBold": require("./assets/fonts/BalooTamma2-SemiBold.ttf"),
    "BalooTamma2-Regular": require("./assets/fonts/BalooTamma2-Regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
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
