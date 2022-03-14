import styled, { css } from "styled-components"

import * as I from "./QuestionCard.interfaces"

export const QuestionCardContainer = styled.article`
  background-color: #fff;
  box-shadow: 0 0 1rem #416172;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  padding: 1.5rem 0.875rem;
  width: 100%;

  @media (min-width: 476px) {
    border-radius: 0.5rem;
  }
`

export const QuestionCardHeader = styled.div`
  width: 100%;
`

export const QuestionCardProgress = styled.div`
  position: relative;

  hr {
    background-color: #416172;
    border: none;
    height: 1px;
    margin-top: 1rem;
    opacity: 10%;
    position: absolute;
    transition: all 200ms ease;
    width: 100%;

    & + hr {
      background-color: #6accba;
      height: 2px;
      opacity: 100%;
    }
  }
`

export const QuestionCardTitle = styled.div<I.QuestionCardTitle>`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;

    ${({ isFirst }) =>
      isFirst &&
      css`
        opacity: 0;
        pointer-events: none;
      `}
  }

  h1 {
    font-size: 1rem;
    font-weight: 600;
    text-align: center;
  }

  svg {
    cursor: pointer;

    &:hover {
      path {
        fill: #6accba;
      }
    }

    path {
      transition: all 150ms ease;
    }
  }
`

export const QuestionCardBody = styled.div`
  padding: 2.5rem 0.875rem;

  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;

    button + button {
      margin-left: 1rem;
    }
  }

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
  }

  hr {
    background-color: #416172;
    height: 3px;
    margin: 0.75rem 0 2rem;
    opacity: 20%;
    width: 4rem;
  }
`

export const QuestionCardFooter = styled.div`
  padding: 0 0.875rem;

  > button {
    svg {
      path {
        fill: #fff;
        transition: all 200ms ease;
      }
    }

    &:hover {
      svg {
        path {
          fill: #6accba;
        }
      }
    }
  }
`
