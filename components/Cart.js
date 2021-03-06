import React, { useContext } from "react";
import { StyleSheet, View, Image } from "react-native";

import { CartContext } from "../contexts/CartContext";
import { globalStyles } from "../styles/main";
import CartItem from "../components/CartItem";
import EmptyCart from "./EmptyCart";
import ButtonComponent from "./ButtonComponent";

export default function Cart() {
  const { containers, setContainers } = useContext(CartContext);

  const clearCart = () => {
    setContainers([]);
  };

  return containers.length > 0 ? (
    <View style={globalStyles.container}>
      <View style={styles.imgContainer}>
        <Image
          style={styles.cartImg}
          source={require("../assets/img/cart.png")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <ButtonComponent text="clear cart" onPress={clearCart} />
      </View>
      <View style={styles.cartsContainer}>
        {containers.map((container) => {
          return <CartItem container={container} key={container.id} />;
        })}
      </View>
    </View>
  ) : (
    <EmptyCart />
  );
}

const styles = StyleSheet.create({
  cartsContainer: {
    marginTop: 5,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  buttonContainer: {
    marginTop: 5,
  },
  cartImg: {
    alignSelf: "flex-start",
    height: 200,
    resizeMode: "contain",
    marginBottom: 15,
  },
});
