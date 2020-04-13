import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../styles/main";

export default function SearchBar({ data, setFilteredData }) {
  const searchFilter = userInput => {
    const codesData = data.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const userInputData = userInput.toUpperCase();

      return itemData.indexOf(userInputData) !== -1;
    });
    setFilteredData(codesData);
  };

  return (
    <View style={styles.searchBar}>
    <Feather
        name="search"
        size={25}
        color="#fff"
        style={styles.searchIcon}
      />
      <View style={globalStyles.divider}></View>
      <TextInput
        style={styles.input}
        placeholder="Search for location..."
        onChangeText={userInput => searchFilter(userInput)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBar: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 13,
    marginTop: 10,
    marginBottom: 23,
    width: 330,
    height: 46,
    backgroundColor: '#323332',

  },
  input: {
    flex: 1,
    fontFamily: "BalooTamma2-Regular",
    color: '#fff',
    fontSize: 21,
    width: 200,
    paddingTop: 10,
    paddingLeft: 5,
  },
  searchIcon: {
    paddingLeft: 15
  }
});
