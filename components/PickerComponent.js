import React from "react";
import { Picker } from "@react-native-community/picker";
import { StyleSheet, View } from "react-native";

export default function PickerComponent({ containerId, setContainerId }) {
  return (
    <View style={styles.pickerContainer}>
      <Picker
        mode="dropdown"
        selectedValue={containerId}
        onValueChange={(itemValue) => setContainerId(itemValue)}
      >
        <Picker.Item label="1" value={1} />
        <Picker.Item label="2" value={2} />
        <Picker.Item label="3" value={3} />
        <Picker.Item label="4" value={4} />
        <Picker.Item label="5" value={5} />
        <Picker.Item label="6" value={6} />
      </Picker>
    </View>
  );
}

const styles = StyleSheet.create({
  pickerContainer: {
    borderRadius: 13,
    height: 50,
    width: 120,
    backgroundColor: "#fff",
  },
  picker: {
    height: 50,
    width: 120,
  },
});
