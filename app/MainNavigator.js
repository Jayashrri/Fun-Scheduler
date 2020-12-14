import React from 'react'

import {createStackNavigator} from '@react-navigation/stack';
import MainTabBarNavigator from './TabNavigator';
import Search from './Pages/Search';

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
        </Stack.Navigator>
    );
}

export default MainStackNavigator;