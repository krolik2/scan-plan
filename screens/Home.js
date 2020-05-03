import React from "react";
import { View } from "react-native";

import { globalStyles } from "../styles/main";
import Cart from "../components/Cart";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Header title="cart" isHome={true} />
      <Cart />
    </View>
  );
}
