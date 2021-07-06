import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/PartiLogo.svg';
const navStyle = {
	backgroundColor: '#d7b0ff',
	height: '80px',
};

export default function Navbar() {
	return (
		<Navbar bg='light' expand='lg'>
			<Navbar.Brand href='#home'>{Logo}</Navbar.Brand>
			<Navbar.Toggle aria-controls='basic-navbar-nav' />
			<Navbar.Collapse id='basic-navbar-nav'>
				<Nav className='mr-auto'>
					<Nav.Link href='#home'>Home</Nav.Link>
					<Nav.Link href='#link'>Link</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
