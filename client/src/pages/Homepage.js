import React from 'react';
import { Container } from 'react-bootstrap';
<<<<<<< HEAD
import Nav from '../components/Nav';
=======
import TopNavBar from '../components/TopNavBar';
>>>>>>> dan-s-branch
import About from '../components/Homepage/About';
import Showcase from '../components/Homepage/Showcase';
import StepByStep from '../components/Homepage/StepByStep';

function Homepage() {
	return (
		<div>
			<TopNavBar />
			<Container fluid>
				<About />
<<<<<<< HEAD
=======
				<Showcase />
>>>>>>> dan-s-branch
				<StepByStep />
				<Showcase />
			</Container>
		</div>
	);
}

export default Homepage;
