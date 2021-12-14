import React from "react";
import { Button, View, Text } from "react-native";

import Screen from "../Base";


export default function DetailsScreen(props) {
    return (
        <Screen
            home_link={() => props.jumpTo('add')}
            back_link={() => props.jumpTo('add')}
            title="Details Title">


            <Text>Details Screen</Text>

            <Button title="Home" onPress={() => props.jumpTo('Home')} />

        </Screen>
    );
}
