import React from "react";
import {
    MaterialCommunityIcons,
    MaterialIcons,
    Ionicons,
} from '@expo/vector-icons';

import HomeRoutes from "./Home"
import DetailsRoutes from "./Details"
import IconsPage from "../Screens/Home"
import HomeScreen from "../Screens/Settings"
import UserRoutes from "./User"


export default {
    Home: {
        name: "Home",
        component: HomeRoutes,
        icon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
        )
    },

    Details: {
        name: "Details",
        component: DetailsRoutes,
        icon: ({ color, size }) => (
            <MaterialCommunityIcons name="history" color={color} size={size} />
        )
    },

    Settings: {
        name: "Settings",
        component: IconsPage,
        icon: ({ color, size }) => (
            <MaterialIcons name="add" color={color} size={size} />
        )
    },

    Home2: {
        name: "Home2",
        component: HomeScreen,
        icon: ({ color, size }) => (
            <Ionicons name="settings-sharp" color={color} size={size} />
        )
    },

    User: {
        name: "User",
        component: UserRoutes,
        icon: ({ color, size }) => (
            <MaterialIcons name="account-circle" color={color} size={size} />
        )
    },
}
