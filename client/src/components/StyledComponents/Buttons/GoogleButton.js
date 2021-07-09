import styled from "styled-components";
import google from '../../../images/google.png'

const Button = styled.button`
  margin: 5px;
  height: 3.125rem;
  width: 10.359375rem;
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
`
const style = {
  height: '2.0625rem',
  width: '6rem', 
  left: '2.175781rem',
  top: '0.71875rem', 
  borderRadius: '0rem',
}

export const GoogleButton = () => {
  return (
    <Button>
      <img src={google} alt="google logo" style={{style}} />
    </Button>
  );
};
