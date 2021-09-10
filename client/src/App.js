import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
// import Default from './components/Organizer/Default';
import Login from './components/AccountSetUp/Login';
import Register from './components/AccountSetUp/Register';
import Welcome from './components/AccountSetUp/Welcome';
import NewCard from './components/Card/NewCard';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage-Contributor';
import ViewCardPage from './pages/ViewCardPage';
import CardPage from './pages/CardPage';
import SelectTheme from './components/Card/SelectTheme';
import UploadVideo from './components/Contributor/UploadVideo';
import ContributorInvite from './components/Contributor/ContributorInvite';
import RecipientThankYou from './components/RecipientThankYou/RecipientThankYou';
import RecDashboard from './components/Dashboard/RecDashboard';
//Many of these routes need to be private, so create a PrivateRoutes.js where we can separate them out for clearer code
function App() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path='/' component={Homepage} />
				<Route path='/login' component={Login} />
				<Route path='/register' component={Register} />
				<Route path='/view-card' component={ViewCardPage} />
				<Route path='/welcome' component={Welcome} />
				<Route path='/create-card' component={NewCard} />
				<Route path='/create-card-select-theme' component={SelectTheme} />
				<Route path='/dashboard' component={Dashboard} />
				<Route path='/contributor' component={LandingPage} />
				<Route path='/card' component={CardPage} />
				<Route path='/upload-video' component={UploadVideo} />
				<Route path='/contributor-invite' component={ContributorInvite} />
				<Route path='/recipient-thank-you' component={RecipientThankYou} />
				<Route path='/recipient-dashboard' component={RecDashboard} />
			</Switch>
		</BrowserRouter>
	);
}

export default App;
