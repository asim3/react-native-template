import React from 'react';
import { Platform } from 'react-native';
import { Appbar } from 'react-native-paper';
import styles from './styles'


const MORE_ICON = Platform.OS === 'ios' ? 'dots-horizontal' : 'dots-vertical';


export default function Header(props) {
    return (
        <Appbar.Header>

            <Appbar.BackAction onPress={() => { }} />

            <Appbar.Content title={props.page_name} subtitle={props.page_name} />

            <Appbar.Action icon="magnify" onPress={() => { }} />

            <Appbar.Action icon={MORE_ICON} onPress={() => { }} />

        </Appbar.Header>
    );
}
