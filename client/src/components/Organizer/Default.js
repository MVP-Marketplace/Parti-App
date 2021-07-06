import { Container, Col, Row } from 'react-bootstrap';
import TopNavBar from '../TopNavBar';
import Preview from './Preview';
import LSide from '../Sidebar/LSide';

function Default() {
	return (
		<div>
			<TopNavBar />
			<Container>
				<Row>
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
