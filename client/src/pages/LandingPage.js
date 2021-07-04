import React from 'react';
import Nav from '../components/Nav';
import Upload from '../components/Upload';
import VideoPlayer from '../components/VideoPlayer';

function LandingPage(props) {
	return (
		<div>
			<Nav />
			<Upload />
			<VideoPlayer />
		</div>
	);
}

export default LandingPage;
