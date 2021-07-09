import { Navbar, Nav, Container } from 'react-bootstrap';
import { SmallGreenButton } from './StyledComponents/Buttons/SmallGreenButton';
import History from '../components/History/History';
// import Register from '../components/AccountSetUp/Register'
import PartiLogo from '../images/logo.svg';

function TopNavbar() {
	return (
		<Navbar fixed='top' bg='light' variant='light'>
			<Container fluid>
				<Navbar.Brand href='#home'>
					<img
						src={PartiLogo}
						width='35%'
						height='auto'
						max-width='40%'
						className='d-inline-block align-top'
						alt='Parti App Logo'
						min-width='25px'
					/>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls='basic-navbar-nav' />
				<Navbar.Collapse className='justify-content-end' id='basic-navbar-nav'>
					<Nav className='me-auto'>
						<Nav.Link href='/dashboard'>Dashboard</Nav.Link>
						{/* should change "How it works" to "Create new card" when Organizer is logged in with href changing to /create-card instead of /contributor */}
						<Nav.Link href='/contributor'>How it works</Nav.Link>
						{/* Button text Sign Up should change to Sign Out when logged in with functionality to logout */}
					</Nav>
				</Navbar.Collapse>
			</Container>
			<form>
				<SmallGreenButton onClick={() => History.push('/register')}>
					Sign Up
				</SmallGreenButton>
			</form>
		</Navbar>
	);
}
export default TopNavbar;
