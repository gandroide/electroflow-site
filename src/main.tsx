import react from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { RouterProvider } from "react-router-dom"
import { router } from "./Utils"
import { I18nextProvider } from "react-i18next"
import i18n from "./locales/translations"
import Footer from "./components/Footer"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <react.StrictMode>
    <I18nextProvider i18n={i18n}>
      <main>
        <RouterProvider router={router} />
        <Footer />
      </main>
    </I18nextProvider>
  </react.StrictMode>,
)
