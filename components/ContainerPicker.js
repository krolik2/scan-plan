import React from "react";
import {
  StyleSheet,
  View,
  Picker
} from "react-native";
import { globalStyles } from "../styles/main";

export default function ContainerPicker() {
    return(
        <View style={styles.picker}>
            <Picker>
                <Picker.Item label='1' value={1}/>
                <Picker.Item label='2' value={2}/>
                <Picker.Item label='3' value={3}/>
                <Picker.Item label='4' value={4}/>
                <Picker.Item label='5' value={5}/>
                <Picker.Item label='6' value={6}/>
            </Picker>
        </View>

    )
}

const styles = StyleSheet.create({
    picker: {
        paddingLeft: 15, 
        backgroundColor: '#fff',
        borderRadius: 13,
        height: 50,
        width: 120,
    },
})