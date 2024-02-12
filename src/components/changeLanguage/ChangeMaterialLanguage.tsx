import react, { FC, useState } from "react"
import Button from "@mui/material/Button"
import Menu from "@mui/material/Menu"
import MenuItem from "@mui/material/MenuItem"
import { useTranslation } from "react-i18next"

interface Lng {
  id: number
  code: string
  name: string
}

const languages = [
  {
    id: 1,
    code: "pt",
    name: "Português",
  },
  {
    id: 2,
    code: "en",
    name: "English",
  },
]

const ChangeLanguageComponent: FC = () => {
  const { i18n } = useTranslation()
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [currentLanguage, setCurrentLanguage] = useState<Lng>(languages[0])
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  console.log(currentLanguage)

  const changeLanguage = (code: string) => {
    console.log(code)
    i18n.changeLanguage(code)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const handleChange = (lang: Lng) => {
    setCurrentLanguage(lang)
    changeLanguage(lang.code)
    handleClose()
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        {currentLanguage.code}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={() => handleChange(languages[0])}>
          {languages[0].name}
        </MenuItem>
        <MenuItem onClick={() => handleChange(languages[1])}>
          {languages[1].name}
        </MenuItem>
      </Menu>
    </div>
  )
}

export default ChangeLanguageComponent
