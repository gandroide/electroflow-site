import react from "react"
import { createBrowserRouter } from "react-router-dom"
import Services from "./pages/Services"
import Company from "./pages/Company"
import Header from "./components/header/Header"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Header />,
    children: [
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
