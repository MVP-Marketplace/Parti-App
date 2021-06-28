import { Container } from "react-bootstrap";
import Nav from "./Nav";
import About from "./About";
import Showcase from "./Showcase";
import HowTo from "./HowTo";
import StepByStep from "./StepByStep";

function Default() {
  return (
    <div>
      <Container>
        <Nav />
        <About />
        <Showcase />
        <HowTo />
        <StepByStep />
      </Container>
    </div>
  );
}

export default Default;
