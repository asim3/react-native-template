import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import NavigatorBottom from "./Routes/NavigatorBottom"
import Theme from "./Theme"


export default function App() {
    return (
        <PaperProvider theme={Theme}>
            <NavigationContainer>
                <NavigatorBottom />
            </NavigationContainer>
        </PaperProvider>
    );
}
