import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as Font from "expo-font";

import Header from "./components/Header";
import { getProvidesAudioData } from "expo/build/AR";

export default function App() {
  const [locations, setLocation] = useState([
    { name: "BW-PAK-01", key: "1" },
    { name: "BW-PAK-02", key: "2" },
    { name: "BW-PAK-03", key: "3" },
    { name: "BZO-3L-A0", key: "4" },
    { name: "BZO-3L-A1", key: "5" },
    { name: "BZO-3L-BRK", key: "6" },
    { name: "BZO-3L-DR", key: "7" },
    { name: "BZO-3L-LOD", key: "8" },
    { name: "KOW-WE-01", key: "9" },
    { name: "KOW-WE-02", key: "10" },
    { name: "KOW-WE-03", key: "11" }
  ]);

  const [isFontLoaded, setFont] = useState(false);

  useEffect(() => {
    const cacheAssets = async () => {
      await Font.loadAsync({
        "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf")
      });
      setFont(true);
    };
    cacheAssets();
    console.log('hook run');
  }, [isFontLoaded]);

  if (isFontLoaded) {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <FlatList
            data={locations}
            renderItem={({ item }) => <Text>{item.name}</Text>}
          />
        </View>
        <View style={styles.controlsContainer}>
          <Button title="CLEAR" />
          <Button title="NEXT" />
        </View>
      </View>
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
    paddingTop: 80
  },
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
