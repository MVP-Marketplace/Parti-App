import styled from "styled-components";

const BalloonContainer = styled.div`
body {
    margin: 0;
  }
  
  #balloon-container {
    height: 100vh;
    padding: 1em;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    overflow: hidden;
  }
  
  .balloon {
    height: 125px;
    width: 105px;
    border-radius: 75% 75% 70% 70%;
    position: relative;
  }
  
  .balloon:before {
    content: "";
    height: 75px;
    width: 1px;
    padding: 1px;
    background-color: #FDFD96;
    display: block;
    position: absolute;
    top: 125px;
    left: 0;
    right: 0;
    margin: auto;
  }
  
  .balloon:after {
      content: "▲";
      text-align: center;
      display: block;
      position: absolute;
      color: inherit;
      top: 120px;
      left: 0;
      right: 0;
      margin: auto;
  }
  
  @keyframes float {
    from {transform: translateY(100vh);
    opacity: 1;}
    to {transform: translateY(-300vh);
    opacity: 0;}
  }
`;

const BalloonContainer =()=>{

    return(
        <BalloonContainer>
            
        </BalloonContainer>
    )
}