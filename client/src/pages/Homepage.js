import React from "react";
import { Container } from "react-bootstrap";
import TopNavBar from "../components/TopNavBar";
import About from "../components/Homepage/About";
import Showcase from "../components/Homepage/Showcase";
import StepByStep from "../components/Homepage/StepByStep";

function Homepage() {
  return (
    <div>
      <TopNavBar />
      <Container fluid>
        <About />
        <StepByStep />
        <Showcase />
      </Container>
    </div>
  );
}

export default Homepage;
