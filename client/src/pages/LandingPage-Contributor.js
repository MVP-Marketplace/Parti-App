import React from 'react';
// import { useHistory } from "react-router-dom";

// Components
import TopNavBar from '../components/TopNavBar';
import Stepbystep from '../components/Contributor/Stepbystep';
import About from '../components/Contributor/About';
//step by step for going through the process of contributing a video to a particular greeting card

function LandingPage() {
	return (
		<div style={{ backgroundColor: 'white' }}>
			<TopNavBar />
			<Stepbystep />
			<About />
		</div>
	);
}
export default LandingPage;
