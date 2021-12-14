import HomePage from "./HomePage"
import UserPage from "./UserPage"
import AddPage from "./AddPage"
import IconsPage from "./IconsPage"



export default {

    links: [
        { key: "home", title: "Home", icon: "home", color: "#009688" },
        { key: "home", title: "Recents", icon: "home-outline", color: "#272727" },
        { key: "home", title: "History", icon: "history", color: "#272727" },
        { key: "about", title: "About", icon: "cog", color: "#272727" },
        { key: "add", title: "Add", icon: "plus", color: "#272727" },
        { key: "icons", title: "Icons", icon: "alert-circle", color: "gold" },
        { key: "user", title: "Users", icon: "account", color: "dodgerblue" },
    ],

    pages: {
        home: HomePage,
        about: UserPage,
        user: UserPage,
        add: AddPage,
        icons: IconsPage,
    }
}
