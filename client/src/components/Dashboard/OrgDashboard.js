import React from 'react';
import { Link } from 'react-router-dom';
// import { useState } from 'react';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { Container, Card, Row, Col } from 'react-bootstrap';
// import ViewCardPage from '../../pages/ViewCardPage';
import './dashboard.css';
import VideoThumbnail from './VideoThumbnail';

function Organizer(props) {
	return (
		<Container className='dashboard'>
			<Row className='dashboardHeading'>
				<h3>Your Dashboard</h3>
			</Row>
			<div>
				<Row justify-content-center>
					<Col></Col>
					{/* Here the Sent Link should only list those cards connected to this user that have been sent by this user. Invisible if no cards sent */}
					<Col>
						<div className='link'>
							<Link to='/dashboard#sent' activeClassName='selected'>
								Sent
							</Link>
						</div>
					</Col>
					{/* The Received Link should only list those cards connected to this user that have been received. Invisible if no cards received */}
					<Col>
						<div className='link'>
							<Link to='dashboard#received' activeClassName='selected'>
								Received
							</Link>
						</div>
					</Col>
					<Col></Col>
					<Col></Col>
				</Row>
			</div>

			<Row>
				<ul className='cards-list'>
					<Card className='text-center' inline>
						<Container fluid>
							<Row xs={1} md={3}>
								<Col>
									<VideoThumbnail />
								</Col>
								<Col>
									<Card.Body>
										{/* This should render cards connected to the user/role and pull the title, date sent/due and status (open/closed) */}
										<Card.Text>Card Title</Card.Text>
										<Card.Text>Date</Card.Text>
										<Card.Text>Status:</Card.Text>
									</Card.Body>
								</Col>
								<Col justify-content-center>
									<SmallGreenButton href='/view-card'>
										View Card
									</SmallGreenButton>
								</Col>
							</Row>
						</Container>
					</Card>
				</ul>
			</Row>
		</Container>
	);
}

export default Organizer;
