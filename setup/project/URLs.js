import HomePage from "./components/HomePage"
import UserPage from "./components/UserPage"
import AddPage from "./components/AddPage"
import IconsPage from "./components/IconsPage"



export default {
    links: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'about', title: 'About', icon: 'about' },
        { key: 'add', title: 'Add', icon: 'plus' },
        { key: 'icons', title: 'Icons', icon: 'history' },
        { key: 'user', title: 'Recents', icon: 'user' },
    ],
    pages: {
        home: HomePage,
        about: UserPage,
        user: UserPage,
        add: AddPage,
        icons: IconsPage,
    }
}
