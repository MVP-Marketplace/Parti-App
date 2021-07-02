import React  from "react";
import "./App.css";
// import DraftJS from "./components/DraftJS/DraftJS";
import VideoPlayer from "./components/VideoPlayer";
import Routes from "./Config/routes";
import UploadVideo from './components/Contributor/UploadVideo/UploadVideo'
// import Homepage from "./components/Homepage/Default"



function App() {

  return (
    <div className="container">
      <Routes/>
      <VideoPlayer/>
      
    </div>
  );
}

export default App;
