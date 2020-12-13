import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Analysis from '../Pages/Analysis';

const Stack = createStackNavigator();

function MainStackNavigator() {
    return (
        <Stack.Navigator>
           <Stack.Screen
            name="Analysis"
            component={Analysis}
            options={{ title: 'Analysis' }}
        /> 
        </Stack.Navigator>
    );
}

export default MainStackNavigator;
