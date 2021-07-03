import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from '../components/Organizer/Nav';
import About from '../components/Homepage/About';
import Showcase from '../components/Homepage/Showcase';
import HowTo from '../components/Homepage/HowTo';
import StepByStep from '../components/Homepage/StepByStep';

function Homepage() {
	return (
		<div>
			<Nav />
			<Container fluid>
				<About />
				<Showcase />
				<HowTo />
				<StepByStep />
			</Container>
		</div>
	);
}

export default Homepage;
