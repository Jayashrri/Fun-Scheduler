import "react-native-gesture-handler";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./app/MainNavigator";

import Dino from "./app/Models/Dino";
import Preferences from "./app/Models/Preferences";
import Session from "./app/Models/Session";
import Task from "./app/Models/Task";

const initializeDB = () => {
  Dino.createTable();
  Preferences.createTable();
  Session.createTable();
  Task.createTable();
};

export default function App() {
  initializeDB();

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <Search/>
  );
}
