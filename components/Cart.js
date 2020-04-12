import React, { useContext } from "react";
import { StyleSheet, View, Button, Text } from "react-native";

import { CartContext } from "../contexts/CartContext";
import { globalStyles } from "../styles/main";
import CartItem from "../components/CartItem";

export default function Cart() {
  const { containers, setContainers } = useContext(CartContext);

  const clearCart = () => {
    setContainers([]);
  };

  return containers.length > 0 ? (
    <View style={globalStyles.container}>
      <View style={styles.cartsContainer}>
        {containers.map((container) => {
          return <CartItem container={container} key={container.id} />;
        })}
      </View>
      <Button title="clear cart" onPress={() => clearCart()} />
    </View>
  ) : (
    <View style={globalStyles.container}>
      <View style={styles.cartsContainer}>
        <Text style={globalStyles.title}>
          Your cart is empty, add items from the list.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartsContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-evenly",
  },
});
