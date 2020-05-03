import React, { useState, useContext } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  Image,
  Button,
  TextInput,
  Alert,
} from "react-native";
import { globalStyles } from "../styles/main";
import { CartContext } from "../contexts/CartContext";
import PickerComponent from "../components/PickerComponent";
import ButtonComponent from "../components/ButtonComponent";
import Header from "../components/Header";

export default function LocationDetails({ route, navigation }) {
  const { name } = route.params;
  const { url } = route.params;
  const { containers, setContainers } = useContext(CartContext);
  const [containerId, setContainerId] = useState(1);

  const moveToHomeScreen = () => {
    navigation.goBack();
  };

  const numbersOnly = (data) => {
    return setContainerId(data.replace(/[^0-9]/gi, ""));
  };

  const isNumberInRange = () => {
    const number = parseInt(containerId);
    return number > 0 && number <= 6 ? checkIfIdTaken() : numberNotInRange();
  };

  const ascendingOrder = (a, b) => {
    return a.id - b.id;
  };

  const getContainerData = () => {
    setContainers(
      [...containers, { name, id: parseInt(containerId) }].sort(ascendingOrder)
    );
  };

  const checkIfIdTaken = () => {
    return containers.some((el) => el.id === parseInt(containerId))
      ? Alert.alert(
          "Container already exists!",
          `Container with id: ${containerId} has already been added. Please choose different number`,
          [{ text: "okay", onPress: () => setContainerId(null) }]
        )
      : addNewContainer();
  };

  const addNewContainer = () => {
    getContainerData();
    moveToHomeScreen();
  };

  const numberNotInRange = () => {
    Alert.alert(
      "Incorrect Input!",
      "Please use numbers only, between 1 and 6.",
      [{ text: "okay", onPress: () => setContainerId(null) }]
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}
    >
      <View style={globalStyles.container}>
        <Header title="List Details" isHome={false} navigation={navigation} />
        <View style={styles.body}>
          <View style={styles.qrContainer}>
            <Text style={styles.locationText}>{name}</Text>
            <Image style={styles.imageBorder} source={url}></Image>
          </View>
          <View style={styles.controlsContainer}>
            <PickerComponent
              containerId={containerId}
              setContainerId={setContainerId}
            />
            <ButtonComponent text="add location" onPress={isNumberInRange} />
          </View>
        </View>
        <Image
          style={styles.detailImg}
          source={require("../assets/img/details.png")}
        ></Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    width: 175,
    height: 220,
    marginLeft: 3,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  controlsContainer: {
    marginTop: 44,
    height: 175,
    justifyContent: "space-between",
    alignItems: "center",
    margin: 5,
  },
  locationText: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 25,
    color: "#fff",
  },
  body: {
    width: 331,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    flexDirection: "row",
    backgroundColor: "#323332",
    borderRadius: 13,
  },
  imageBorder: {
    borderRadius: 13,
  },
  detailImg: {
    transform: [{ scale: 0.8 }],
  },
});
