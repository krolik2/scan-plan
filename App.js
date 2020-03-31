import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList, Keyboard, TouchableWithoutFeedback } from "react-native";
import * as Font from "expo-font";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [isFontLoaded, setFont] = useState(false);

  useEffect(() => {
    const cacheAssets = async () => {
      await Font.loadAsync({
        "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
        "OpenSans-Regular": require("./assets/fonts/OpenSans-Regular.ttf")
      });
      setFont(true);
    };
    cacheAssets();
    console.log('hook run');
  }, [isFontLoaded]);

  if (isFontLoaded) {
    return (
      <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss()}}>
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <SearchBar />
        </View>
      </View>
      </TouchableWithoutFeedback>
    );
  } else {
    return (
      <View>
        <Text>Loading app...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4C5454',
  },
  body: {
    flex: 1,
    paddingTop: 30
  },
  flex: 1,
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
