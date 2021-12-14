import React from "react";
import { Linking } from "react-native";
import { Text } from "react-native-paper";

import Page from "../Page"


export default function IconsPage() {
    return (
        <Page name="Icons">
            <Text
                onPress={() => Linking.openURL("https://materialdesignicons.com/")}>
                Vector Icons
            </Text>
        </Page>
    );
}
