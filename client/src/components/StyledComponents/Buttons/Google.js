import styled from "styled-components";
import { Google } from "../../../Images/Google.svg";

const Button = styled.button`
  background: #ffffff;
  border: 0.015625rem solid #000000;
  box-sizing: border-box;
  border-radius: 0.375rem;
  width: 10.359375rem;
  height: 3.125rem;
`;

const Image = style.image`
    width: 6rem;
    height: 2.0625rem;
`;

const GoogleButton = () => {
  return (
    <>
      <Button>
        <Image src={Google} alt="Google Logo" />
      </Button>
    </>
  );
};

export default GoogleButton;
