import React from 'react';
import './App.css';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Upload from './components/Upload';
import Home from './components/Home';
import DraftJS from './components/DraftJS';
function App() {
	return (
		<div className='container'>
			<Router>
				<nav className='nav'>
					<div className='nav-brand'>Parti-App</div>
					<ul className='nav-items'>
						<li className='nav-item'>
							<Link to='/'>Card Videos</Link>
						</li>
						<li className='nav-item'>
							<Link to='/upload'>Upload</Link>
						</li>
					</ul>
				</nav>
				<Switch>
					<Route component={Upload} path='/upload' />
					<Route component={Home} path='/' />
				</Switch>
				<DraftJS/>
			</Router>
		</div>
	);
}

export default App;
