import React from "react";
import { Button, View, Text, TextInput } from 'react-native';
import ScreenBase from "../../components/ScreenBase"


export default function NewHomeScreen({ navigation }) {
    return (
        <ScreenBase>
            <Text>New Home Screen</Text>
            <Button
                title="Go to Home"
                onPress={() => navigation.push('Home')}
            />
            <Button
                title="Go to Details"
                onPress={() => navigation.push('Details')}
            />
            <Button
                title="Go to Settings"
                onPress={() => navigation.push('Settings')}
            />


            <View style={{ backgroundColor: "green", height: 100, }} />
            <View style={{ backgroundColor: "yellow", height: 100, }} />
            <View style={{ backgroundColor: "green", height: 100, }} />
            <View style={{ backgroundColor: "yellow", height: 100, }} />
            <View style={{ backgroundColor: "green", height: 100, }} />
            <View style={{ backgroundColor: "yellow", height: 100, }} />
            <View style={{ backgroundColor: "green", height: 100, }} />
            <View style={{ backgroundColor: "yellow", height: 100, }} />


            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />
            <View style={{ backgroundColor: "dodgerblue", height: 100, }} />
            <View style={{ backgroundColor: "gold", height: 100, }} />

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
            <View style={{ backgroundColor: "pink", height: 10, }} />

        </ScreenBase>
    );
}
