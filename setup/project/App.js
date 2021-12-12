import React from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform, ScrollView, View, TextInput } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';


export default function App() {
    return (
        <SafeAreaProvider style={styles.container}>

            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : "height"}
                style={styles.Keyboard_view}>


                <View style={{ backgroundColor: "tomato", height: 50 }} />


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
                    <TextInput placeholder="my placeholder" style={styles.input_1} />
                </View>

            </KeyboardAvoidingView>
        </SafeAreaProvider>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    Keyboard_view: {
        flex: 1,
    },
    input_1: {
        textAlign: "center",
        margin: 5,
        height: 40,
        fontSize: 18,
        backgroundColor: "#fff",
        borderColor: "green",
        borderWidth: 2,
        borderRadius: 7,
    },
});
