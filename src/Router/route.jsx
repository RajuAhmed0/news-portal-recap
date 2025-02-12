import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";
import HomeMiddel from "../Components/HomeDetails/HomeMiddel/HomeMiddel";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
        children:[
            {
                path:'/:id',
                element:<HomeMiddel></HomeMiddel>,
                loader: async({params}) =>  fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
])