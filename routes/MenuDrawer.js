import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import About from "../screens/About";
import HomeStack from "../routes/HomeStack";

const Drawer = createDrawerNavigator();

export default function MenuDrawer() {
  return (
    <Drawer.Navigator initialRouteName="Locations List">
      <Drawer.Screen name="Locations List" component={HomeStack} />
      <Drawer.Screen name="About" component={About} />
    </Drawer.Navigator>
  );
}
