import styled from "styled-components";
import { Facebook } from "../../../Images/Facebook.svg";

const Button = styled.button`
  background: #1877f2;
  border-radius: 6;
  width: 10.359375rem;
  height: 3.125rem;
`;

const Image = style.image`
height: 1.275902rem;
width: 6.505744rem;
left: 323.192383rem;
top: 59.844177rem;
border-radius: 0rem;
`;

const FacebookButton = () => {
  return (
    <>
      <Button>
        <Image src={Facebook} alt="facbook Logo" />
      </Button>
    </>
  );
};

export default FacebookButton;
