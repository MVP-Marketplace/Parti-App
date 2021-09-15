//mostly placeholders - can be updated when Jeff creates social pages and links.

import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import PurpleBackground from '../../images/purple-background.png';
import { FiTwitter } from 'react-icons/fi';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';
const footerStyle = {
	borderRadius: '5px',
	margin: 'top:0px',
};

const cardStyle = {
	backgroundColor: '#D7B0FF',
	border: 'none',
};

const FooterPage = () => {
	return (
		<div
			style={{
				backgroundImage: `url(${PurpleBackground})`,
				footerStyle,
			}}>
			<Row style={cardStyle}>
				<Col xs={6} md={6}>
					<Card style={cardStyle}>
						<Card.Body>
							<div>
								<h4>
									Stay Connected
									<a href='https://www.facebook.com/' className='facebook'>
										<FiFacebook icon={FiFacebook} />
									</a>
									<a href='https://www.instagram.com/' className='instagram'>
										<FiInstagram icon={FiInstagram} />
									</a>
									<a href='https://www.twitter.com/' className='twitter'>
										<FiTwitter icon={FiTwitter} />
									</a>
								</h4>
							</div>
							<h8>© 2021 Parti Greetings</h8>
						</Card.Body>
					</Card>
				</Col>
				<Col xs={6} md={2}>
					<Card style={cardStyle}></Card>
				</Col>
				<Col xs={6} md={4}>
					<Card style={cardStyle}>
						<Card.Body>
							<h4>hello@particards.com</h4>
							<h8>Terms of Service</h8> &nbsp;&nbsp;&nbsp;&nbsp;
							<h8>Privacy Policy</h8>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</div>
	);
};

export default FooterPage;
