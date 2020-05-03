import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { globalStyles } from "../styles/main";

export default function EmptyCart() {
  return (
    <View style={globalStyles.container}>
      <Image source={require("../assets/img/empty-cart.png")} />
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.title}>
          {`Your cart is empty,
add items from the list.`}
        </Text>
      </View>
    </View>
  );
}
