import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";

const Stack = createStackNavigator();

const headerOption = () => ({
  headerShown: false,
});

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={headerOption} />
    </Stack.Navigator>
  );
}
