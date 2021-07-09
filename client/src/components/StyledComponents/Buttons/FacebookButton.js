import styled from "styled-components";
import facebook from './facebook.png'

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

const Image = styled.image`
  height: 1.275902rem;
  width: 6.505744rem;
  left: 1.926758rem;
  top: 0.924561rem;
  border-radius: 0rem;
`;

export const FacebookButton = () => {
  return (
    <Button>
      <img src={facebook} alt="facebook logo" />
    </Button>
  );
};
