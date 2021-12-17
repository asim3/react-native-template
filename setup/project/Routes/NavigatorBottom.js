import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import URLs from "./URLs";
import Configuration from "../Configuration.json"


const Tab = createBottomTabNavigator();


export default function NavigatorBottom() {

    const get_screens = function () {
        return Configuration.bottom_navigator.screens.map(route => {
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


    return (
        <Tab.Navigator
            initialRouteName="Settings"
            screenOptions={Configuration.bottom_navigator.screen_options}>

            {get_screens()}

        </Tab.Navigator >
    );
}
