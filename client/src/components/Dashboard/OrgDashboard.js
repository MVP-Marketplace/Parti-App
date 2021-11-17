import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './dashboard.css';
import VideoThumbnail from './VideoThumbnail';
import CardDetails from './CardDetails';

function OrgDashboard() {
	const { cards, currentUser } = useContext(AppContext);

	console.log('card', cards[0]);

	return (
		<Container className='dashboard'>
			<Row className='dashboardHeading'>
				<h3>{currentUser.firstName}'s Dashboard</h3>
			</Row>
			<div>
				<Row justify-content-left>
					{/* Here the Sent Link should only list those cards connected to this user that have been sent by this user (organizer role). Invisible if no cards sent */}
					<Col>
						<div className='link'>
							<Link to='/dashboard/:id#sent' activeClassName='selected'>
								Sent
							</Link>
						</div>
					</Col>
					{/* The Received Link should only list those cards connected to this user that have been received (recipient role). Invisible if no cards received */}
					<Col>
						<div className='link'>
							<Link to='dashboard//:id#received' activeClassName='selected'>
								Received
							</Link>
						</div>
					</Col>
				</Row>
			</div>
			<Row>
				{cards.length ? (
					<ul>
						{cards.map((card) => {
							console.log(card);
							return <CardDetails card={card} key={card} />;
						})}
					</ul>
				) : (
					<div>
						You have not created any greeting cards to send to anyone. Click on
						the + Create button above
					</div>
				)}
			</Row>
		</Container>
	);
}

export default OrgDashboard;
