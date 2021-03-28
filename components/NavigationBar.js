import React from "react";
import { StyleSheet, View, TouchableOpacity, Keyboard } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function NavigationBar({ navigation }) {
  return (
    <View style={styles.navigationBarContainer}>
      <View style={styles.iconsContainer}>
        <View style={styles.menuWrapper}>
          <TouchableOpacity
            style={styles.menuIcon}
            onPress={() => navigation.openDrawer()}
          >
            <Feather name="menu" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
        <View style={styles.controlsWrapper}>
          <TouchableOpacity
            style={styles.cartIcon}
            onPress={() => navigation.navigate("Cart")}
          >
            <Feather name="shopping-cart" size={23} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.listIcon}
            onPress={() => navigation.navigate("List")}
          >
            <Feather name="list" size={23} color="#fff" />
          </TouchableOpacity>
        </View>
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
    paddingLeft: 30,
    paddingRight: 30,
  },
  iconsContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  menuWrapper: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    flex: 1,
    borderRightWidth: 1,
    borderColor: "#707070",
    height: 23,
    marginRight: 35,
  },
  controlsWrapper: {
    flex: 2,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
});
