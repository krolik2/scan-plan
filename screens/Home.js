import React from "react";
import { View, Image } from "react-native";

import { globalStyles } from "../styles/main";
import Cart from "../components/Cart";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <Header title="cart" isHome={true} />
      <Image source={require("../assets/img/cart-img.png")}></Image>
      <Cart />
      {/* <NavigationBar /> */}
    </View>
  );
}
