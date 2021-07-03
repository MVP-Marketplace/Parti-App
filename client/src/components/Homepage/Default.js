import { Container } from "react-bootstrap";
import About from "./About";
import Showcase from "./Showcase";
import StepByStep from "./StepByStep";

function Default() {
  return (
    <div>
      <Container>
        
        <About />
        <StepByStep />
        <Showcase />
      </Container>
    </div>
  );
}

export default Default;
