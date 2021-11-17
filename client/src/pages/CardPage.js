import React, { useContext } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../components/TopNavBar';
// import Preview from '../components/Organizer/Preview';
import { AppContext } from '../contexts/AppContext';
import LSide from '../components/Sidebar/LSide';
import RSide from '../components/Sidebar/RSide';
import axios from 'axios';
import '../App.css';

function CardPage(props) {
	const { greetingCard } = useContext(AppContext);
	let cardId = props.card;
	console.log(
		'greeting card IDs for user logged in:', props
	);
	//map over
	return (
		<div className='organizer-page'>
			<TopNavBar />
			<Container>
				<Row xs={2}>
					<Col>
						{/* conditional code based on who's logged in - contributor or organizer. Perhaps rename LSideContributor and LSideOrganizer*/}
						<LSide />
						{/* LSide renders contributer's videos connected to a particular card for Organizer. */}
					</Col>
					<Col>
						<p>{cardId}</p>
						{/* conditional code based on who's logged in - contributor or organizer. Perhaps rename PreviewContributor and PreviewOrganizer */}
						<RSide />
						{/* Preview renders videos and card background */}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default CardPage;
