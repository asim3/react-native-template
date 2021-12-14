import React from "react";
import { Button, View, Text } from "react-native";

import Screen from "../Base";


export default function HomeScreen(props) {
    return (
        <Screen
            home_link={() => props.jumpTo('user')}
            back_link={() => props.jumpTo('user')}
            title="Home Title">


            <Text>Home Screen</Text>

            <Button title="User" onPress={() => props.jumpTo('user')} />

        </Screen>
    );
}
