import React from "react";
import { Button, View, Text } from 'react-native';


export default function NewDetailsScreen({ navigation }) {
    return (
        <View>
            <Text>New Details Screen</Text>
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
        </View>
    );
}
