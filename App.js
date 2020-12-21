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

  Task.destroyAll();

  Task.create({
    id: 1,
    title: 'Do Homework',
    description: 'idk',
    duration: 1,
    deadline: '2020-12-24',
  });

  Task.create({
    id: 2,
    title: 'Call girlfriend',
    description: 'idk',
    duration: 1,
    deadline: '2020-12-23',
  });

  Task.create({
    id: 3,
    title: 'Work on Startup',
    description: 'idk',
    duration: 1,
    deadline: '2020-12-22',
  });
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
