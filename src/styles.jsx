import styled, { css } from "styled-components";
import { createGlobalStyle } from "styled-components";

export const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Normalize = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: "Recursive", sans-serif;
    background-color: #e5e5e5;
  }
  button {
    border: none;
    font-family: inherit;
    background-color: inherit;
  }
`;
