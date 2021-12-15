import React from "react";
import { View } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Header from "../../components/Header"


export default function Screen({ title, home_link, back_link, children }) {
    return (
        <View style={{ backgroundColor: "green", flex: 1 }}>

            <Header title={title} home_link={home_link} back_link={back_link} />


            <KeyboardAwareScrollView>

                {children}

            </KeyboardAwareScrollView>

        </View>
    );
}
