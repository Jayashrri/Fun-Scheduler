import React from 'react';
import { View, Text } from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Analysis from './Pages/Analysis';
import Landing from './Pages/Landing';

import { MaterialCommunityIcons } from '@expo/vector-icons';

const TabBar = createBottomTabNavigator();

function Home() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
            <Text>Landing page</Text>
        </View>
    );
}

function Settings() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
            <Text>Settings page</Text>
        </View>
    );
}

function Stats() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
            <Text>Stats page</Text>
        </View>
    );
}

function Rewards() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
            <Text>Rewards page</Text>
        </View>
    );
}

function Tasks() {
    return (
        <View
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "100%"
            }}>
            <Text>Tasks page</Text>
        </View>
    );
}

function MainTabBarNavigator() {
    return (
        <TabBar.Navigator>
            <TabBar.Screen 
                name="Rewards" 
                component={Rewards} 
                options={{
                    tabBarLabel: 'Rewards',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="trophy" color={color} size={size} />
                    ),
                }}/>
            <TabBar.Screen 
                name="Stats" 
                component={Analysis} 
                options={{
                    tabBarLabel: 'Stats',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="chart-areaspline" color={color} size={size} />
                    ),
                }}/>
            <TabBar.Screen 
                name="Home" 
                component={Landing} 
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}/>
            <TabBar.Screen 
                name="Tasks" 
                component={Tasks} 
                options={{
                    tabBarLabel: 'Tasks',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="calendar-check" color={color} size={size} />
                    ),
                }}/>
            <TabBar.Screen 
                name="Settings" 
                component={Settings} 
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="account-settings" color={color} size={size} />
                    ),
                }}/>
        </TabBar.Navigator>
    );
}

export default MainTabBarNavigator;
