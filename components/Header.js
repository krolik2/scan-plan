import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header({ title, isHome, navigation }) {
  return (
    <View style={styles.header}>
      {isHome ? null : (
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <View style={styles.backBtn}>
            <Ionicons name="md-arrow-round-back" size={30} />
          </View>
        </TouchableOpacity>
      )}
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    height: 80,
    width: 331,
    marginTop: 20,
    paddingTop: 20,
    backgroundColor: "#f4f4f4",
  },
  headerText: {
    color: "#323332",
    fontSize: 30,
    fontFamily: "BalooTamma2-SemiBold",
    textTransform: "capitalize",
  },
  backBtn: {
    marginRight: 20,
  },
});
