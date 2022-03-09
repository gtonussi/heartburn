import { Checked } from "icons"

import * as I from "./Button.interfaces"
import * as S from "./Button.styles"

export const Button: React.FC<I.ButtonProps> = ({
  borderRadius = "square",
  buttonType = "primary",
  children,
  icon,
  shouldCheck = false,
}) => {
  return (
    <S.ButtonContainer
      borderRadius={borderRadius}
      buttonType={buttonType}
      icon={icon}
      // eslint-disable-next-line prettier/prettier
    >
      {icon && <span />}
      {children}
      {icon && icon}
      {!icon && shouldCheck && (
        <S.ButtonCheckedWrapper>
          <Checked />
        </S.ButtonCheckedWrapper>
      )}
    </S.ButtonContainer>
  )
}
