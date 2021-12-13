import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import styles from './styles'


export default function Header() {
    return (
        <View style={styles.root}>
            <SafeAreaView>
                <View style={styles.view}>
                    <Text>aaaa</Text>
                    <Avatar.Icon size={24} icon="folder" />
                    <Text>cccc</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}
