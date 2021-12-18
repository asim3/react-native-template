import React from "react";
import { Button, View, Text, TextInput } from 'react-native';

import styles from "./styles";
import ScreenBase from "../../components/ScreenBase"


export default function ProfileScreen({ navigation }) {
    return (
        <ScreenBase>

            <Text>Profile Screen</Text>

            <Text>Photo</Text>

            <Text>input First Name</Text>
            <Text>input Last Name</Text>

            <Text>input Email</Text>
            <Text>input Phone Number</Text>

            <Text>Done</Text>

        </ScreenBase>
    );
}
