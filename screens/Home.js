import React, { useState } from "react";
import {
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  FlatList,
  TouchableOpacity
} from "react-native";

import { globalStyles } from "../styles/main";
import data from "../data";
import SearchBar from "../components/SearchBar";
import Cart from '../components/Cart'

// const renderSeparator = () => {
//   return (
//     <View
//       style={{
//         height: 1,
//         width: "100%",
//         backgroundColor: "#CED0CE"
//       }}
//     />
//   );
// };

export default function Home({ navigation }) {
  const [filteredData, setFilteredData] = useState(data);
  

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <SearchBar data={data} setFilteredData={setFilteredData} />
        <View style={globalStyles.list}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => navigation.navigate("Location Details", item)}
              >
                <Text style={globalStyles.listItem}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
        <Cart />
      </View>
    </TouchableWithoutFeedback>
  );
}
