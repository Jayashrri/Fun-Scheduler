import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import MainStackNavigator from "./app/Navigator";
import Search from "./app/Search";

export default function App() {
  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <Search/>
  );
}
