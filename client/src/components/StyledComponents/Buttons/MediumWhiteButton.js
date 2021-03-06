import styled from "styled-components";

export const MediumWhiteButton = styled.button`
  width: 298px;
  height: 42px;
  background-color: #ffffff;
  box-shadow: 0px 4px 9px rgba(53, 53, 53, 0.2);
  border-radius: 6px;
  &:hover {
    font-weight: 700;
  }
  &:focus {
    background: #262523;
    box-sizing: border-box;
    font-weight: 700;
    border: 1px solid #262523;
  }
  &:active {
    background: #ffffff;
    /* Text/ Text */

    border: 1px solid #262523;
    box-sizing: border-box;
    /* Shadow */

    box-shadow: 0px 4px 9px rgba(53, 53, 53, 0.2);
    border-radius: 6px;
  }
`

export default MediumWhiteButton;