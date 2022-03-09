import styled from "styled-components"

import * as I from "./CenterBox.interfaces"

export const CenterBoxContainer = styled.div<I.CenterBoxContainer>`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: ${({ windowInnerHeight }) => `${windowInnerHeight}px`};
  justify-content: center;
  width: 100vw;
`
