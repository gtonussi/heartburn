/* eslint-disable @typescript-eslint/naming-convention */

import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 14px;

    @media (min-width: 476px) {
      font-size: 16px;
    }
  }

  body {
    background-color: #6accba;
    color: #416172;
    font: 400 14px Montserrat, sans-serif;
    overflow: hidden;

    @media (min-width: 476px) {
      font: 400 16px Montserrat, sans-serif;
    }
  }

  ${normalize}
`
