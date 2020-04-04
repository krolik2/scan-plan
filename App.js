import "react-native-gesture-handler";
import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { NavigationContainer } from "@react-navigation/native";
import CartContextProvider from './contexts/CartContext';

import HomeStack from './routes/HomeStack';
import MenuDrawer from "./routes/MenuDrawer";
// import Header from "./components/Header";
// import SearchBar from "./components/SearchBar";

const cacheFonts = () => Font.loadAsync({
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
    "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf")
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


  // if (fontsLoaded) {
  //   return (
  //     <TouchableWithoutFeedback
  //       onPress={() => {
  //         Keyboard.dismiss();
  //       }}
  //     >
  //       <View style={styles.container}>
  //         <Header />
  //         <View style={styles.body}>
  //           <SearchBar />
  //         </View>
  //       </View>
  //     </TouchableWithoutFeedback>
  //   );
  // } else {
  //   return (
  //     <AppLoading
  //       startAsync={cacheFonts}
  //       onFinish={() => setFontsLoaded(true)}
  //     />
  //   );
  // }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#4C5454"
//   },
//   body: {
//     flex: 1,
//     paddingTop: 30
//   }
// });
