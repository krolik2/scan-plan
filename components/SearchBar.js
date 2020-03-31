import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
  Image
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";

import data from '../data';

const renderSeparator = () => {
  return (
    <View
      style={{
        height: 1,
        width: "100%",
        backgroundColor: "#CED0CE",
      }}
    />
  );
};

export default function SearchBar() {
  const [filteredData, setFilteredData] = useState(data);
  const [qrCode, setQrCode] = useState('');
  const [imgVisible, setImgVisible] = useState(false)

  const searchFilter = userInput => {
    const codesData = data.filter(item => {
      const itemData = `${item.name.toUpperCase()}`;
      const userInputData = userInput.toUpperCase();

      return itemData.indexOf(userInputData) !== -1;
    });
    setFilteredData(codesData);
  };

  const pressHandler = url => {
    setImgVisible(true);
    setQrCode(url);
  }

  return (
    <>
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Search for location..."
          onChangeText={userInput => searchFilter(userInput)}
          onFocus={() => setImgVisible(false)}
        />
        <EvilIcons
          name="search"
          size={35}
          color="#fff"
          style={styles.searchIcon}
        />
      </View>
      <View style={styles.list}>
        <FlatList
          ItemSeparatorComponent={renderSeparator}
          data={filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => pressHandler(item.url)}>
              <Text style={styles.listItem}>{item.name}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
      <View style={styles.qrContainer}>
        {imgVisible ? (<Image style={styles.qr} source={qrCode}></Image>) : (null)}
      </View>
    </>
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
    color: '#fff'
  },
  searchIcon: {
    paddingRight: 10
  },
  list: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    flexDirection: 'row',
    justifyContent: "center",
  },
  listItem: {
    textAlign: 'center',
    fontFamily: "OpenSans-Regular",
    fontSize: 20,
    color: '#fff',
  },
  qrContainer: {
    marginTop: 10,
    flex: 1,
    alignItems: 'center'
  }
});
