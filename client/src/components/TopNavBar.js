import { Navbar, Nav, Container } from "react-bootstrap";
import { SmallGreenButton } from "./StyledComponents/Buttons/SmallGreenButton";
// import Register from '../components/AccountSetUp/Register'
import PartiLogo from "../images/logo.svg"

function TopNavbar() {

    return (
        <Navbar fixed="top" bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={PartiLogo}
                        width="120"
                        height="35"
                        className="d-inline-block align-top"
                        alt="Parti App Logo"
                    />
                </Navbar.Brand>
                <Nav className="me-auto">
                    <SmallGreenButton>
                        Sign Up
                    </SmallGreenButton>
                </Nav>
            </Container>
        </Navbar>
    )
}
export default TopNavbar