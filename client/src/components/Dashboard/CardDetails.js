//probably not necessary because the dashboard will look the same for either the organizer or the recipient

import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../../contexts/AppContext';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import { Container, Card, Row, Col } from 'react-bootstrap';
import './dashboard.css';
import VideoThumbnail from './VideoThumbnail';
import CardPage from '../../pages/CardPage';

//This dashboard should populate when the user is a recipient and not an organizer
function CardDetails(props) {
	const { greetingCard } = useContext(AppContext);
	let cardId = props.card;
	let cardIdIdx = props.index;
	let card = greetingCard[cardIdIdx];
	// console.log('greeting card?', greetingCard.config);
	console.log('greeting card ID index:', cardIdIdx);
	console.log('greeting card ID:', cardId);
	console.log('greeting card info:', greetingCard);

	return (
		<Container>
			<Card className='m-3'>
				<Row xs={1} md={3}>
					<Col className='card-thumbnail'>
						{/* <VideoThumbnail /> */}
						<Card.Img
							src={greetingCard.theme}
							className='img-fluid'
							alt='theme'
						/>
					</Col>
					<Col className='card-col' xl={4}>
						<Card.Body>
							{/* This should render cards connected to the user/role and pull the title, date sent/due and status (open/closed) */}
							<Card.Text>Title: {greetingCard.title} </Card.Text>
							<Card.Text>For: {greetingCard.recipientFirstName}</Card.Text>
							<Card.Text>
								Event Date:
								<p>{greetingCard.dueDate}</p>
							</Card.Text>
							<Card.Text>
								Status:
								<p>{greetingCard.status}</p>
							</Card.Text>
						</Card.Body>
					</Col>
					<div className='card-col'>
						<Col>
							<Link to={`/card/${cardId}`}>
								{/* this should populate the specific card name and then clicking on the button below should send you to the indvidual card page */}
								<SmallGreenButton key={cardIdIdx} value={cardId}>
									View Card {CardPage}
								</SmallGreenButton>
							</Link>
							<Link to={`/card/${cardId}`}>
								<SmallGreenButton>Edit Card {CardPage}</SmallGreenButton>
							</Link>
						</Col>
					</div>
				</Row>
			</Card>
		</Container>
	);
}
export default CardDetails;
