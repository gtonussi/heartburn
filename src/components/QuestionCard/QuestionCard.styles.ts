import styled from "styled-components"

import * as I from "./QuestionCard.interfaces"

export const QuestionCardContainer = styled.article<I.QuestionCardContainer>`
  background-color: #fff;
  box-shadow: 0 0 1rem #416172;
  display: ${({ isActive }) => (isActive ? "flex" : "none")};
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

  > div {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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

  hr {
    background-color: #416172;
    height: 1px;
    margin-top: 1rem;
    opacity: 10%;
    width: 100%;
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
