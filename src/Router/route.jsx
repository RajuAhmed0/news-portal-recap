import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../Components/Home/Home";
import HomeMiddel from "../Components/HomeDetails/HomeMiddel/HomeMiddel";
import DetailsInfo from "../Components/DetailsInfo/DetailsInfo";
import Signin from "../Components/SignIn/Signin";
import Regiser from "../Components/Registar/Regiser";
import PrivateRoute from "./PrivateRoute";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path: '/:id',
                element: <HomeMiddel></HomeMiddel>,
                loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            },
            {
                path: "/",
                element: <Navigate to="/01" />,  // Redirect to default ID
            },
        ]
    },
    {
        path: "/about",
        element: <h1>web about</h1>
    },
    {
        path: "/career",
        element: <h1>web career</h1>
    },
    {
        path: "/newsDetails/:id",
        element: <PrivateRoute><DetailsInfo></DetailsInfo></PrivateRoute>
    },
    {
        path: "/signin",
        element: <Signin></Signin>
    },
    {
        path: "/register",
        element: <Regiser></Regiser>
    }
])