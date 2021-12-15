import React from "react";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import HomeRoutes from "./Home"
import DetailsRoutes from "./Details"
import IconsPage from "../Screens/IconsPage"
import HomeScreen from "../Screens/Home"
import UserRoutes from "./User"


const Tab = createMaterialBottomTabNavigator();


export default function NavigatorBottom() {
    return (
        <Tab.Navigator
            initialRouteName="Settings"
            activeColor="#fff"
            inactiveColor="#555">

            <Tab.Screen
                name="Home"
                component={HomeRoutes}
                options={{
                    title: "Home",
                    tabBarIcon: "home",
                    tabBarColor: "#009688"
                }}
            />

            <Tab.Screen
                name="Details"
                component={DetailsRoutes}
                options={{
                    title: "Details",
                    tabBarIcon: "history",
                    tabBarColor: "#272727"
                }}
            />

            <Tab.Screen
                name="Settings"
                component={IconsPage}
                options={{
                    title: "Settings",
                    tabBarIcon: "plus",
                    tabBarColor: "#272727"
                }}
            />

            <Tab.Screen
                name="Home2"
                component={HomeScreen}
                options={{
                    title: "Home Screen",
                    tabBarIcon: "cog",
                    tabBarColor: "gold"
                }}
            />

            <Tab.Screen
                name="Navigator 2"
                component={UserRoutes}
                options={{
                    title: "Navigator 2",
                    tabBarIcon: "account",
                    tabBarColor: "dodgerblue"
                }}
            />

        </Tab.Navigator>
    );
}
