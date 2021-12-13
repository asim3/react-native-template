import HomePage from "./components/HomePage"
import UserPage from "./components/UserPage"
import AddPage from "./components/AddPage"



export default {
    links: [
        { key: 'home', title: 'Home', icon: 'home' },
        { key: 'about', title: 'About', icon: 'about' },
        { key: 'add', title: 'Add', icon: 'plus' },
        { key: 'history', title: 'Recents', icon: 'history' },
        { key: 'user', title: 'Recents', icon: 'history' },
    ],
    pages: {
        home: HomePage,
        user: UserPage,
        add: AddPage,
    }
}
