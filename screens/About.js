import React from "react";
import { View } from "react-native";
import { globalStyles } from "../styles/main";
import Header from "../components/Header";

export default function Homer() {
  return (
    <View style={globalStyles.container}>
      <Header title="about" isHome={true} />
    </View>
  );
}
