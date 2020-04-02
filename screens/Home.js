import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Button,
  FlatList,
  TouchableOpacity
} from "react-native";

import { globalStyles } from "../styles/main";
import data from "../data";

export default function Home({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <View style={globalStyles.list}>
        <FlatList
          keyExtractor={item => item.key}
          data={data}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => navigation.navigate("Location Details", item)}
            >
              <Text style={globalStyles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}
