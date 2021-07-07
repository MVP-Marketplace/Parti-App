import React from 'react';
import OrgDashboard from '../components/Dashboard/OrgDashboard';
import { Container } from 'react-bootstrap';
// import RecDashboard from '../components/Dashboard/RecDashboard';

function Dashboard() {
	return (
		<Container fluid>
			<OrgDashboard />
		</Container>
	);
}

export default Dashboard;
