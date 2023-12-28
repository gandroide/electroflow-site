import react from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./Utils"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <react.StrictMode>
    <RouterProvider router={router} />
  </react.StrictMode>,
)
