import React from 'react';
import { SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, View, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import HomeHeader from "./components/HomeHeader"


export default function App() {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }}>

                <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === "ios" ? "padding" : "height"}>

                    <HomeHeader />


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

                </KeyboardAvoidingView>
            </SafeAreaView>
        </SafeAreaProvider>
    );
}
