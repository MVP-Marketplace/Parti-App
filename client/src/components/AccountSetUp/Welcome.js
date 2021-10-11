import { Card } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import HappyCard from '../../images/HappyCard.svg';
import SadCard from '../../images/SadCard.svg';
import './accountSetUp.css';

// This works to take you to the Dashboard page when you've registered as a recipient or organizer, but the user authentication and recognition code still needs to be functional
function Welcome() {
	const history = useHistory();

	return (
		<div className='welcome-container'>
			<Card className='register-card text-center'>
				<Card.Title as='h3'>Welcome to Parti Greetings</Card.Title>
				<Card.Subtitle as='h4'>Success!</Card.Subtitle>
				<Card.Img variant='top' src={HappyCard} />
				<Card.Text as='h4'>Your Account has been created!</Card.Text>
				<div>
					<SmallGreenButton
						type='submit'
						onClick={() => history.push('/create-card')}
						target='_blank'>
						Create Card
					</SmallGreenButton>
					<SmallGreenButton
						type='submit'
						onClick={() => history.push('/dashboard/:id')}
						target='_blank'>
						Go to Dashboard
					</SmallGreenButton>
				</div>
			</Card>
		</div>
	);
}

export default Welcome;
