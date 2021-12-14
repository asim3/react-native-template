import React from 'react';
import { Appbar } from 'react-native-paper';
import styles from './styles'


export default function Header(props) {
    return (
        <Appbar.Header>

            <Appbar.BackAction onPress={() => { }} />

            <Appbar.Content title={props.page_name} subtitle={props.page_name} />

            <Appbar.Action icon="magnify" onPress={() => { }} />

            <Appbar.Action icon="dots-vertical" onPress={() => { }} />

        </Appbar.Header>
    );
}
