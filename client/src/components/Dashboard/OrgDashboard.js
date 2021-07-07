import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import ViewCardPage from '../../pages/ViewCardPage';
import './dashboard.css';
import VideoPlayer from '../VideoPlayer';

function Organizer(props) {
	return (
		<Container className='dashboard'>
			<Row className='dashboardHeading'>
				<h1>Your Dashboard</h1>
			</Row>
			<Row>
				<Link>Sent</Link>
				<Link>Received</Link>
			</Row>

			<Row>
				<Card className='text-center' inline>
					<Col>
						<VideoPlayer />
					</Col>
					<Col>
						<Card.Body>
							<Card.Text>Card Title</Card.Text>
							<Card.Text>Date</Card.Text>
							<Card.Text>Status:</Card.Text>
						</Card.Body>
					</Col>
					<Col>
						<SmallGreenButton href='/view-card'>View Card</SmallGreenButton>
					</Col>
				</Card>
			</Row>
		</Container>
	);
}

export default Organizer;
