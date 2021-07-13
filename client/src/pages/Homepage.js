import React from "react";
import About from "../components/Homepage/About";
import Showcase from "../components/Homepage/Showcase";
import StepByStep from "../components/Homepage/StepByStep";
import Footer from "../components/Footer/Footer";
import TopNavbar from "../components/TopNavBar";

function Homepage() {
  return (
    <div>
      <TopNavbar />
      <About />
      <StepByStep />
      <Showcase />
      <Footer />
    </div>
  );
}

export default Homepage;
