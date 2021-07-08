import { Navbar, Nav, Container } from 'react-bootstrap';
import { SmallGreenButton } from './StyledComponents/Buttons/SmallGreenButton';
// import Register from '../components/AccountSetUp/Register'
import PartiLogo from '../images/logo.svg';

function TopNavbar() {
	return (
		<Navbar variant='light' fixed='top' bg='white'>
			<Container>
				<Navbar.Brand href='#home'>
					<img
						src={PartiLogo}
						width='120'
						height='35'
						className='d-inline-block align-top'
						alt='Parti App Logo'
					/>
				</Navbar.Brand>
				<Nav className='me-auto'>
					<Nav.Link href='/dashboard'>Dashboard</Nav.Link>
					{/* should change "How it works to Create new card when Organizer is logged in" */}
					<Nav.Link href='/contributor'>How it works</Nav.Link>
					{/* Button text should change to Sign Out when logged in */}
					<SmallGreenButton>Sign Up</SmallGreenButton>
				</Nav>
			</Container>
		</Navbar>
	);
}
export default TopNavbar;
