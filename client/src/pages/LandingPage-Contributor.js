import React from "react";
// import { useHistory } from "react-router-dom";

// Components
import TopNavBar from "../components/TopNavBar";
import Stepbystep from "../components/Contributor/Stepbystep";
import About from "../components/Contributor/About";


function LandingPage() {

  return (
    <div style={{ backgroundColor: 'white' }}>
      <TopNavBar/>
      <Stepbystep />
      <About />
    </div >
  );
}
export default LandingPage;
