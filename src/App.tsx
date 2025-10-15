import { RouterProvider } from "react-router/dom";
import Router from "./app/routes/Router";

function App() {
  return (
    <RouterProvider router={Router()} />
  )
}

export default App
