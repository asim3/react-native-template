import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import styles from "./styles"


export default function ScreenBase(props) {
    return (
        <View style={styles.container}>

            <KeyboardAwareScrollView>

                {props.children}

            </KeyboardAwareScrollView>

        </View>
    );
}
