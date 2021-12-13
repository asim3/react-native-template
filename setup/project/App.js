import React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';

import Views from "./components/Views"


export default function App() {
    return (
        <PaperProvider>
            <Views />
        </PaperProvider>
    );
}
