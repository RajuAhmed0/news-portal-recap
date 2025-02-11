import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home";

export const route = createBrowserRouter([
    {
        path: "/",
        element: <Home></Home>,
    },
])