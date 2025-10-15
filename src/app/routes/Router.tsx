import { createBrowserRouter } from "react-router";

export default function Router() {
    return createBrowserRouter([
        {
            path: "/",
            element: <h1 className="text-3xl font-bold underline">Home</h1>,
        },
    ]);
}