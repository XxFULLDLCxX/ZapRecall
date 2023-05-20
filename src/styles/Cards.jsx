import styled from "styled-components";

export const DivCards = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 25px;
`;

export const DivCard = styled.div`
  width: 300px;
  height: 65px;

  background: #ffffff;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  h2 {
    width: 87px;
    height: 19px;

    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;

    color: #333333;
  }
`;

export const Button = styled.button.attrs()`
  width: 20px;
  height: 23px;
  background-image: url(${(props) => props.image_url});
  background-color: ${(props) => (props.color ? props.color : "inherit")};
`;
