import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "../../components/Header"


export default function Page(props) {
    return (
        <View style={{ backgroundColor: "red", flex: 1 }}>

            <Header title={props.name} />


            <KeyboardAwareScrollView>

                {props.children}

            </KeyboardAwareScrollView>

        </View>
    );
}
