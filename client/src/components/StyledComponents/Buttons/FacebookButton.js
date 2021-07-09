import styled from "styled-components";
import facebook from "../../../images/facebook.svg";

const Button = styled.button`
  margin: 5px;
  background: #1877f2;
  border-radius: 0.375rem;
  height: 3.125rem;
  width: 10.359375rem;
  left: 0rem;
  top: 0rem;
  &:hover {
    background-color: #135cbb, 100%;
  }
  &:focus {
    border: 2px solid #262523;
    background: #1877f2, 100%;
  }
  &:active {
    background: #1877f2, 60%;
  }
`;

const style = {
  height: "2.0625rem",
  width: "6rem",
  left: "2.175781rem",
  top: "0.71875rem",
  borderRadius: "0rem",
};

export const FacebookButton = () => {
  return (
    <Button>
      <img src={facebook} alt="facebook logo" style={{ style }} />
    </Button>
  );
};
