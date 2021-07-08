import { Card } from "react-bootstrap";
import { useHistory } from 'react-router-dom';
import { SmallGreenButton } from '../StyledComponents/Buttons/SmallGreenButton';
import SadCard from '../../images/SadCard.svg'
import './accountSetUp.css'

function Welcome() {

    const history = useHistory();

    return (
        <Card className="register-card text-center">
          <Card.Title as="h3">Welcome to Parti Greetings</Card.Title>
          <Card.Subtitle as="h4">Success!</Card.Subtitle>
          <Card.Img variant="top" src={SadCard}/>
          <Card.Text as="h4">
            Your Account has been created!
          </Card.Text>
          
          <SmallGreenButton
            type='submit' 
            onClick={()=> history.push("/create-card")}
            target="_blank"
            >
            Create Card
          </SmallGreenButton>
          <Card.Link href="/dashboard">Go to Dashboard</Card.Link>
      </Card>
    );
  }
  
  export default Welcome;
  


