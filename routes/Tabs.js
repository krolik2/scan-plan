import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import LocationsStack from "./LocationsStack";
import HomeStack from "./HomeStack";

const Tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Cart" component={HomeStack} />
      <Tab.Screen name="List" component={LocationsStack} />
    </Tab.Navigator>
  );
}
