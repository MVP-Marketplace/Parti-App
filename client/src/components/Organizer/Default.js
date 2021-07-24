import React, { useState, useEffect } from "react";
import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../TopNavBar';
import Preview from './Preview';
import LSide from '../Sidebar/LSide';
import axios from 'axios';
import '../../App.css';

function Default() {

    const [greetingCard, setGreetingCard] = useState({});

	useEffect(async () => {
		const id = JSON.parse(localStorage.getItem("cardId"));
		console.log(id);
		// GET request using axios inside useEffect React hook
		const result = await axios.get(`/card/${id}`, {id: id})
			setGreetingCard(result.data)
	}, []);
	
	return (
		<div className='organizer-page'>
			<TopNavBar />
			<Container>
				<Row xs={2}>
					<Col>
						<LSide />
					</Col>
					<Col>
						<Preview />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Default;
