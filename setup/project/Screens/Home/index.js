import React from "react";
import { Button, View, Text } from "react-native";

import Screen from "../Base";


export default function HomeScreen(props) {
    return (
        <Screen
            home_link={() => props.navigation.jumpTo('Navigator 2')}
            back_link={() => props.navigation.jumpTo('Navigator 2')}
            title="Home Title">


            <Text>Home Screen</Text>

            <Button title="Navigator 2" onPress={() => props.navigation.jumpTo('Navigator 2')} />

        </Screen>
    );
}
