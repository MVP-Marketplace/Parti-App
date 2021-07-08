import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import History from "./components/History/History";
import TopNavBar from "./components/TopNavBar";
import Upload from "./components/Upload";
import Homepage from "./pages/Homepage";
import Default from "./components/Organizer/Default";
import Login from "./components/AccountSetUp/Login";
import Register from "./components/AccountSetUp/Register";
import Welcome from "./components/AccountSetUp/Welcome";
import NewCard from "./components/Card/NewCard";
import Dashboard from "./pages/Dashboard";
import LandingPage from "./pages/LandingPage";
import ViewCardPage from "./pages/ViewCardPage";
import ContributorEmail from "./components/Contributor/ContributorEmail";
import "./App.css";

function App() {
  return (
    // <div className="container">
    <Router History={History}>
      <Switch>
        <Route exact path="/organizer" component={Default} />
        <Route exact path="/" component={Homepage} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/view-card" component={ViewCardPage} />
        <Route path="/upload" component={Upload} />
        <Route path="/welcome" component={Welcome} />
        <Route path="/create-card" component={NewCard} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/contributor" component={LandingPage} />
        <Route path="/contributor-email" component={ContributorEmail} />
      </Switch>
    </Router>
    // </div>
  );
}

export default App;
