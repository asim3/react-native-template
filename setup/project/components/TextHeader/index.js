import React from "react";
import { Text } from "react-native-paper";
import styles from "./styles"


export default function TextHecader({ children }) {
    return (
        <Text style={styles.container}>

            {children}

        </Text>
    );
}
