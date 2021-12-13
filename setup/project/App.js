import React from 'react';
import { ScrollView, View, TextInput } from 'react-native';

import Header from "./components/Header"


export default function App() {
    return (
        <View style={{ flex: 1 }}>

            <Header />


            <ScrollView style={{ backgroundColor: "red", flex: 1, }}>

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
                <View style={{ backgroundColor: "gold", height: 100, }} />

            </ScrollView>


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

        </View>
    );
}
