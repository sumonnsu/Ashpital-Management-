import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Doctors from "../pages/Doctors/Doctors";
import Shop from "../pages/Shop/Shop";
import Blog from "../pages/Blog/Blog";
import Contact from "../pages/Contact/Contact";
import Registration from "../pages/Registration/Registration";
import Login from "../pages/Login/Login";
import Home from "../pages/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/doctors',
                element: <Doctors></Doctors>
            },
            {
                path: '/shop',
                element: <Shop></Shop>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path:'/login',
                element: <Login></Login>
            }
        ]
    },
    
])
export default router;