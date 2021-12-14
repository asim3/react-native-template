import React from 'react';
import { Text, Linking } from 'react-native';

import Page from "../Page"


export default function IconsPage() {
    return (
        <Page name="Icons">
            <Text
                style={{ color: "#fff" }}
                onPress={() => Linking.openURL("https://materialdesignicons.com/")}>
                Vector Icons
            </Text>
        </Page>
    );
}
