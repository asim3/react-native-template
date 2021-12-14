import React from "react";
import { Appbar } from "react-native-paper";
import styles from "./styles"


export default function Header({ title, home_link, back_link, children }) {
    return (
        <Appbar.Header>

            {back_link ? <Appbar.BackAction onPress={back_link} /> : null}

            <Appbar.Content title={title} subtitle={title} />

            {home_link ? <Appbar.Action icon="home" onPress={home_link} /> : null}

            <Appbar.Action icon="magnify" onPress={() => { }} />

            <Appbar.Action icon="dots-vertical" onPress={() => { }} />

        </Appbar.Header>
    );
}
