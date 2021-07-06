import React from 'react';
import Navbar from '../components/Navbar';
import Upload from '../components/Upload';
import VideoPlayer from '../components/VideoPlayer';

function LandingPage(props) {
	return (
		<div>
			<Navbar />
			<Upload />
			<VideoPlayer />
		</div>
	);
}

export default LandingPage;
