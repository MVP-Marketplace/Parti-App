import React from "react";
import OrgDashboard from "../components/Dashboard/OrgDashboard";
import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavBar";
// import RecDashboard from '../components/Dashboard/RecDashboard';

//Recipient and Organizer Dashboard to show cards belonging to a particular user. 
function Dashboard() {
  return (
    <Container fluid>
      <TopNavbar />
      <OrgDashboard />
    </Container>
  );
}

export default Dashboard;
