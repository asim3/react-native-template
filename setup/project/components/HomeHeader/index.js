import React from 'react';
import { View, Text } from 'react-native';
import { Header } from 'react-native-elements';


export default function HomeHeader() {
    return <Header
        placement="left"
        leftComponent={{ icon: 'menu', color: '#fff' }}
        centerComponent={{ text: 'MY TITLE', style: { color: '#fff' } }}
        rightComponent={{ icon: 'home', color: '#fff' }} />;
}
