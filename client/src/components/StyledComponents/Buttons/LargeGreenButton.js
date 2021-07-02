import styled from 'styled-components'; 

const LargeGreenButton = styled.button `
height: 42px;
width: 356px;
background: #93E9BE, 100%;
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
    background: #93E9BE;
    box-shadow: 0px 4px 9px rgba(53, 53, 53, 0.2);
    border-radius: 6px;
}
`
export default LargeGreenButton;