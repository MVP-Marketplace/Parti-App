//May need two separate components LSideContributor vs LSide Recipient or conditional code in this component alone. Set up to show either videos contributed for the organizer to place into card and edit or recipient video playlist to view videos in their greeting card.

import { useState } from 'react';
import { Nav, ButtonGroup, ToggleButton } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import UploadVideo from '../Contributor/UploadVideo';
import VideoThumbnail from '../Dashboard/VideoThumbnail';

function LSide() {
	const [highlight, setHighlight] = useState('1');

	const options = [
		{ name: 'Invitees', value: '1' },
		// list of names and emails of invitees - should populate list on the right where Card Previews renders
		{ name: 'Themes', value: '2' },
		//connects to theme background choices component
		{ name: 'Music', value: '3' },
		//toggle choices of music connected to card where Card Previews renders
	];

	return (
		<div>
			<Nav
				className='sidebar col-md-12 d-none d-md-block bg-light'
				style={{ paddingTop: '150px' }}>
				<UploadVideo />
				<ButtonGroup className='mb-2'>
					{options.map((radio, idx) => (
						<ToggleButton
							key={idx}
							id={`radio-${idx}`}
							type='radio'
							variant='secondary'
							name='radio'
							value={radio.value}
							checked={highlight === radio.value}
							onChange={(e) => setHighlight(e.currentTarget.value)}>
							{radio.name}
						</ToggleButton>
					))}
				</ButtonGroup>
				<Card className='justify-content-md-center m-5 bg-light' border='0'>
					<Card.Title className='text-center' style={{ fontSize: 30 }}>
						Contributed Videos
					</Card.Title>
					<Card.Body className='text-center'>
						Videos render here
						<VideoThumbnail />
						{/* populate all the videos contributed to a particular card */}
					</Card.Body>
				</Card>
			</Nav>
		</div>
	);
}

export default LSide;
