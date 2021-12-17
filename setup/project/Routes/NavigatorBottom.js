import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import URLs from "./URLs";
import Configuration from "../Configuration.json"


const Tab = createBottomTabNavigator();


function get_screens() {
    return Configuration.bottom_navigator.map(route => {
        return (
            <Tab.Screen
                name={URLs[route].name}
                component={URLs[route].component}
                options={{
                    title: URLs[route].name,
                    tabBarIcon: URLs[route].icon,
                }}
            />
        );
    });
}


export default function NavigatorBottom() {
    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#272727" },
                tabBarActiveTintColor: "#fff",
                tabBarInactiveTintColor: "#555",
            }}>

            {get_screens()}

        </Tab.Navigator >
    );
}
