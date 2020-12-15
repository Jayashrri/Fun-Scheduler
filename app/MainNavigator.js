import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import MainTabBarNavigator from './TabNavigator';
import Search from './Pages/Search';
import Timer from './Pages/Timer';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Main"
                component={MainTabBarNavigator}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Search"
                component={Search}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Timer"
                component={Timer}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
}

export default MainStackNavigator;