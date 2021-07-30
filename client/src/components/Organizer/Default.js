import React, { useState, useEffect } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../TopNavBar';
import Preview from './Preview';
import LSide from '../Sidebar/LSide';
import axios from 'axios';
import '../../App.css';
import Background from './Options/Background';
import VideoThumbnail from '../Dashboard/VideoThumbnail';

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

	return (
		<div className='organizer-page'>
			<TopNavBar />
			<Container>
				<Row xs={2}>
					<Col>
						<LSide />
						{/* LSide renders only if contributer is logged in */}
						<VideoThumbnail />
						{/* VideoThumbnail renders only if organizer is logged in */}
					</Col>
					<Col>
						<Preview />
						{/* Preview renders only if contributer is logged in */}
						<Background />
						{/* Background renders only if organizer is logged in */}
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Default;
