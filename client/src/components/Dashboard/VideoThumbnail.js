import React, { useState } from 'react';
import './dashboard.css';

const qs = require('qs');
function VideoPlayer(props) {
	// TODO:
	// TRIM
	// ADD Stickers
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
					width='160'
					height='120'
					allow='autoplay; fullscreen; encrypted-media; picture-in-picture'
					allowFullScreen
					frameBorder='0'></iframe>
			</div>
		</>
	);
}
export default VideoPlayer;
