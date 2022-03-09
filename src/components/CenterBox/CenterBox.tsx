import { useEffect, useState } from "react"

import * as S from "./CenterBox.styles"

export const CenterBox: React.FC = ({ children }) => {
  const [windowInnerHeight, setWindowInnerHeight] = useState(0)

  const handleWindowInnerHeight = () => {
    setWindowInnerHeight(window.innerHeight)
  }

  useEffect(() => {
    handleWindowInnerHeight()
    window.addEventListener("resize", handleWindowInnerHeight)

    return () => window.removeEventListener("resize", handleWindowInnerHeight)
  }, [])

  return (
    <S.CenterBoxContainer windowInnerHeight={windowInnerHeight}>
      {children}
    </S.CenterBoxContainer>
  )
}
