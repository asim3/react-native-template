import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import Screens from "./Screens"
import Theme from "./Theme"


export default function App() {
    return (
        <PaperProvider theme={Theme}>
            <NavigationContainer>
                <Screens />
            </NavigationContainer>
        </PaperProvider>
    );
}
