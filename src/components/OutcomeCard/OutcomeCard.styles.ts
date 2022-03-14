import styled from "styled-components"

export const OutcomeCardContainer = styled.article`
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

export const OutcomeCardHeader = styled.div`
  width: 100%;
`

export const OutcomeCardTitle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  button {
    border: none;
    background-color: transparent;
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

export const OutcomeCardProgress = styled.div`
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

export const OutcomeCardBody = styled.div`
  padding: 2.5rem 0.875rem;

  h2 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  hr {
    background-color: #416172;
    height: 3px;
    margin-bottom: 1rem;
    opacity: 20%;
    width: 4rem;
  }

  p {
    font-size: 1.15rem;
    font-weight: 400;
    line-height: 1.15;
    margin-bottom: 1.5rem;
  }

  button {
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

export const OutcomeCardFooter = styled.div`
  display: flex;
  justify-content: center;
  padding: 0 0.875rem;

  button {
    background-color: transparent;
    border: none;
    color: #6accba;
    cursor: pointer;
    font-size: 1.15rem;
    text-decoration: underline;
  }
`
