import styled from "styled-components";
import { center } from "../styles";

export const DivMessage = styled.div`
  ${center};
  flex-direction: column;
  padding-top: 5px;

  div {
    ${center};
    gap: 12px;
    height: 23px;
  }

  img {
    width: 23px;
    height: 23px;
  }
  h2 {
    width: max-content;
  }

  p {
    width: 222px;
    height: 44px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    text-align: center;

    color: #333333;
    margin: 5px 0;
  }
`;

export const DivCount = styled.div`
  ${center};
  flex-direction: column;
  position: absolute;
  bottom: 0px;
  width: 375px;
  min-height: 70px;

  background: #ffffff;
  box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
  h3 {
    height: 22px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;

    color: #333333;
  }
  div {
    display: flex;
    gap: 5px;
    margin: 6px 0 10px;
  }
`;
