import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { NavigationContainer } from "@react-navigation/native";

import Views from "./components/Views"
import Theme from "./Theme"


export default function App() {
    return (
        <PaperProvider theme={Theme}>
            <NavigationContainer>
                <Views />
            </NavigationContainer>
        </PaperProvider>
    );
}
