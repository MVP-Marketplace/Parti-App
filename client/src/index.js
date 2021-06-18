import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import Default from './components/Organizer/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Router>
		<App />
		{/* <Default /> */}
	</Router>,
	document.getElementById('root')
);