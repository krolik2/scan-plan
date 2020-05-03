import React from "react";
import { View, Text, Image } from "react-native";
import { globalStyles } from "../styles/main";
import Header from "../components/Header";
import { TouchableHighlight } from "react-native-gesture-handler";
import { Linking } from "expo";

import ButtonComponent from "../components/ButtonComponent";

export default function About({ navigation }) {
  return (
    <View style={globalStyles.container}>
      <Header title="about" isHome={true} />
      <Image source={require("../assets/img/about.png")} />
      <View style={globalStyles.textContainer}>
        <Text style={globalStyles.subTitle}>
          {`Scan Plan - app designed and coded with love
by Mateusz Królikowski.`}
        </Text>
        <Text style={globalStyles.listText}>
          Bugs, feedback, ideas please send to:
        </Text>
        <TouchableHighlight
          onPress={() =>
            Linking.openURL(
              "mailto:mailto@krolikmat@gmail.com?subject=scan-plan"
            )
          }
        >
          <Text style={globalStyles.link}>krolikmat@gmail.com</Text>
        </TouchableHighlight>
        <Text style={globalStyles.listText}>
          Check out my other projects here:
        </Text>
        <TouchableHighlight
          onPress={() => Linking.openURL("https://github.com/krolik2")}
        >
          <Text style={globalStyles.link}>https://github.com/krolik2</Text>
        </TouchableHighlight>
      </View>
      <ButtonComponent
        text="open menu"
        onPress={() => navigation.openDrawer()}
      />
    </View>
  );
}
