import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Upload from '../components/Upload';
import Homepage from '../pages/Homepage';
import Default from '../components/Organizer/Default';
import Login from '../components/AccountSetUp/Login';
import Register from '../components/AccountSetUp/Register';
import Welcome from '../components/AccountSetUp/Welcome';
import NewCard from '../components/Card/NewCard';

const Routes = () => (
	<Switch>
		<Route exact path='/organizer' component={Default} />

		<Route exact path='/' component={Homepage} />
		<Route path='/login' component={Login} />
		<Route path='/register' component={Register} />

		<Route path='/upload' component={Upload} />
		<Route path='/welcome' component={Welcome} />
		<Route path='/create-card' component={NewCard} />
	</Switch>
);

export default Routes;
