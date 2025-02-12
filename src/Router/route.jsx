import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import HomeMiddel from "../Components/HomeDetails/HomeMiddel/HomeMiddel";
import DetailsInfo from "../Components/DetailsInfo/DetailsInfo";
import Signin from "../Components/SignIn/Signin";
import Regiser from "../Components/Registar/Regiser";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path: '/:id',
                element: <HomeMiddel></HomeMiddel>,
                loader: async({params})=>fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/newsDetails/:id",
        element: <DetailsInfo></DetailsInfo>
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