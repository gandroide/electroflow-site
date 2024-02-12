import react, { FC } from "react"
import { useTranslation } from "react-i18next"

const Services: FC = () => {
  const { t } = useTranslation()

  return (
    <div className="text-black h-full w-full bg-blue-200">
      {t("translations.header.services.title")}
    </div>
  )
}

export default Services
