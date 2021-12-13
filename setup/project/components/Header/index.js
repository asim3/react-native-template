import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';
import styles from './styles'


export default function Header(props) {
    return (
        <View style={styles.root}>
            <SafeAreaView>
                <View style={styles.view}>
                    <Text>aaaa</Text>
                    <Text>{props.page_name}</Text>
                    <Text>cccc</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}
