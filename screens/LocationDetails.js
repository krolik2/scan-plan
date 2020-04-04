import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Image,
  Button,
  TextInput
} from "react-native";
import { globalStyles } from "../styles/main";
import { CartContext } from '../contexts/CartContext';

export default function LocationDetails({ route, navigation }) {
  const { name } = route.params;
  const { url } = route.params;
  const { containers, setContainers } = useContext(CartContext)
  
  const [containerId, setContainerId] = useState();

  const moveToHomeScreen = () => {
    navigation.goBack();
  };

  const getContainerData = () => {
    setContainers([
      ...containers,
      {name, id:containerId}
    ]);
  }

  const callActions = () => {
    getContainerData();
    moveToHomeScreen();
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <View>
          <Text style={globalStyles.title}>{name}</Text>
        </View>
        <View style={globalStyles.qrContainer}>
          <Image source={url}></Image>
        </View>
        <View style={styles.body}>
          <View style={styles.containerNumberInputArea}>
            <Text style={globalStyles.title}>Enter container number:</Text>
            <View style={styles.containerNumber}>
              <TextInput
                style={styles.containerNumberInput}
                keyboardType="numeric"
                onChangeText={(id) => setContainerId(id)}
              />
            </View>
          </View>
        </View>
        <View>
          <Button
            title="assign location to container"
            onPress={() => callActions()}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  containerNumber: {
    backgroundColor: "#383E3E",
    height: 40,
    width: 40,
    marginLeft: 10,
    alignItems: "center"
  },
  containerNumberInput: {
    fontSize: 25,
    fontFamily: "OpenSans-Regular",
    color: "#fff"
  },
  containerNumberInputArea: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center"
  },
  body: {
    flex: 2
  }
});
