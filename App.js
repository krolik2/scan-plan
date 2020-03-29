import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import * as Font from "expo-font";

import Header from "./components/Header";
import SearchBar from "./components/SearchBar";

export default function App() {
  const [locations, setLocation] = useState([
    { name: "BW-PAK-01", key: "1", url: './assets/qrcodes/bw-pak-01.svg' },
    { name: "BW-PAK-02", key: "2", url: './assets/qrcodes/bw-pak-02.svg' },
    { name: "BW-PAK-03", key: "3", url: './assets/qrcodes/bw-pak-03.svg' },
    { name: "BZO-3L-A0", key: "4", url: './assets/qrcodes/bzo-3l-a0.svg' },
    { name: "BZO-3L-A1", key: "5", url: './assets/qrcodes/bzo-3l-a1.svg' },
    { name: "BZO-3L-BRK", key: "6", url: './assets/qrcodes/bzo-3l-brk.svg' },
    { name: "BZO-3L-DR", key: "7", url: './assets/qrcodes/bzo-3l-dr.svg' },
    { name: "BZO-3L-LOD", key: "8", url: './assets/qrcodes/bzo-3l-lod.svg' },
    { name: "KOW-WE-01", key: "9", url: './assets/qrcodes/kow-we-01.svg' },
    { name: "KOW-WE-02", key: "10", url: './assets/qrcodes/kow-we-02.svg' },
    { name: "KOW-WE-03", key: "11", url: './assets/qrcodes/kow-we-03.svg' },
  ]);

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
      <View style={styles.container}>
        <Header />
        <View style={styles.body}>
          <SearchBar />
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
    flex: 1,
    paddingTop: 35
  },
  flex: 1,
  controlsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  }
});
