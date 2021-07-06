import React from "react";
import "./App.css";
import Routes from "./Config/routes";
// import { Switch, Route } from 'react-router-dom';
// import Upload from './components/Upload';
// import Homepage from './pages/Homepage';
// import Default from './components/Organizer/Default';
// import Login from './components/AccountSetUp/Login';
// import Register from './components/AccountSetUp/Register';
// import Welcome from './components/AccountSetUp/Welcome';
// import NewCard from './components/Card/NewCard';
// import ContributorEmail from "./components/Contributor/ContributorEmail";
import Nav from "./components/NavbarMarkMade";
function App() {
  return (
    <div className="container">
      <Nav />
      <Routes />
    </div>
  );
}

export default App;
