import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export default function CartItem({ container }) {
  const { id, name } = container;

  return (
    <View style={styles.cart}>
      <Text style={styles.cartNumber}>{id}</Text>
      <FontAwesome name="shopping-basket" style={styles.cartIcon} />
      <Text style={styles.cartLocation}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  cart: {
    alignItems: "center",
    padding: 5,
  },
  cartIcon: {
    color: "#323332",
    fontSize: 45,
  },
  cartNumber: {
    fontFamily: "BalooTamma2-Regular",
    color: "#323332",
    fontSize: 20,
  },
  cartLocation: {
    fontFamily: "BalooTamma2-Regular",
    color: "#323332",
    fontSize: 15,
  },
});
