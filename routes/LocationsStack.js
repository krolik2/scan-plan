import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import List from "../screens/List";
import LocationDetails from "../screens/LocationDetails";

const Stack = createStackNavigator();

const headerOption = () => ({
  headerShown: false,
});

export default function LocationsStack() {
  return (
    <Stack.Navigator initialRouteName="List">
      <Stack.Screen name="List" component={List} options={headerOption} />
      <Stack.Screen
        name="Location Details"
        component={LocationDetails}
        options={headerOption}
      />
    </Stack.Navigator>
  );
}
