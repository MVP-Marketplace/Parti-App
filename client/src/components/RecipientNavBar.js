// Determine whether or not we need separate Navbars for each user. We can simply write conditionals in the TopNavBar and delete this.

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';
import { SmallGreenButton } from './StyledComponents/Buttons/SmallGreenButton';
import History from '../components/History/History';
// import Register from '../components/AccountSetUp/Register'
import PartiLogo from '../images/logo.svg';
import { BiUserCircle } from 'react-icons/bi';
import ContributorEmail from './Contributor/ContributorEmail';

function RecipientNavBar() {
	return (
		<Navbar fixed='top' bg='white' expand='lg'>
			<Container>
				<Navbar.Brand href='/'>
					<img
						src={PartiLogo}
						width='35%'
						height='30em'
						className=''
						alt='Parti App Logo'
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
				<SmallGreenButton onClick={() => History.push('/create-card')}>
					+ New Card
				</SmallGreenButton>
			</form>
			<div>
				<BiUserCircle
					style={{
						width: '43px',
						height: '43px',
						display: 'flex',
						justifyContent: 'center',
					}}
				/>
			</div>
		</Navbar>
	);
}
export default RecipientNavBar;
