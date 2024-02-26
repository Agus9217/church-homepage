import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components";

export const routerApp = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: []
  }
])
