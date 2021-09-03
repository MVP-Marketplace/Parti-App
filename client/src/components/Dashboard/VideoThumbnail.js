import React, { useState } from 'react';
import './dashboard.css';

// This component is the iframe to generate a video thumbnail pulling from the videos posted by a contributer, and viewed by organizer and recipient.
const qs = require('qs');
function VideoPlayer(props) {
	// TODO:
	// DELETE video
	const config = {
		cloud_name: 'demo',
		public_id: 'elephants',
		cloudinary: { cname: 'myCname' },
		player: { loop: true },
		source: { source_types: ['mp4/h265', 'mp4'] },
	};
	const params = qs.stringify(config);
	const url = 'https://player.cloudinary.com/embed/?' + params;
	return (
		<>
			<div className='iframe-container'>
				<iframe
					className='responsive-iframe'
					title='Cloud Hosted Video Player'
					src={url}
					width='200'
					height='120'
					allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
					allowFullScreen
					frameBorder='0'></iframe>
			</div>
		</>
	);
}
export default VideoPlayer;
