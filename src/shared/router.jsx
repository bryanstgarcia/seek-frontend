import React from "react";
import { createBrowserRouter } from "react-router";
import App from "./views/App.jsx";
import { Home } from "./views/home/Home.jsx";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "login",
                element: <Login />,
            },
            
        ],
    },
]);
