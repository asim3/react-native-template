import React from "react";
import { Button, View, Text } from "react-native";

import Screen from "../Base";


export default function DetailsScreen(props) {
    return (
        <Screen
            home_link={() => props.navigation.jumpTo('Navigator 2')}
            back_link={() => props.navigation.jumpTo('Navigator 2')}
            title="Details Title">


            <Text>Details Screen</Text>

            <Button title="Home" onPress={() => props.navigation.jumpTo('Navigator 2')} />

        </Screen>
    );
}
