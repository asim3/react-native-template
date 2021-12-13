import React from 'react';
import { View, ScrollView, KeyboardAvoidingView, Platform } from 'react-native';

import Header from "../Header"


export default function IconsPage(props) {
    return (
        <View style={{ flex: 1 }}>

            <Header page_name={props.name} />

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={{ backgroundColor: "yellow", flex: 1, }}>

                <ScrollView style={{ backgroundColor: "red", flex: 1, }}>

                    {props.children}

                </ScrollView>

            </KeyboardAvoidingView>

        </View>
    );
}
