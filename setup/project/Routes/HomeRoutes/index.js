import React from "react";
import { Button, View, Text } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button
                title="Go to Details"
                onPress={() => navigation.navigate('Details')}
            />
        </View>
    );
}


function DetailsScreen({ navigation }) {
    return (
        <View>
            <Text>Details Screen</Text>
            <Button
                title="Go to Details... again"
                onPress={() => navigation.push('Details')}
            />
        </View>
    );
}



const Stack = createNativeStackNavigator();

export default function HomeRoutes() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}
