import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import menu from "../assets/menu.png";

export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.menu}>
        <Image source={menu} ></Image>
      </View>
      <Text style={styles.title}>Scan Plan</Text>
      <View style={styles.helper}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 80,
    paddingTop: 20,
    backgroundColor: "#383E3E"
  },
  menu: {
    flex: 1,
    width: 37,
    paddingLeft: 15
  },
  title: {
    fontFamily: "OpenSans-ExtraBold",
    color: "#fff",
    fontSize: 25
  },
  helper: {
    flex: 1,
    paddingRight: 15
  }
});
