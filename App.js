import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainTabBarNavigator from "./app/TabNavigator";
import MainStackNavigator from "./app/MainNavigator";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <Search/>
  );
}
