import styled from "styled-components";
import { center } from "../styles";

export const DivCards = styled.div`
  ${center};
  flex-direction: column;
  gap: 25px;
`;

export const DivCard = styled.div`
  width: 300px;
  min-height: 65px;
  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  flex-wrap: wrap;

  h2 {
    font-style: normal;
    color: #333333;
    text-align: left;

    height: 19px;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    ${({ $h2 }) => $h2};
  }
  &[state="open"],
  &[state="flipped"] {
    min-height: 131px;
    background: #ffffd5;
    flex-direction: column;
  }
  &[state="open"] h2,
  &[state="flipped"] h2 {
    width: 100%;
    height: max-content;
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.05em;
    text-align: left;
  }
  div {
    ${center}
  }
`;

export const Button = styled.button.attrs(
  ({ $data = {} }) => "data-test" in $data && { "data-test": $data["data-test"] }
)`
  width: 23px;
  height: 23px;
  border-radius: 5px;
  background-size: cover;
  font-family: "Recursive", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  ${({ $css }) => $css};
`;

export const DivAnswer = styled.div`
  gap: 7.5px;
`;
