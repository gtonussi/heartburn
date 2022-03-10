import { Checked } from "icons"

import * as I from "./Button.interfaces"
import * as S from "./Button.styles"

export const Button: React.FC<I.ButtonProps> = ({
  borderRadius = "square",
  buttonType = "primary",
  children,
  disabled = false,
  icon,
  onClick,
  isChecked = false,
}) => {
  return (
    <S.ButtonContainer
      borderRadius={borderRadius}
      buttonType={buttonType}
      isChecked={isChecked}
      disabled={disabled}
      icon={icon}
      onClick={onClick}
      // eslint-disable-next-line prettier/prettier
    >
      {icon && <span />}
      {children}
      {icon && icon}
      {!icon && isChecked && <Checked />}
    </S.ButtonContainer>
  )
}
