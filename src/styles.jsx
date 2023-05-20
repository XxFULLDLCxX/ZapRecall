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

export const Section = styled.section`
  width: 375px;
  height: 100svh;

  background: #fb6b6b;
  border: 1px solid #dbdbdb;
  margin: 0 auto;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Header = styled.header`
  ${center};
  margin: 42px 0 51px;
  img {
    width: 52px;
    height: 60px;
  }
  h1 {
    width: 203.17px;
    height: 44px;
    font-family: "Righteous", cursive;
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 45px;
    letter-spacing: -0.012em;
    text-align: center;

    color: #ffffff;

    transform: rotate(0.58deg);
  }
`;

export const Main = styled.main``;

export const Footer = styled.footer`
  display: fixed;
`;
