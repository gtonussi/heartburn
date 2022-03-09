import styled, { css } from "styled-components"

import * as I from "./Button.interfaces"

const modifiers = {
  borderRadius: {
    round: css`
      border-radius: 10rem;
    `,
    square: css`
      border-radius: 0.5rem;
    `,
  },
  buttonType: {
    primary: css`
      background-color: #6accba;
      border: 1px solid #6accba;
      color: #fff;
      &:active,
      &:focus,
      &:hover {
        background-color: transparent;
        border: 2px solid #ebeff0;
        color: #6accba;
      }
    `,
    secondary: css`
      background-color: transparent;
      border: 2px solid #ebeff0;
      color: #6accba;
      &:active,
      &:focus,
      &:hover {
        background-color: #6accba;
        border: 2px solid #6accba;
        color: #fff;
      }
    `,
  },
}

export const ButtonContainer = styled.button<I.ButtonProps>`
  align-items: center;
  cursor: pointer;
  display: flex;
  font-size: 1rem;
  font-weight: 600;
  height: auto;
  line-height: 1.1;
  min-height: 3rem;
  padding: 0.5rem 1rem;
  position: relative;
  transition: all 200ms ease;
  width: 100%;

  svg {
    height: 1rem;
    width: auto;
  }

  // --------- modifiers

  ${({ borderRadius, buttonType, icon }) => css`
    ${!!buttonType && modifiers.buttonType[buttonType]}
    ${!!borderRadius && modifiers.borderRadius[borderRadius]}
    ${icon ? "justify-content: space-between;" : "justify-content: center;"}
  `}
`

export const ButtonCheckedWrapper = styled.span`
  position: absolute;
  right: 0.5rem;
  top: calc(0.5rem + 2px);

  svg {
    height: 1.5rem;
    width: auto;
  }
`
