import React from 'react';
import { Container } from 'react-bootstrap';
import TopNavBar from '../components/TopNavBar';
import About from '../components/Homepage/About';
import Showcase from '../components/Homepage/Showcase';
import StepByStep from '../components/Homepage/StepByStep';

function Homepage() {
	return (
		<div>
			<Container fluid>
				<About />
				<Showcase />
				<StepByStep />
			</Container>
		</div>
	);
}

export default Homepage;
