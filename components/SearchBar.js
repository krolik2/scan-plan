import React from "react";
import { StyleSheet, View, TextInput } from "react-native";
import { EvilIcons } from "@expo/vector-icons";

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
      <TextInput
        style={styles.input}
        placeholder="Search for location..."
        onChangeText={userInput => searchFilter(userInput)}
      />
      <EvilIcons
        name="search"
        size={35}
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
    fontSize: 20,
    margin: 10,
    width: 200,
    paddingLeft: 5,
    color: "#fff",
  },
  searchIcon: {
    paddingRight: 10
  }
});
