import styled from "styled-components";
import Google from "../../../images/google.svg";

const Button = styled.button`
  background: #ffffff;
  border: 0.015625rem solid #000000;
  box-sizing: border-box;
  border-radius: 0.375rem;
  &:hover {
    background: #efefef;
  }
  &:focus {
    border: 1px solid #262523;
    background: #ffffff, 100%;
  }
  &:active {
    background: #ffffff;
    border: 0.25px solid #000000;
    box-sizing: border-box;
    border-radius: 6px;
  }
`;

const Image = styled.Image`
  height: 2.0625rem;
  width: 6rem;
  left: 2.175781rem;
  top: 0.71875rem;
  border-radius: 0rem;
`;

export const GoogleButton = () => {
  return (
    <Button>
      <Image src={Google} alt="google logo" />
    </Button>
  );
};
