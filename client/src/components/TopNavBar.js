import React, { useContext } from "react";
import { AppContext } from "../contexts/AppContext";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { SmallGreenButton } from "./StyledComponents/Buttons/SmallGreenButton";
import History from "../components/History/History";
import PartiLogo from "../images/logo.svg";
import axios from "axios";
//write conditionals to change things based on who is logged in
//TODO: if anyone is logged in Login button changes to Logout
// How It Works link was there to give devs a link to it, but it should only be available to links contributors receive via email.
// if anyone is logged in, Add Create Card link
function LogBtn() {
  const { login, logout, loggedIn } = useContext(AppContext);
  return loggedIn ? (
    <SmallGreenButton onClick={logout}>Logout</SmallGreenButton>
  ) : (
    <SmallGreenButton onClick={() => History.push("/login")}>
      Login
    </SmallGreenButton>
  );
}
function TopNavbar() {
  const { loggedIn, currentUser } = useContext(AppContext);
  return (
    <Navbar fixed="top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand>
          <Nav.Link as={Link} to="/">
            <img
              src={PartiLogo}
              width="100%"
              height="30em"
              className=""
              alt="Parti App Logo"
            />
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/dashboard/:id">
              Dashboard
            </Nav.Link>
            {/* should change "How it works" to "Create new card" when Organizer is logged in with href changing to /create-card instead of /contributor */}
            <Nav.Link as={Link} to="/contributor">
              How it works
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      <form>
        {/* Button text Sign Up should change to Sign Out when logged in with functionality to logout */}
        <Link to="/create-card">
          <SmallGreenButton
          // onClick={() => History.push('/create-card')} // COMMENTED
          //{(e) => setLoggedIn(currentUser ? 'LogOut' : 'Register')}
          >
            + Create Card
          </SmallGreenButton>
        </Link>
      </form>
      <form>
        {/* Button text Sign Up should change to Sign Out when logged in with functionality to logout */}
        <LogBtn />
      </form>
    </Navbar>
  );
}
export default TopNavbar;
