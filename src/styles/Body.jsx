import styled from "styled-components";
import { center } from "../styles";

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

export const Welcome = styled(Section)`
  header {
    flex-direction: column;
    gap: 12px;
  }
  header img {
    width: 136px;
    height: 161px;
  }
  header h2 {
    width: 257px;
    height: 59px;
  }
`;

export const Button = styled.button`
  ${center};
  width: 246px;
  height: 54px;

  background: #ffffff;
  border: 1px solid #d70900;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  border-radius: 5px;

  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;

  text-align: center;

  color: #d70900;
  margin: 0 auto;
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
