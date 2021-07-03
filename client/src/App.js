import React  from "react";
import { components } from "react-select";
import "./App.css";
// import DraftJS from "./components/DraftJS/DraftJS";
import VideoPlayer from "./components/VideoPlayer";
import Routes from "./Config/routes";
// import Homepage from "./components/Homepage/Default"
import ContributorLandingPage from "./components/Contributor/LandingPage"




function App() {

  return (
    <div className="container">
    <Routes/> 
      {/* <VideoPlayer/> */}
      {/* <ContributorLandingPage/> */}
     
    </div>
  );
}

export default App;
