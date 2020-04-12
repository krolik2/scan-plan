import React from "react";
import { StyleSheet, View, Text } from "react-native";

import { globalStyles } from "../styles/main";

export default function EmptyCart() {
  return (
    <View style={globalStyles.container}>
      <View style={styles.emptyCartContainer}>
        <Text style={globalStyles.title}>
          Your cart is empty, add items from the list.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  emptyCartContainer: {
    flex: 1,
    justifyContent: "center",
  },
});
