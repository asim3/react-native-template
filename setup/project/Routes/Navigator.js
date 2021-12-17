import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import AllRoutes from "./AllRoutes";
import Configuration from "../Configuration.json"


const Tab = createBottomTabNavigator();


export default function Navigator() {

    const get_screens = function () {
        return Configuration.routes.map(route => {
            return (
                <Tab.Screen
                    name={AllRoutes[route].name}
                    component={AllRoutes[route].component}
                    options={{
                        title: AllRoutes[route].name,
                        tabBarIcon: AllRoutes[route].icon,
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
