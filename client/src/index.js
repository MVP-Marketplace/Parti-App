import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Default from './components/Organizer/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
	<React.StrictMode>
		{/* <App /> */}
		<Default />
	</React.StrictMode>,
	document.getElementById('root')
);
