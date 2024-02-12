import react from "react"
import { createBrowserRouter } from "react-router-dom"
import Services from "./pages/Services"
import Company from "./pages/Company"
import Header from "./components/header/Header"
import Home from "./pages/Home"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/company",
        element: <Company />,
      },
    ],
  },
])
