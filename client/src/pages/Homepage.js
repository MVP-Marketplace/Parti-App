import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../components/Navbar';
import About from '../components/Homepage/About';
import Showcase from '../components/Homepage/Showcase';
import StepByStep from '../components/Homepage/StepByStep';

function Homepage() {
	return (
		<div>
			<Navbar />
			<Container fluid>
				<About />
				<Showcase />
				<StepByStep />
			</Container>
		</div>
	);
}

export default Homepage;
