import React from "react";
import { createBrowserRouter } from "react-router";
import App from "./shared/views/App.jsx";
import { Home } from "./shared/views/home/Home.jsx";
import { LogIn } from "./authentication/views/LogIn/LogIn.jsx";
import { SignUp } from "./authentication/views/SignUp/SignUp.jsx";
import { Tasks } from "./tasks/views/Tasks/Tasks.jsx";
import { RequireAuth } from "./shared/adapters/RequireAuth.jsx";

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
                element: <LogIn />,
            },
            {
                path: "signup",
                element: <SignUp />,
            },
            {
                path: "tasks",
                element: (
                    <RequireAuth>
                        <Tasks />
                    </RequireAuth>
                ),
            },
        ],
    },
]);
