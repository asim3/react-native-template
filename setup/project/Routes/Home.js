import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../Screens/NewHome"
import DetailsScreen from "../Screens/NewDetails"
import SettingsScreen from "../Screens/Settings"


const Stack = createNativeStackNavigator();

export default function HomeRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
            <Stack.Screen name="Settings" component={SettingsScreen} />
        </Stack.Navigator>
    );
}
