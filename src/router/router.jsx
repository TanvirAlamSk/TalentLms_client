import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard";
import Home from "../Pages/Home/Home";
import AllCourses from "../Pages/All-Courses/AllCourses";
import SinglePage from "../Pages/SinglePage/SinglePage";
import Payment from "../Pages/Payment/Payment";
import Login from "../Pages/Signinup/Login";
import SignUp from "../Pages/Signinup/SignUp";
import AddCourse from "../Pages/PrivatePage/AddCourse";
import ManageCourse from "../Pages/Course/ManageCourse";
import UpdateCourse from "../Pages/Course/UpdateCourse";
import MyCourse from "../Pages/Course/MyCourse";
import PrivateRouter from "./PrivateRouter";
import Content from "../Pages/Content/Content";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

export const router = createBrowserRouter([
    {
        path: "/", element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: ([
            {
                path: "/", element: <Home></Home>
            },
            {
                path: "/all-course", element: <AllCourses></AllCourses>
            },
            {
                path: "/courses/:id", element: <SinglePage></SinglePage>,
                loader: ({ params }) => fetch(`https://talentlms-server.onrender.com/courses/${params.id}`)
            },
            {
                path: "/payment/:id",
                element: <PrivateRouter><Payment></Payment></PrivateRouter>,
                loader: ({ params }) => fetch(`https://talentlms-server.onrender.com/courses/${params.id}`)
            },
            {
                path: "/login", element: <Login></Login>
            },
            {
                path: "/signup", element: <SignUp></SignUp>
            },
            {
                path: "/add-a-new-course", element: <PrivateRouter><AddCourse></AddCourse></PrivateRouter>
            },
            {
                path: "/manage-course", element: <PrivateRouter>
                    <ManageCourse></ManageCourse>
                </PrivateRouter>
            },
            {
                path: "/update-course/:id", element: <PrivateRouter>
                    <UpdateCourse></UpdateCourse>
                </PrivateRouter>,
                loader: ({ params }) => fetch(`https://talentlms-server.onrender.com/courses/${params.id}`)
            },
            {
                path: "/my-courses", element: <PrivateRouter>
                    <MyCourse></MyCourse>
                </PrivateRouter>
            },
            {
                path: "/content/:id", element: <Content></Content>,
                loader: ({ params }) => fetch(`https://talentlms-server.onrender.com/enroll-course/${params.id}`)
            }
        ])
    }
])