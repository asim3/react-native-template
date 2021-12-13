import React from 'react';
import { Text, Linking } from 'react-native';

import Page from "../Page"


export default function IconsPage() {
    return (
        <Page name="Icons">
            <Text
                style={{ color: "#fff" }}
                onPress={() => Linking.openURL("https://oblador.github.io/react-native-vector-icons/")}>
                Vector Icons
            </Text>
        </Page>
    );
}
