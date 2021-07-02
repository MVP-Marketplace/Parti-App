import React  from "react";
import "./App.css";
// import DraftJS from "./components/DraftJS/DraftJS";
import VideoPlayer from "./components/VideoPlayer";
import Routes from "./Config/routes";
import UploadVideo from './components/Contributor/UploadVideo/UploadVideo';



function App() {

  return (
    <div className="container">
      <Routes/>
      {/* <UploadVideo />
      <VideoPlayer/> */}
    </div>
  );
}

export default App;
