import React from 'react';
import Nav from '../components/Nav';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { Card, Button, Form, Row, Col } from 'react-bootstrap';

function Dashboard({ cards, setCards }) {
	return (
		<div>
			<Nav />

			<div className='dashboardHeading'>
				<h1>Your Dashboard</h1>
				<Card className='card'>
					<Link to='/view-card'>
						<Button>View Card</Button>
					</Link>
				</Card>
			</div>
		</div>
	);
}

export default Dashboard;
