import { styled } from "styled-components"

type ButtonPropsStyle = {
  color : string;
}

export const Button = styled.button<ButtonPropsStyle>`
  width: 86px;
  height: 30px;
  border: none;
  background-color: ${props => props.color};
  border-radius: 5px; 
  margin: 10px 6px 20px 20px;
  font-weight: 700;
  font-size: 10px;
  line-height: 2;
  color: #fff;

  &:hover{
    background-color: #fff;
    border: 2px solid #4e71fe;
    color: #4e71fe;
  }
`;

export const MyButton = styled(Button)`
  background-color: #fff;
  margin: 10px 0px 20px 6px;
  border: 2px solid #4e71fe;
  color: #4e71fe;

  &:hover{
    background-color: #4e71fe;
    color: #fff;

  }
`;
