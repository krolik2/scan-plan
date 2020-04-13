import React from "react";
import { StyleSheet, View } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavigationBar() {
  return (
    <View style={styles.navigationBarContainer}>
      <View style={styles.iconsContainer}>
        <Feather name="menu" size={20} color="#fff" style={styles.menuIcon} />
        <View style={styles.divider}></View>
        <View style={styles.placeHolder}></View>
        <Feather
          name="shopping-cart"
          size={20}
          color="#fff"
          style={styles.cartIcon}
        />
        <Feather name="list" size={20} color="#fff" style={styles.listIcon} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  navigationBarContainer: {
    width: 331,
    height: 69,
    borderRadius: 13,
    backgroundColor: "#323332",
  },
  iconsContainer: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  menuIcon: {
    flex: 1,
  },
  cartIcon: {
    flex: 2,
  },
  listIcon: {
    flex: 1,
  },
  placeHolder: {
      flex: 2
  },
  divider: {
    borderLeftWidth: 1,
    borderLeftColor: "#707070",
    height: 23,
    marginRight: 8,
  },
});
