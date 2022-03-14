import { Checked } from "icons"

import * as I from "./Button.interfaces"
import * as S from "./Button.styles"

export const Button: React.FC<I.ButtonProps> = ({
  borderRadius = "square",
  buttonType = "primary",
  checked = false,
  children,
  disabled = false,
  icon,
  onClick,
}) => {
  return (
    <S.ButtonContainer
      borderRadius={borderRadius}
      buttonType={buttonType}
      checked={checked}
      disabled={disabled}
      icon={icon}
      onClick={onClick}>
      {icon && <span />}
      {children}
      {icon && icon}
      {!icon && checked && <Checked />}
    </S.ButtonContainer>
  )
}
