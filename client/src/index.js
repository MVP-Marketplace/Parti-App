import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import History from './components/History/History';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<Router History={History}>
		<App />
	</Router>,
	document.getElementById('root')
);
