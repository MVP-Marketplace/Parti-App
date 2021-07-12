import React from "react";
import { Switch, Route } from "react-router-dom";
import Upload from "../components/Upload";
import VideoPlayer from "../components/VideoPlayer";
import Homepage from "../pages/Homepage";
import Default from "../components/Organizer/Default";
import Login from "../components/AccountSetUp/Login";
import Register from "../components/AccountSetUp/Register";
import Welcome from "../components/AccountSetUp/Welcome";
import NewCard from "../components/Card/NewCard";
import Dashboard from "../pages/Dashboard";
import LandingPage from "../pages/LandingPage";
import ViewCardPage from "../pages/ViewCardPage";
import CardPage from "../pages/CardPage";
import ContributorEmail from "../components/Contributor/ContributorEmail";
import SelectTheme from "../components/Card/SelectTheme";
import UploadVideo from "../components/Contributor/UploadVideo";
import ContributorInvite from "../components/Contributor/ContributorInvite";

const Routes = () => (
  <Switch>
    <Route exact path="/organizer" component={Default} />
    <Route exact path="/" component={Homepage} />
    <Route path="/login" component={Login} />
    <Route path="/register" component={Register} />
    <Route path="/view-card" component={ViewCardPage} />
    <Route path="/upload" component={Upload} />
    <Route path="/welcome" component={Welcome} />
    <Route path="/create-card" component={NewCard} />
    <Route path="/create-card-select-theme" component={SelectTheme} />
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/contributor" component={LandingPage} />
    <Route path="/card" component={CardPage} />
    <Route path="/contributor-email" component={ContributorEmail} />
    <Route path="/upload-video" component={UploadVideo} />
    <Route path="/contributor-invite" component={ContributorInvite} />
    <Route path="/test" component={Upload} />
    <Route path="/play-video" component={VideoPlayer} />
  </Switch>
);

export default Routes;
