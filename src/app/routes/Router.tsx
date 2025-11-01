import { createBrowserRouter } from "react-router";
import IndexLayout from "../layouts/IindexLayout";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import AuthGuard from "../guards/Auth";
import NotFound from "../shared/components/NotFound";

export default function Router() {
    return createBrowserRouter([
        {
            path: "/auth",
            children: [
                {
                    path: "login",
                    element: <AuthGuard><Login /></AuthGuard>,
                },
                {
                    path: "register",
                    element: <AuthGuard><Register /></AuthGuard>,
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
            element: <NotFound/>
        }
    ]);
}