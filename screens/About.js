import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Keyboard,
  Text,
  TouchableWithoutFeedback
} from "react-native";
import { globalStyles } from '../styles/main'

export default function Homer() {
    return(
        <View style={globalStyles.container}>
            <Text>About</Text>
        </View>
    )
}