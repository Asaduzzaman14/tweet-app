import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RequirAuth from "../pages/Auth/RequirAuth";
import About from "../pages/Main/About";
import Admins from "../pages/Main/Admins";
import AllTweet from "../pages/Main/AllTweet";
import AllUsers from "../pages/Main/AllUsers";
import Blog from "../pages/Main/Blog";
import Home from "../pages/Main/Home";
import Profile from "../pages/Main/Profile";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: (
                    <RequirAuth>
                        <Home />
                    </RequirAuth>
                ),
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "users",
                element: <AllUsers />,
            },
            {
                path: "blog",
                element: (
                    <RequirAuth>
                        <Blog />
                    </RequirAuth>
                ),
            },
            {
                path: "profile",
                element: (
                    <RequirAuth>
                        <Profile />,
                    </RequirAuth>
                ),

            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
            {
                path: "admins",
                element: <Admins />,
            },
            {
                path: "allTweet",
                element: <AllTweet />,
            },
        ]
    }
])

export default routes