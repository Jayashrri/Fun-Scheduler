import "react-native-gesture-handler";
import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./app/MainNavigator";

import Dino from "./app/Models/Dino";
import Preferences from "./app/Models/Preferences";
import Session from "./app/Models/Session";
import Task from "./app/Models/Task";

export default function App() {
  const initializeDB = useCallback(async () => {
    await Task.dropTable();
    await Session.dropTable();
    await Preferences.dropTable();

    await Dino.createTable();
    await Preferences.createTable();
    await Session.createTable();
    await Task.createTable();
  });

  initializeDB();

  return (
    <NavigationContainer>
      <MainStackNavigator />
    </NavigationContainer>
    // <Search/>
  );
}
