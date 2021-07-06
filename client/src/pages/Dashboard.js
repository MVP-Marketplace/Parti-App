import React from 'react';
import Navbar from '../components/Navbar';
// import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';

function Dashboard({ cards, setCards }) {
	return (
		<div>
			<Navbar />
			<Row className='dashboardHeading'>
				<h1>Your Dashboard</h1>
			</Row>
			<Row>
				<Card className='card'>
					<Card.Link to='/view-card'>
						<Button>View Card</Button>
					</Card.Link>
				</Card>
			</Row>
		</div>
	);
}

export default Dashboard;
