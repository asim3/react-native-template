import React, { useState } from "react";
import { BottomNavigation } from "react-native-paper";

import URLs from "../../URLs";


export default function Views() {
    const [index, setIndex] = useState(2);

    const renderScene = BottomNavigation.SceneMap(URLs.pages);


    return (
        <BottomNavigation
            navigationState={{ index, routes: URLs.links }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
}
