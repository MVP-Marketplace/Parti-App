import React from "react";
import About from "../components/Homepage/About";
import Showcase from "../components/Homepage/Showcase";
import StepByStep from "../components/Homepage/StepByStep";
import Footer from "../components/Footer/Footer";
import TopNavBar from "../components/TopNavBar";
 
function Homepage() {
  return (
    <div>
      <TopNavBar />
      <About />
      <StepByStep />
      <Showcase />
      <Footer />
    </div>
  );
}

export default Homepage;
