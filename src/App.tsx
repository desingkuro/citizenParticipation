import { RouterProvider } from "react-router/dom";
import Router from "./app/routes/Router";
import { ContextApp } from "./app/shared/providers/context/ContextApp";

function App() {
  return (
    <ContextApp>
      <RouterProvider router={Router()} />
    </ContextApp>
  )
}

export default App
