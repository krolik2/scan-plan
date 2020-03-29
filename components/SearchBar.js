import React, { useState } from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

export default function SearchBar() {
  const [searchString, setSearchString] = useState(null);

  return (
    <View style={styles.searchBar}>
      <TextInput
        style={styles.input}
        placeholder="Search for location..."
        onChangeText={searchString => setSearchString(searchString)}
      />
      <EvilIcons
        name="search"
        size={30}
        color="#fff"
        style={styles.searchIcon}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
    borderRadius: 25,
    marginLeft: 15,
    marginRight: 15
  },
  input: {
    flex: 1,
    fontFamily: "OpenSans-Regular",
    fontSize: 15,
    margin: 10,
    width: 200,
    paddingLeft: 5
  },
  searchIcon: {
    paddingRight: 10
  }
});
