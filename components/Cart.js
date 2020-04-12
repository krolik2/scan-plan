import React, { useContext } from "react";
import { StyleSheet, View, Button } from "react-native";

import { CartContext } from "../contexts/CartContext";
import { globalStyles } from "../styles/main";
import CartItem from "../components/CartItem";
import EmptyCart from "./EmptyCart";

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
    <EmptyCart />
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
