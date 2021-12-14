import HomePage from "./components/HomePage"
import UserPage from "./components/UserPage"
import AddPage from "./components/AddPage"
import IconsPage from "./components/IconsPage"



export default {
    links: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'home', title: 'Recents', icon: 'home-outline' },
        { key: 'home', title: 'History', icon: 'history' },
        { key: 'about', title: 'About', icon: 'cog' },
        { key: 'add', title: 'Add', icon: 'plus' },
        { key: 'icons', title: 'Icons', icon: 'alert-circle' },
        { key: 'user', title: 'Users', icon: 'account' },
    ],
    pages: {
        home: HomePage,
        about: UserPage,
        user: UserPage,
        add: AddPage,
        icons: IconsPage,
    }
}
