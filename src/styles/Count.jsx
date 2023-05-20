import styled from "styled-components";
import { center } from "../styles";

export const DivCount = styled.div`
  ${center};
  position: absolute;
  bottom: 0px;
  width: 375px;
  height: 70px;

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
`;
