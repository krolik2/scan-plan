import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.navigationBarContainer}>
      <View style={styles.iconsContainer}>
        <TouchableOpacity
          style={styles.menuIcon}
          onPress={() => navigation.openDrawer()}
        >
          <Feather name="menu" size={20} color="#fff" />
        </TouchableOpacity>
        <View style={styles.divider}></View>
        <View style={styles.placeHolder}></View>
        <TouchableOpacity
          style={styles.cartIcon}
          onPress={() => navigation.navigate("Cart")}
        >
          <Feather name="shopping-cart" size={20} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.listIcon}
          onPress={() => navigation.navigate("List")}
        >
          <Feather name="list" size={20} color="#fff" />
        </TouchableOpacity>
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
    position: "absolute",
    bottom: 0,
    left: "50%",
    marginLeft: -165,
    marginBottom: 16,
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
    flex: 2,
  },
  divider: {
    borderLeftWidth: 1,
    borderLeftColor: "#707070",
    height: 23,
    marginRight: 8,
  },
});
