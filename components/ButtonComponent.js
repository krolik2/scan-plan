import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";

export default function ButtonComponent({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#54FF31",
    borderRadius: 13,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  buttonText: {
    color: "#323332",
    fontFamily: "BalooTamma2-SemiBold",
    fontSize: 15,
    textTransform: "uppercase",
    textAlign: "center",
  },
});
