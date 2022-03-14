import { ButtonHTMLAttributes } from "react"

// Extending the HTMLButtonElement assures elements'
// default props, such as onClick

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  borderRadius?: "round" | "square"
  buttonType?: "primary" | "secondary"
  checked?: boolean
  disabled?: boolean
  icon?: React.ReactNode
}
