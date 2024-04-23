import { createBrowserRouter } from "react-router-dom"
import { Layout } from '../../components/Layout'

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,

  }
])
