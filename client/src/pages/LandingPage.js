import React from 'react';
import TopNavBar from '../components/TopNavBar';
import Upload from '../components/Upload';
import VideoPlayer from '../components/VideoPlayer';

function LandingPage(props) {
	return (
		<div>
			<Upload />
			<VideoPlayer />
		</div>
	);
}

export default LandingPage;
