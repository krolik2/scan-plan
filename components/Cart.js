import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from "react-native";

import { globalStyles } from "../styles/main";
import { FontAwesome } from "@expo/vector-icons";

import { CartContext } from '../contexts/CartContext';

export default function Cart() {
    
  const { containers, setContainers } = useContext(CartContext)

  console.log(containers)

  return (
    <View style={globalStyles.container}>
      <View style={styles.cartsContainer}>
       {containers.map(container => {
        return( <View style={styles.cart} key={container.id}>
          <Text style={styles.cartNumber}>{container.id}</Text>
          <FontAwesome name="shopping-basket" style={styles.cartIcon} />
          <Text style={styles.cartLocation}>{container.name}</Text>
        </View>)
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartsContainer: {
    marginTop: 10,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  cart: {
    alignItems: "center",
    padding: 5
  },
  cartIcon: {
    color: "#fff",
    fontSize: 45
  },
  cartNumber: {
    fontFamily: "OpenSans-Regular",
    color: "lime",
    fontSize: 20
  },
  cartLocation: {
    fontFamily: "OpenSans-Regular",
    color: "#fff",
    fontSize: 15
  }
});
