import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Homepage from './pages/Homepage';
import { AppContextProvider } from './contexts/AppContext';
// import Default from './components/Organizer/Default';
import Login from './components/AccountSetUp/Login';
import PrivateRoute from './components/PrivateRoute';
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
import ErrorPage from './pages/ErrorPage';
//Many of these routes need to be private, so create a PrivateRoutes.js where we can separate them out for clearer code
function App() {
	return (
		<AppContextProvider>
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={Homepage} />
					<Route path='/login' component={Login} />
					<Route path='/register' component={Register} />
					<Route path='/view-card' component={ViewCardPage} />
					<Route path='/welcome' component={Welcome} />
					<Route path='/create-card' component={NewCard} />
					<Route path='/create-card-select-theme' component={SelectTheme} />
					<PrivateRoute path='/dashboard/:id' component={Dashboard} />
					<Route path='/contributor' component={LandingPage} />
					{/* <Route path="/card" component={CardPage} />  may need to access specific card below */}
					<PrivateRoute path='/card/:id' component={CardPage} />
					<PrivateRoute path='/upload-video/:cardId' component={UploadVideo} />
					<Route path='/contributor-invite' component={ContributorInvite} />
					<Route path='/recipient-thank-you' component={RecipientThankYou} />
					<PrivateRoute
						path='/recipient-dashboard/:id'
						component={RecDashboard}
					/>
					<Route path='*' component={ErrorPage} />
				</Switch>
			</BrowserRouter>
		</AppContextProvider>
	);
}

export default App;
