import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import About from "../screens/About";
import TabNavigation from "../routes/Tabs";

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Home" component={TabNavigation} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
