import { createBrowserRouter } from "react-router-dom";
// import Main from "../layouts/Main";
import Home from "../pages/Home";
import About from "../pages/About";
import Dashboard from "../layouts/Dashboard";
import SingleCourse from "../pages/SingleCourse/SingleCourse";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import AllCourse from "../pages/AllCourse";
import ManajeMyCourse from "../pages/ManajeMyCourse";
import UpdateCourse from "../pages/UpdateCourse";
import MyCourse from "../pages/MyCourse";
import AddNewCourse from "../pages/AddNewCourse";
import Payment from "../pages/Payment";
import NotFound from "../pages/NotFound";
import PrivateRouter from "./PrivateRouter";

export const router = createBrowserRouter([
    {
        path: "/", element: <Dashboard></Dashboard>,
        errorElement: <NotFound></NotFound>,
        children: ([
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/about", element: <About></About>
            },
            {
                path: "/courses/:id", element: <SingleCourse></SingleCourse>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: "/all-course", element: <AllCourse></AllCourse>
            },
            {
                path: "/manage-course", element: <ManajeMyCourse></ManajeMyCourse>,
                loader: () => fetch("http://localhost:3000/courses")
            },
            {
                path: "/update-course/:id", element: <UpdateCourse></UpdateCourse>,
                loader: ({ params }) => fetch(`http://localhost:3000/courses?id=${params.id}`)
            },
            {
                path: "/my-courses", element: <MyCourse></MyCourse>,
                loader: () => fetch("http://localhost:3000/courses")
            },
            {
                path: "/add-a-new-course", element: <AddNewCourse></AddNewCourse>
            },
            {
                path: "/payment/:id", element: <PrivateRouter><Payment></Payment></PrivateRouter>,
                loader: ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`)
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <SignUp></SignUp>
            }
        ])
    }

])