import styled from "styled-components";
import Facebook from "../../../images/facebook.svg";

const Button = styled.Button`
  background: #1877f2;
  border-radius: 0.375rem;
  height: 3.125rem;
  width: 10.359375rem;
  left: 0rem;
  top: 0rem;
  
`;

const Image = styled.Image`
  height: 1.275902rem;
  width: 6.505744rem;
  left: 1.926758rem;
  top: 0.924561rem;
  border-radius: 0rem;
`;

export const FacebookButton = () => {
  return (
    <Button>
      <Image src={Facebook} alt="facebook logo" />
    </Button>
  );
};
