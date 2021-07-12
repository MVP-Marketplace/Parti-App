import styled from "styled-components";

export const SmallGreenButton = styled.button`
  height: 3.125rem;
  width: 10.359375rem;
  margin: 5px;
  background: #93e9be;
  box-shadow: 0px 4px 9px rgba(53, 53, 53, 0.2);
  border-radius: 6px;
  &:hover {
    font-weight: 700;
  }
  &:focus {
    border: 1px solid #262523;
    box-sizing: border-box;
    font-weight: 700;
  }
  &:active {
    background: #93e9be;
    box-shadow: 0px 4px 9px rgba(53, 53, 53, 0.2);
    border-radius: 6px;
  }
`;
export default SmallGreenButton;
