import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Image
} from "react-native";
import { globalStyles } from "../styles/main";

export default function LocationDetails({ route, navigation }) {
  const { name } = route.params;
  const { url } = route.params;
  return (
    <View style={globalStyles.container}>
      <View>
        <Text style={globalStyles.title}>{name}</Text>
      </View>
      <View style={globalStyles.qrContainer}>
        <Image source={url}></Image>
      </View>
    </View>
  );
}
