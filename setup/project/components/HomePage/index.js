import React from "react";
import { View, TextInput } from "react-native";

import Page from "../Page"


export default function HomePage() {
    return (
        <Page name="Home">

            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />


            <View style={{ backgroundColor: "tomato", height: 50 }}>
                <TextInput placeholder="my placeholder" style={{
                    textAlign: "center",
                    margin: 5,
                    height: 40,
                    fontSize: 18,
                    backgroundColor: "#fff",
                    borderColor: "green",
                    borderWidth: 2,
                    borderRadius: 7,
                }} />
            </View>


            <View style={{ backgroundColor: "gold", height: 100, }} />

        </Page>
    );
}
