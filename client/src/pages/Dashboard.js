import React from "react";
import OrgDashboard from "../components/Dashboard/OrgDashboard";
import { Container } from "react-bootstrap";
import TopNavbar from "../components/TopNavBar";
// import RecDashboard from '../components/Dashboard/RecDashboard';

function Dashboard() {
  return (
    <Container fluid>
      <TopNavbar />
      <OrgDashboard />
    </Container>
  );
}

export default Dashboard;
