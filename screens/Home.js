import React, { useState } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  Image
} from "react-native";

import { globalStyles } from "../styles/main";
import data from "../data";
import SearchBar from "../components/SearchBar";
import Cart from "../components/Cart";
import List from "./List";
import NavigationBar from '../components/NavigationBar'

export default function Home() {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.headerText}>Cart</Text>
      </View>
      <Image source={require('../assets/img/cart-img.png')}></Image>
      <Cart />
      <NavigationBar />
    </View>
  );
}
