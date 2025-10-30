import { createBrowserRouter } from "react-router";
import IndexLayout from "../layouts/IindexLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

export default function Router() {
    return createBrowserRouter([
        {
            path: "/auth",
            children: [
                {
                    path: "login",
                    element: <Login />,
                },
                {
                    path: "register",
                    element: <Register />,
                }
            ],
        },
        {
            path: "/",
            element: <IndexLayout />,
            children: [
                {
                    path: "",
                    element: <h1 className="text-3xl font-bold underline">Home</h1>,
                },
            ],
        },
        {
            path: "*",
            element: <h1 className="text-3xl font-bold underline">404</h1>,
        }
    ]);
}