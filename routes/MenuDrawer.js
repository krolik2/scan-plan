import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import About from "../screens/About";
import TabNavigation from "../routes/Tabs";
// import Home from '../screens/Home'

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Tabs">
      <Drawer.Screen name="Tabs" component={TabNavigation} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
