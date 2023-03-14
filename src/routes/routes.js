import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Login from "../pages/Auth/Login";
import Register from "../pages/Auth/Register";
import RequirAuth from "../pages/Auth/RequirAuth";
import About from "../pages/Main/About";
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
                element: <Home />
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
                element: <Profile />,
            },
            {
                path: "login",
                element: <Login />,
            },
            {
                path: "register",
                element: <Register />,
            },
        ]
    }
])

export default routes