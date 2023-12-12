import * as react from "react"
import Button from "@mui/material/Button"

type ButtonProps = react.ComponentPropsWithoutRef<"button">

const PrimaryButton: react.FC<ButtonProps> = ({ title }: ButtonProps) => {
  return <Button variant="contained">{title}</Button>
}

export default PrimaryButton
