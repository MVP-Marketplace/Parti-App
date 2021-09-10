import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../components/TopNavBar';
// import Preview from '../components/Organizer/Preview';
import LSide from '../components/Sidebar/LSide';
import axios from 'axios';
import '../App.css';

function Default() {
	const [greetingCard, setGreetingCard] = useState({});
	const [contentList, setcontentList] = useState([]);

	useEffect(async () => {
		const id = JSON.parse(localStorage.getItem('cardId'));

		// GET request using axios inside useEffect React hook
		const result = await axios.get(`/card/${id}`, { id: id });
		setGreetingCard(result.data); // sets greetingCard object to state
		setcontentList(result.data.contentList); // sets  each content object to state
	}, []);
	//Styling needs to be completed for this page to render like in the FIGMA
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
						{/* conditional code based on who's logged in - contributor or organizer. Perhaps rename PreviewContributor and PreviewOrganizer */}

						{/* Preview renders videos and card background */}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Default;
