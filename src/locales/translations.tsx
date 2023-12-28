import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import pt from "./pt/translation.json"
import en from "./en/translation.json"

i18n
  .use(initReactI18next) // Pasa initReactI18next para configurar react-i18next
  .init({
    resources: {
      pt: { translation: pt },
      en: { translation: en },
    },
    lng: "pt", // Establece el idioma predeterminado
    fallbackLng: "pt", // Idioma de respaldo
    interpolation: {
      escapeValue: false, // React ya escapa las variables
    },
  })

export default i18n
