import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Profile from "../Screens/Profile"


const Stack = createNativeStackNavigator();

export default function HomeRoutes() {
    return (
        <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen name="Profile" component={Profile} />
        </Stack.Navigator>
    );
}
