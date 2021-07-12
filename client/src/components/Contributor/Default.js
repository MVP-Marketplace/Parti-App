import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../TopNavBar';
import Preview from './Preview';
import LSide from '../Sidebar/LSide';
import '../../App.css';

function Default() {
	return (
		<div className='organizer-page'>
			<TopNavBar />
			<Container>
				<Row xs={2}>
					<Col>
						<LSide />
					</Col>
					<Col>
						<Preview />
					</Col>
				</Row>
			</Container>
		</div>
	);
}

export default Default;
