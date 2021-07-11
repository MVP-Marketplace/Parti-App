import React from "react";
import About from "../components/Homepage/About";
import Showcase from "../components/Homepage/Showcase";
import StepByStep from "../components/Homepage/StepByStep";
import Footer from "../components/Footer/Footer";

function Homepage() {
  return (
    <div>
      <About />
      <StepByStep />
      <Showcase />
      <Footer />
    </div>
  );
}

export default Homepage;
