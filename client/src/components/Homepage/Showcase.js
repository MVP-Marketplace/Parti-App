import { Container, Card, CardColumns } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import './index.css';

const containerStyle = {
	backgroundColor: '#ffffff',
};

function Showcase() {
	return (
		<Container style={{ containerStyle }}>
			<div>
				<h3>Here's what we can do at</h3>
				<h3>Parti App for all celebrations</h3>
				<br />
			</div>
			<CardColumns>
				<Card>
					<Card.Img variant='top' src='holder.js/100px160' />
					<Card.Body>
						<Card.Title>Card title that wraps to a new line</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet.</Card.Text>
					</Card.Body>
				</Card>
				<Card className='p-3'>
					<blockquote className='blockquote mb-0 card-body'>
						<p>Consectetur adipiscing elit.</p>
					</blockquote>
				</Card>
				<Card>
					<Card.Img variant='top' src='holder.js/100px160' />
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>TLorem ipsum dolor sit amet </Card.Text>
					</Card.Body>
					<Card.Footer>
						<small className='text-muted'>Last updated 3 mins ago</small>
					</Card.Footer>
				</Card>
				<Card bg='primary' text='white' className='text-center p-3'>
					<blockquote className='blockquote mb-0 card-body'>
						<h3>Let's start making memories!</h3>
						<br />
						<div className='button'>
							<Button variant='outline-secondary'>Let's Get Started!</Button>{' '}
						</div>
					</blockquote>
				</Card>
				<Card className='text-center'>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>Lorem ipsum dolor sit amet </Card.Text>
						<Card.Text>
							<small className='text-muted'>Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
				<Card>
					<Card.Img src='holder.js/100px160' />
				</Card>
				<Card className='text-right'>
					<blockquote className='blockquote mb-0 card-body'>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
						<footer className='blockquote-footer'>
							<small className='text-muted'>
								Someone famous in <cite title='Source Title'>Source Title</cite>
							</small>
						</footer>
					</blockquote>
				</Card>
				<Card>
					<Card.Body>
						<Card.Title>Card title</Card.Title>
						<Card.Text>
							This is a wider card with supporting text below as a natural
							lead-in to additional content. This card has even longer content
							than the first to show that equal height action.
						</Card.Text>
						<Card.Text>
							<small className='text-muted'>Last updated 3 mins ago</small>
						</Card.Text>
					</Card.Body>
				</Card>
			</CardColumns>
		</Container>
	);
}

export default Showcase;
