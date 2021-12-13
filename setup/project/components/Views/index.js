import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';

import AddView from "../AddView"
import HomeView from "../HomeView"


const RecentsRoute = () => <Text>Recents</Text>;

const MyComponent = () => {
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'add', title: 'Add', icon: 'plus' },
        { key: 'recents', title: 'Recents', icon: 'history' },
    ]);

    const renderScene = BottomNavigation.SceneMap({
        home: HomeView,
        add: AddView,
        recents: RecentsRoute,
    });

    return (
        <BottomNavigation
            navigationState={{ index, routes }}
            onIndexChange={setIndex}
            renderScene={renderScene}
        />
    );
};

export default MyComponent;
