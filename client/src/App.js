import React from "react";
import "./App.css";
import Routes from "./Config/routes";
import TopNavbar from "./components/TopNavBar";

function App() {
  return (
    <div>
      <TopNavbar />
      <Routes />
    </div>
  );
}

export default App;
