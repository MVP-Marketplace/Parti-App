import React from "react";
import { Switch, Route } from "react-router-dom";
import Upload from "../components/Upload";
import Homepage from "../pages/Homepage";
import Default from "../components/Organizer/Default";
import Login from "../components/AccountSetUp/Login";
import Register from "../components/AccountSetUp/Register";
import Welcome from "../components/AccountSetUp/Welcome";
import NewCard from "../components/Card/NewCard";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../components/Contributor/LandingPage";
import RecipientThankYou from "../components/RecipientThankYou/RecipientThankYou";
import ContributorEmail from "../components/Contributor/ContributorEmail";
import SelectTheme from "../components/Card/SelectTheme";

const Routes = () => (
  <Switch>
    <Route exact path="/organizer" component={Default} />

    <Route exact path="/" component={Homepage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />


    <Route path="/upload" component={Upload} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/create-card" component={NewCard} />
    <Route path="/create-card-select-theme" component={SelectTheme} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/contributor" component={LandingPage} />

    <Route path="/recipient-thank-you" component={RecipientThankYou} />
    <Route path="/contributor-email" component={ContributorEmail} />

  </Switch>
);

export default Routes;
