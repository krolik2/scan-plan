import React, { useState } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { globalStyles } from "../styles/main";
import data from "../data";
import SearchBar from "../components/SearchBar";
import NavigationBar from "../components/NavigationBar";
import Header from "../components/Header";

export default function List({ navigation }) {
  const [filteredData, setFilteredData] = useState(data);

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <Header title="list" isHome={true} />
        <SearchBar data={data} setFilteredData={setFilteredData} />
        <FlatList
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Location Details", item)}
            >
              <View style={styles.listElement}>
                <Text style={globalStyles.listText}>{item.name}</Text>
                <Feather name="plus" size={22} />
              </View>
            </TouchableOpacity>
          )}
        />
        <NavigationBar />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  listElement: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 331,
    height: 46,
    backgroundColor: "#FFFFFF",
    marginBottom: 12,
    borderRadius: 13,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
