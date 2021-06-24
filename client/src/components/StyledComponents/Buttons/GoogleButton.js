import styled from "styled-components";
import Google from "../../../images/google.svg";

const Button = styled.Button`

  background: #ffffff;
  border: .015625rem solid #000000;
  box-sizing: border-box;
  border-radius: .375rem;
`;

const Image = styled.Image`
height: 2.0625rem;
width: 6rem;
left: 2.175781rem;
top: .71875rem;
border-radius: 0rem;

`;

export const GoogleButton = () => {
  return (
    <Button>
      <Image src={Google} alt="google logo" />
    </Button>
  );
};
