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
  Picker,
} from "react-native";
import { globalStyles } from "../styles/main";
import { CartContext } from "../contexts/CartContext";
import ContainerPicker from "../components/ContainerPicker";
import ButtonComponent from "../components/ButtonComponent";

export default function LocationDetails({ route, navigation }) {
  const { name } = route.params;
  const { url } = route.params;
  const { containers, setContainers } = useContext(CartContext);
  const [containerId, setContainerId] = useState("");

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
        <View style={styles.body}>
          <View style={styles.qrContainer}>
            <Text style={styles.locationText}>{name}</Text>
            <Image source={url}></Image>
          </View>
          <View style={styles.controlsContainer}>
            <ContainerPicker />
            <ButtonComponent text="add location" onPress={isNumberInRange} />
          </View>
        </View>
        <Image
          style={styles.detailImg}
          source={require("../assets/img/details-img.png")}
        ></Image>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  qrContainer: {
    width: 175,
    height: 220,
    marginLeft: 4,
    marginRight: 6,
    alignItems: "center",
    justifyContent: "space-between",
  },
  controlsContainer: {
    marginTop: 44,
    height: 175,
    justifyContent: "space-between",
    alignItems: "center",
    marginLeft: 5,
  },
  locationText: {
    fontFamily: "BalooTamma2-Regular",
    fontSize: 25,
    color: "#fff",
  },
  body: {
    width: 331,
    marginTop: 10,
    marginBottom: 55,
    padding: 10,
    paddingBottom: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#323332",
    borderRadius: 13,
  },
});

{
  /* <View style={styles.body}>
          <View style={styles.containerNumberInputArea}>
            <Text style={globalStyles.title}>Enter container number (1 - 6):</Text>
            <View style={styles.containerNumber}>
              <TextInput
                style={styles.containerNumberInput}
                keyboardType="numeric"
                onChangeText={(data) => numbersOnly(data)}
                value={containerId}
              />
            </View>
          </View>
        </View> */
}
{
  /* <View>
          <Button
            title="assign location to container"
            onPress={() => isNumberInRange()}
          />
        </View> */
}

// containerNumber: {
//   backgroundColor: "#383E3E",
//   height: 40,
//   width: 40,
//   marginLeft: 10,
//   alignItems: "center",
// },
// containerNumberInput: {
//   fontSize: 25,
//   fontFamily: "BalooTamma2-Regular",
//   color: "#fff",
// },
// containerNumberInputArea: {
//   alignItems: "center",
//   flexDirection: "row",
//   justifyContent: "center",
// },
// body: {
//   flex: 2,
// },
