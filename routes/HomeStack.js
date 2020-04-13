import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home";
import List from '../screens/List';
import LocationDetails from "../screens/LocationDetails";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Locations List" component={List} />
      <Stack.Screen name="Location Details" component={LocationDetails} />
    </Stack.Navigator>
  );
}
