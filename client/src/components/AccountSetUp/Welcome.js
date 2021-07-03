import { Card, Button } from "react-bootstrap";
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import SadCard from '../../images/SadCard.svg'
import './accountSetUp.css'

function Welcome() {
    return (
        <Card>
          <Card.Title as="h3">Welcome to Parti Greetings</Card.Title>
          <Card.Subtitle as="h4">Success!</Card.Subtitle>
          <Card.Img variant="top" src={SadCard}/>
          <Card.Text as="h4">
            Your Account has been created!
          </Card.Text>
          <SmallGreenButton type="submit" href="/create-card">
            Create Card
          </SmallGreenButton>
          <Card.Link href="#">Go to Dashboard</Card.Link>
      </Card>
    );
  }
  
  export default Welcome;
  


